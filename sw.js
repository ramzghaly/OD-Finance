// OD -Finance: يسمح بتثبيت السيستم كتطبيق. لا يخزّن نسخة قديمة: دايماً بيجيب أحدث نسخة من النت.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() =>
    new Response('<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width"><body dir=rtl style="font:16px sans-serif;padding:24px">لا يوجد اتصال بالإنترنت. اتصل بالنت وافتح السيستم تاني.</body>', { headers: { 'content-type': 'text/html; charset=utf-8' } })));
});
