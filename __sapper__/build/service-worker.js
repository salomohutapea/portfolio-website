!function(){"use strict";const e=1615358123423,t=`cache${e}`,s=["/client/client.d68d1903.js","/client/inject_styles.5607aec6.js","/client/index.ba6c521b.js","/client/about.4987f8ef.js","/client/index.e99ccb94.js","/client/browser-ponyfill.7fccbaa1.js","/client/[slug].9dd6e733.js"].concat(["/service-worker-index.html","/aos/aos.css","/aos/aos.js","/font-awesome.js","/global.css","/manifest.json","/pic-portrait.jpg","/picc.png","/works.json"]),c=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),n=s.protocol.startsWith("http"),a=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&c.has(s.pathname),o="only-if-cached"===t.request.cache&&!i;!n||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const c=await s.match(t);if(c)return c;throw e}}(t.request))())}))}();
