/* site-decrypt.js — SSG-agnostic decryption companion for site-encrypt.
 * No dependencies, no framework hooks. Works with any static site generator.
 *
 * Discovery contract (attribute names are fixed across SSGs):
 *   [data-site-encrypt="1"]                 payload root (one or more per page)
 *   data-site-encrypt-version="1"            format version (must match)
 *   data-site-encrypt-iterations             PBKDF2 iterations (>= 100000 enforced)
 *   data-site-encrypt-salt/-nonce/-ciphertext (base64url, no padding)
 *   data-site-encrypt-target="<selector>"    OPTIONAL split-UI mode: plaintext is
 *                                            injected into the target element and
 *                                            the root is hidden. Without it
 *                                            (self-contained mode) plaintext
 *                                            replaces root.innerHTML.
 *   Inside root: a <form> with <input type="password">, and optionally
 *   [role="alert"] for error output (created is NOT auto-created; without it
 *   failures are silent except input focus/select).
 *
 * Success always dispatches `site-encrypt:unlocked` on document with
 * detail {root, target} so site code can re-initialise components
 * (code highlighting, players, TOC, ...).
 *
 * Optional overrides (all optional):
 *   window.SiteEncrypt = { errorText, paramsErrorText };
 *   per-root attribute data-site-encrypt-error-text (wrong-password message).
 */
(function(){
  "use strict";
  var VERSION = "1";
  var MIN_ITERATIONS = 100000;

  var enc = new TextEncoder();
  var dec = new TextDecoder();

  function siteConfig(){ return window.SiteEncrypt || {}; }
  function errorText(root){
    return root.getAttribute("data-site-encrypt-error-text")
      || siteConfig().errorText
      || "Password is incorrect or the content has been corrupted.";
  }
  function paramsErrorText(){
    return siteConfig().paramsErrorText
      || "Encrypted content is misconfigured and cannot be decrypted.";
  }

  function b64urlToBytes(value){
    var padded = value.replace(/-/g, "+").replace(/_/g, "/")
      + "=".repeat((4 - value.length % 4) % 4);
    var raw = atob(padded);
    var out = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
    return out;
  }

  async function deriveKey(password, salt, iterations){
    var material = await crypto.subtle.importKey(
      "raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]
    );
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: salt, iterations: iterations, hash: "SHA-256" },
      material,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
  }

  function showError(error, msg){
    if(!error) return;
    error.textContent = msg;
    error.hidden = false;
    if(error.classList) error.classList.add("is-visible");
  }
  function hideError(error){
    if(!error) return;
    error.hidden = true;
    if(error.classList) error.classList.remove("is-visible");
  }

  async function unlock(root, form, input, error){
    hideError(error);
    var btn = form.querySelector("button[type=submit], input[type=submit], button:not([type])");
    if(btn) btn.disabled = true;
    try{
      if(!window.crypto || !crypto.subtle) throw new Error("no-subtle");
      var ds = root.dataset;
      if(ds.siteEncryptVersion !== VERSION) throw new Error("bad-version");
      var iterations = Number(ds.siteEncryptIterations);
      if(!Number.isSafeInteger(iterations) || iterations < MIN_ITERATIONS) throw new Error("bad-params");
      if(!ds.siteEncryptSalt || !ds.siteEncryptNonce || !ds.siteEncryptCiphertext) throw new Error("bad-params");
      var key = await deriveKey(input.value || "", b64urlToBytes(ds.siteEncryptSalt), iterations);
      var plain = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: b64urlToBytes(ds.siteEncryptNonce) },
        key,
        b64urlToBytes(ds.siteEncryptCiphertext)
      );
      var html = dec.decode(plain);
      var target = null;
      var sel = root.getAttribute("data-site-encrypt-target");
      if(sel){
        try{ target = document.querySelector(sel); }catch(e){ target = null; }
      }
      if(target){
        target.innerHTML = html;
        target.hidden = false;
        if(target.removeAttribute) target.removeAttribute("hidden");
        root.hidden = true;
      }else{
        root.innerHTML = html;
      }
      // Drop ciphertext from memory after success.
      try{
        delete ds.siteEncryptCiphertext;
        delete ds.siteEncryptSalt;
        delete ds.siteEncryptNonce;
      }catch(e){}
      document.dispatchEvent(new CustomEvent("site-encrypt:unlocked", {
        detail: { root: root, target: target }
      }));
    }catch(e){
      var misconfigured = e && (e.message === "bad-version" || e.message === "bad-params" || e.message === "no-subtle");
      showError(error, misconfigured ? paramsErrorText() : errorText(root));
      try{ input.focus(); input.select(); }catch(e2){}
    }finally{
      if(btn) btn.disabled = false;
    }
  }

  function init(){
    var roots = document.querySelectorAll('[data-site-encrypt="1"]');
    for(var i = 0; i < roots.length; i++){
      (function(root){
        if(root._siteEncryptBound) return;
        root._siteEncryptBound = true;
        var form = root.querySelector("form");
        var input = root.querySelector('input[type="password"]');
        var error = root.querySelector("[role=alert]");
        if(!form || !input) return;
        form.addEventListener("submit", function(ev){
          ev.preventDefault();
          unlock(root, form, input, error);
        });
      })(roots[i]);
    }
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  }else{
    init();
  }
})();
