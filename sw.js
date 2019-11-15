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
  "https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js"
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
    "url": "2017/09/13/vue-mixin-apply",
    "revision": "b04b98f0cb04c34afff2513a2bebce5f"
  },
  {
    "url": "2017/09/13/vue-webp",
    "revision": "f21ee641f9779607c55347800dcff064"
  },
  {
    "url": "2017/09/13/xss-live",
    "revision": "83c7c1f0418c978d8d1157451902e620"
  },
  {
    "url": "2017/11/08/puppeteer-start",
    "revision": "f25175952f8b43d8153ea341662c3b1e"
  },
  {
    "url": "2017/12/01/version-lock",
    "revision": "9b3bb5b40b592659691093bfeb942b06"
  },
  {
    "url": "2018/01/29/project-next-cli",
    "revision": "8d101023b28b78a08afd9aa069299be4"
  },
  {
    "url": "about",
    "revision": "874817c579a733ab0a552a83f2a99d74"
  },
  {
    "url": "archives/2017/09",
    "revision": "7ffdbc9ad8bbeec3110f70edf3e565a5"
  },
  {
    "url": "archives/2017/11",
    "revision": "dfc1643daa7fcfe78ddafbeb5bf87399"
  },
  {
    "url": "archives/2017/12",
    "revision": "0580d819654a780390f2c6502d53f8cd"
  },
  {
    "url": "archives/2017",
    "revision": "99565be94acd2377ecd24e13ef0c32f4"
  },
  {
    "url": "archives/2018/01",
    "revision": "4497eaac5dcd8116fa6ab6d417cb3845"
  },
  {
    "url": "archives/2018",
    "revision": "5569682fe39e83308c84eaf827ee0549"
  },
  {
    "url": "archives",
    "revision": "61649aaf79bd89788a55a93405e67612"
  },
  {
    "url": "css/main.css",
    "revision": "b952d8a20aeda4a2a25a6335ef3df036"
  },
  {
    "url": "images/algolia_logo.svg",
    "revision": "fd40b88ac5370a5353a50b8175c1f367"
  },
  {
    "url": "images/avatar.gif",
    "revision": "2bed513bc5f13733cf9a8a12c4e1a971"
  },
  {
    "url": "images/cc-by-nc-nd.svg",
    "revision": "1c681acc4a150e7236254c464bb5a797"
  },
  {
    "url": "images/cc-by-nc-sa.svg",
    "revision": "12b4b29e8453be5b7828b524d3feabce"
  },
  {
    "url": "images/cc-by-nc.svg",
    "revision": "dd9cfe99ed839a4a548114f988d653f4"
  },
  {
    "url": "images/cc-by-nd.svg",
    "revision": "2d80546af20128215dc1e23ef42d06c2"
  },
  {
    "url": "images/cc-by-sa.svg",
    "revision": "c696b3db81cbbfba32f66c1dc88b909a"
  },
  {
    "url": "images/cc-by.svg",
    "revision": "6c4f8422b3725cb9f26b6c00e95fc88b"
  },
  {
    "url": "images/cc-zero.svg",
    "revision": "79deee77a07fcb79ff680ac0125eacb9"
  },
  {
    "url": "images/dev.jpg",
    "revision": "e458a09fe062b6e281127fec19cb6b48"
  },
  {
    "url": "images/loading.gif",
    "revision": "c2196de8ba412c60c22ab491af7b1409"
  },
  {
    "url": "images/placeholder.gif",
    "revision": "c2196de8ba412c60c22ab491af7b1409"
  },
  {
    "url": "images/project-flow.png",
    "revision": "282255ac56850bf9a57a47e632d83f0c"
  },
  {
    "url": "images/quote-l.svg",
    "revision": "1238a4baccd02c6025ec85b58f4282d4"
  },
  {
    "url": "images/quote-r.svg",
    "revision": "85787c6fa27965c81f7be70252b43bed"
  },
  {
    "url": "images/searchicon.png",
    "revision": "3d6b5c9d6d6c26a2b76a14b8fdf3438a"
  },
  {
    "url": "index.html",
    "revision": "28f834c362eda484f776c5c2c71f89c3"
  },
  {
    "url": "js/src/affix.js",
    "revision": "683c19859764baf0d17538897ea1eba2"
  },
  {
    "url": "js/src/algolia-search.js",
    "revision": "f5fa392318805997089ceb3a925979ba"
  },
  {
    "url": "js/src/bootstrap.js",
    "revision": "8b6864d08134476c1fcb328f5e51dff3"
  },
  {
    "url": "js/src/exturl.js",
    "revision": "2b444179b3145e5007b4d371dac07cd3"
  },
  {
    "url": "js/src/hook-duoshuo.js",
    "revision": "45997b0c06abff3cd88efd901f614065"
  },
  {
    "url": "js/src/js.cookie.js",
    "revision": "6e9eb1f53afb135aedaf90739c867738"
  },
  {
    "url": "js/src/motion.js",
    "revision": "a94df9d4c18f632e6dc097bfefb0aad8"
  },
  {
    "url": "js/src/post-details.js",
    "revision": "9a53fef7381270bb8c96a611d52ebc04"
  },
  {
    "url": "js/src/schemes/pisces.js",
    "revision": "aa788a9a68ff8d352b7b6e3dbb4ace96"
  },
  {
    "url": "js/src/scroll-cookie.js",
    "revision": "890406ae3539e4721ef5f314542e5e46"
  },
  {
    "url": "js/src/scrollspy.js",
    "revision": "fafdd7ab6af233b701506c733910b7f5"
  },
  {
    "url": "js/src/utils.js",
    "revision": "ecade23d7bb77f013893186d56a92059"
  },
  {
    "url": "lib/algolia-instant-search/instantsearch.min.css",
    "revision": "029a13b44e6807955106ff3c075a02f9"
  },
  {
    "url": "lib/algolia-instant-search/instantsearch.min.js",
    "revision": "0db46eba0c8133693ee839507b1612f2"
  },
  {
    "url": "lib/canvas-nest/canvas-nest.min.js",
    "revision": "36e103d2a05bc706bac40f9ab8881eb7"
  },
  {
    "url": "lib/canvas-ribbon/canvas-ribbon.js",
    "revision": "3da4eef253db4019ff4d8b6bf829b400"
  },
  {
    "url": "lib/fancybox/source/blank.gif",
    "revision": "325472601571f31e1bf00674c368d335"
  },
  {
    "url": "lib/fancybox/source/fancybox_loading.gif",
    "revision": "328cc0f6c78211485058d460e80f4fa8"
  },
  {
    "url": "lib/fancybox/source/fancybox_loading@2x.gif",
    "revision": "f92938639fa894a0e8ded1c3368abe98"
  },
  {
    "url": "lib/fancybox/source/fancybox_overlay.png",
    "revision": "77aeaa52715b898b73c74d68c630330e"
  },
  {
    "url": "lib/fancybox/source/fancybox_sprite.png",
    "revision": "783d4031fe50c3d83c960911e1fbc705"
  },
  {
    "url": "lib/fancybox/source/fancybox_sprite@2x.png",
    "revision": "ed9970ce22242421e66ff150aa97fe5f"
  },
  {
    "url": "lib/fancybox/source/helpers/fancybox_buttons.png",
    "revision": "b448080f8615e664b7788c7003803b59"
  },
  {
    "url": "lib/fancybox/source/helpers/jquery.fancybox-buttons.css",
    "revision": "cac75538c2e3ddfadef839feaca8e356"
  },
  {
    "url": "lib/fancybox/source/helpers/jquery.fancybox-buttons.js",
    "revision": "f53c246661fb995a3f12e67fa38e0fa0"
  },
  {
    "url": "lib/fancybox/source/helpers/jquery.fancybox-media.js",
    "revision": "c017067f48d97ec4a077ccdf056e6a2e"
  },
  {
    "url": "lib/fancybox/source/helpers/jquery.fancybox-thumbs.css",
    "revision": "52ddd84a9f42c1d4cd86d518a7f7e8bc"
  },
  {
    "url": "lib/fancybox/source/helpers/jquery.fancybox-thumbs.js",
    "revision": "cf1fc1df534eede4cb460c5cbd71aba6"
  },
  {
    "url": "lib/fancybox/source/jquery.fancybox.css",
    "revision": "6c55951ce1e3115711f63f99b7501f3a"
  },
  {
    "url": "lib/fancybox/source/jquery.fancybox.js",
    "revision": "921e9cb04ad6e2559869ec845c5be39b"
  },
  {
    "url": "lib/fancybox/source/jquery.fancybox.pack.js",
    "revision": "cc9e759f24ba773aeef8a131889d3728"
  },
  {
    "url": "lib/fastclick/lib/fastclick.js",
    "revision": "6e9d3b0da74f2a4a7042b494cdaa7c2e"
  },
  {
    "url": "lib/fastclick/lib/fastclick.min.js",
    "revision": "a0fc6c24d1f3ff9ac281887c92b24acd"
  },
  {
    "url": "lib/fastclick/README.html",
    "revision": "b3cd6e7f930bf6e410a2e7eab8a148a8"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "lib/jquery_lazyload/CONTRIBUTING.html",
    "revision": "7287727950845c8a1010f3933691afef"
  },
  {
    "url": "lib/jquery_lazyload/jquery.lazyload.js",
    "revision": "8b427f9e86864ee3aaf1ae33e6e14263"
  },
  {
    "url": "lib/jquery_lazyload/jquery.scrollstop.js",
    "revision": "f163fd8f02361928853668a96f8a1249"
  },
  {
    "url": "lib/jquery_lazyload/README.html",
    "revision": "d89aa4afe316331a25b636b5ead4716e"
  },
  {
    "url": "lib/jquery/index.js",
    "revision": "32015dd42e9582a80a84736f5d9a44d7"
  },
  {
    "url": "lib/pace/pace-theme-barber-shop.min.css",
    "revision": "e8dc66cf2d88abc25fbc89b8a0529abb"
  },
  {
    "url": "lib/pace/pace-theme-big-counter.min.css",
    "revision": "db2b8fe31e60f19021545277d2f6e05e"
  },
  {
    "url": "lib/pace/pace-theme-bounce.min.css",
    "revision": "ad954aa0bace4b213eeb19d6e89a0bda"
  },
  {
    "url": "lib/pace/pace-theme-center-atom.min.css",
    "revision": "8f6bc803acefc6f93afc98fb38201456"
  },
  {
    "url": "lib/pace/pace-theme-center-circle.min.css",
    "revision": "93c72298781226a80a9c66b27b21a57d"
  },
  {
    "url": "lib/pace/pace-theme-center-radar.min.css",
    "revision": "f0099bdd1cd42e9476bd7abc417c0328"
  },
  {
    "url": "lib/pace/pace-theme-center-simple.min.css",
    "revision": "eddff4756dbf21dbbff1c543bd894dde"
  },
  {
    "url": "lib/pace/pace-theme-corner-indicator.min.css",
    "revision": "776826157cb28ac1ee5e78771292b9ba"
  },
  {
    "url": "lib/pace/pace-theme-fill-left.min.css",
    "revision": "965859b39001da08e1e92327fe3d8e12"
  },
  {
    "url": "lib/pace/pace-theme-flash.min.css",
    "revision": "aab39b436e1fa0fdc51df06f2d53c38a"
  },
  {
    "url": "lib/pace/pace-theme-loading-bar.min.css",
    "revision": "4e05877f1f9efb9c1e7dd75cb78c764f"
  },
  {
    "url": "lib/pace/pace-theme-mac-osx.min.css",
    "revision": "29ae030ceaa8158352c5472218375b91"
  },
  {
    "url": "lib/pace/pace-theme-minimal.min.css",
    "revision": "f48f04d370993b55a2745e548cc82743"
  },
  {
    "url": "lib/pace/pace.min.js",
    "revision": "24d2d5e3e331c4efa3cda1e1851b31a7"
  },
  {
    "url": "lib/three/canvas_lines.min.js",
    "revision": "1324174ae6190fbf63b7bf0ad0a8a5bd"
  },
  {
    "url": "lib/three/canvas_sphere.min.js",
    "revision": "5c6bc45b137448b5b9df152ccfb2659c"
  },
  {
    "url": "lib/three/three-waves.min.js",
    "revision": "41059bd5e5c7aa520b1b411919e5121f"
  },
  {
    "url": "lib/three/three.min.js",
    "revision": "3298078bce82bdb1afadf5b1a280915e"
  },
  {
    "url": "lib/velocity/velocity.js",
    "revision": "0361fa6dcf4cf4d19c593cdab0937dd0"
  },
  {
    "url": "lib/velocity/velocity.min.js",
    "revision": "c1b8d079c7049879838d78e0b389965e"
  },
  {
    "url": "lib/velocity/velocity.ui.js",
    "revision": "f55d22cc592c9f8d4ffd3b41a6b90081"
  },
  {
    "url": "lib/velocity/velocity.ui.min.js",
    "revision": "444faf512fb24d50a5dec747cbbe39bd"
  },
  {
    "url": "tags/cli",
    "revision": "24ada85c9d9565c029b858a3915db8e9"
  },
  {
    "url": "tags/crawler",
    "revision": "26ef6570656dc7f5afee1b4844d482f0"
  },
  {
    "url": "tags",
    "revision": "d7b8db347562c1dbe224790dabb90f97"
  },
  {
    "url": "tags/mixin",
    "revision": "ba7cd3163d9b1a670529d4aadb635f0d"
  },
  {
    "url": "tags/Node",
    "revision": "2511bd7bf306c762f318a32914bdc997"
  },
  {
    "url": "tags/npm",
    "revision": "de9b559ebc0332e6917e8f126bfc5fb9"
  },
  {
    "url": "tags/puppeteer",
    "revision": "fc709c75d98d00ef4b18751ea21312eb"
  },
  {
    "url": "tags/vue",
    "revision": "c74272d50a361ea85a82fb5d6cbc3b95"
  },
  {
    "url": "tags/webp",
    "revision": "b1cac40db4b18fb477f7d3192c1629b5"
  },
  {
    "url": "tags/xss",
    "revision": "7cc1232344fb5d423c52e96e5a4d9953"
  },
  {
    "url": "tags/yarn",
    "revision": "51df97546dcea5823bf2244887d3c3df"
  },
  {
    "url": "tags/脚手架",
    "revision": "617f91fe0ddd200bd7414c024db0b456"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("**/*.{html,js,css,svg,jpeg,jpg,png,gif}", workbox.strategies.staleWhileRevalidate({ "cacheName":"precache", plugins: [] }), 'GET');
