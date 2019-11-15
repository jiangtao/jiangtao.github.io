/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2017/09/13/vue-mixin-apply/index.html",
    "revision": "95327daca86efd76b2d50e898e827faf"
  },
  {
    "url": "2017/09/13/vue-webp/index.html",
    "revision": "e9620969eb4fe8a8749f71003f835a47"
  },
  {
    "url": "2017/09/13/xss-live/index.html",
    "revision": "cfede5c61e5f69344ee5ad87ea379c8b"
  },
  {
    "url": "2017/11/08/puppeteer-start/index.html",
    "revision": "e3e70622efb45c0f78c1f4ac0d3d5c38"
  },
  {
    "url": "2017/12/01/version-lock/index.html",
    "revision": "268e814cc7edc35a7fbefe36a6268b4d"
  },
  {
    "url": "2018/01/29/project-next-cli/index.html",
    "revision": "22de1c9ef3b550d5d68b99168d40dec6"
  },
  {
    "url": "about/index.html",
    "revision": "bddc6136f65ac6f10409940a7c48da71"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "c4f3e7a1356eff2a87e196921d3fa151"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "dfc1643daa7fcfe78ddafbeb5bf87399"
  },
  {
    "url": "archives/2017/12/index.html",
    "revision": "0580d819654a780390f2c6502d53f8cd"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "f15bab35fbfbd2c79d6a031907740816"
  },
  {
    "url": "archives/2018/01/index.html",
    "revision": "4497eaac5dcd8116fa6ab6d417cb3845"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "5569682fe39e83308c84eaf827ee0549"
  },
  {
    "url": "archives/index.html",
    "revision": "a7e3d80e34b4ef412f781ffe50d985e4"
  },
  {
    "url": "index.html",
    "revision": "69ce6a20fc1c3583aeb2c5dc8d0d2427"
  },
  {
    "url": "lib/fastclick/README.html",
    "revision": "b3cd6e7f930bf6e410a2e7eab8a148a8"
  },
  {
    "url": "lib/jquery_lazyload/CONTRIBUTING.html",
    "revision": "7287727950845c8a1010f3933691afef"
  },
  {
    "url": "lib/jquery_lazyload/README.html",
    "revision": "d89aa4afe316331a25b636b5ead4716e"
  },
  {
    "url": "tags/cli/index.html",
    "revision": "24ada85c9d9565c029b858a3915db8e9"
  },
  {
    "url": "tags/crawler/index.html",
    "revision": "26ef6570656dc7f5afee1b4844d482f0"
  },
  {
    "url": "tags/index.html",
    "revision": "08984904b981f83b7fb83ea1fae6ac12"
  },
  {
    "url": "tags/mixin/index.html",
    "revision": "ba7cd3163d9b1a670529d4aadb635f0d"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "2511bd7bf306c762f318a32914bdc997"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "de9b559ebc0332e6917e8f126bfc5fb9"
  },
  {
    "url": "tags/puppeteer/index.html",
    "revision": "fc709c75d98d00ef4b18751ea21312eb"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c74272d50a361ea85a82fb5d6cbc3b95"
  },
  {
    "url": "tags/webp/index.html",
    "revision": "b1cac40db4b18fb477f7d3192c1629b5"
  },
  {
    "url": "tags/xss/index.html",
    "revision": "7cc1232344fb5d423c52e96e5a4d9953"
  },
  {
    "url": "tags/yarn/index.html",
    "revision": "51df97546dcea5823bf2244887d3c3df"
  },
  {
    "url": "tags/脚手架/index.html",
    "revision": "617f91fe0ddd200bd7414c024db0b456"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("**/*.jpg", workbox.strategies.staleWhileRevalidate({ "cacheName":"images", plugins: [] }), 'GET');
