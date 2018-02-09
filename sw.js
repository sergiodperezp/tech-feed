importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/css/basic.min.css",
    "revision": "822b3306af2588e7ec8614d0c497176e"
  },
  {
    "url": "assets/css/style.css",
    "revision": "a7ab61e54d48779270d816f90a39d249"
  },
  {
    "url": "assets/icons/icon-144.png",
    "revision": "51e95715a7197b2c6e2d326bc7baeb18"
  },
  {
    "url": "assets/icons/icon-192.png",
    "revision": "052873cd25b9fd6deac0d16ff914d1de"
  },
  {
    "url": "assets/icons/icon-240.png",
    "revision": "3052caf8cb06b4196dfb2a2d0b05b238"
  },
  {
    "url": "assets/icons/icon-48.png",
    "revision": "ae406f6aacc8a9716688109eeed3d627"
  },
  {
    "url": "assets/icons/icon-512.png",
    "revision": "c2cc15a7e88c49fdf5d7c329dd5eac82"
  },
  {
    "url": "assets/icons/icon-96.png",
    "revision": "6b76d2b3299a3de2e1e270e773fc7e97"
  },
  {
    "url": "assets/js/basic.min.js",
    "revision": "b04532186fd75b2291895ee831a6889e"
  },
  {
    "url": "assets/js/script.js",
    "revision": "38ac8815efd34f98aeb4ab72cddc74e0"
  },
  {
    "url": "favicon.ico",
    "revision": "1ef52389bff782823a36afbef440e071"
  },
  {
    "url": "index.html",
    "revision": "b61ec0f9abc4cb94166ce891f5251daa"
  },
  {
    "url": "manifest.json",
    "revision": "4dec7f3203ce7a1aa316a2e2e159b4ab"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
