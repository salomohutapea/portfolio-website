!function(){"use strict";const e=1611368926631,t=`cache${e}`,s=["/client/client.95d20f8f.js","/client/inject_styles.5607aec6.js","/client/index.f03c5171.js","/client/about.a6536130.js","/client/index.6d41d3cd.js","/client/browser-ponyfill.069e66b8.js","/client/[slug].8651f8e7.js"].concat(["/service-worker-index.html","/aos/aos.css","/aos/aos.js","/font-awesome.js","/global.css","/manifest.json","/pic-portrait.jpg","/picc.png","/works.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),c=s.protocol.startsWith("http"),a=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&n.has(s.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
