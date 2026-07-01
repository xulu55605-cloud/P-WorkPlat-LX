// =============================================
// Service Worker - Nozzle PM 工作平台
// 支持离线缓存，PWA 安装后可离线使用
// =============================================

const CACHE_NAME = 'nozzle-pm-v1';

// 需要预缓存的核心资源
const PRECACHE_ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ---- Install：预缓存核心文件 ----
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// ---- Activate：清理旧缓存 ----
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ---- Fetch：缓存优先策略（Cache First） ----
// 优先返回缓存，未命中再请求网络并更新缓存
self.addEventListener('fetch', event => {
  // 只处理 GET 请求，跳过非 http(s) 请求（如 file:// 链接）
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          // 只缓存有效的同源响应
          if (
            response &&
            response.status === 200 &&
            response.type === 'basic'
          ) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => {
          // 离线且无缓存时，返回主页面（适合 SPA）
          return caches.match('./index.html');
        });
    })
  );
});
