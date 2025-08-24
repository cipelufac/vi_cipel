
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/vi_cipel/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/vi_cipel"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 26229, hash: 'fffff250319d57a182df0e9362a7e98ff34930014ce5d65a16b6727f9b5cde91', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9336, hash: 'b9e890d0541dbd40523b9baca05a31924489f6ca63dc8b92f2c38ee641a7a0b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 86223, hash: '0a7f9d2e710304cdb570dab64e6052ba4f195a9b18d80db1b8e5d3c608ea8714', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RWP7IRXX.css': {size: 406230, hash: '6Aj5ihFcd2A', text: () => import('./assets-chunks/styles-RWP7IRXX_css.mjs').then(m => m.default)}
  },
};
