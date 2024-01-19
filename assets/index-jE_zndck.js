(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Hello World!</h1>
    <h3>I'm Steven, this is a temporary site while I learn other stuff. I will probably come back to this when I think I actually need a portfolio website.</h3>
    <div class="card">
      <a class="button "href="https://github.com/Stvnwastaken" target="_blank">Click me</a>
    </div>
    <p class="read-the-docs">
      Click on the cool button to see my github
    </p>
  </div>
`;setupCounter(document.querySelector("#counter"));
