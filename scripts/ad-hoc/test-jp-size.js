// Let's recap the exact sizes on JP:
// Image size: 2.23 GB
// Layer 1: 1.89 GB (COPY .build/next/standalone ./)
// Layer 2: 143 MB (node:26-trixie-slim)
// Layer 3: 46.2 MB (better-sqlite3)
// Layer 4: 16.7 MB (apt / npm patch)
//
// Inside the 1.89 GB standalone layer on JP:
// .build/next/server: 964 MB
// node_modules: 607 MB
//   - onnxruntime-node: 211 MB (win32: 124M, darwin: 35M, linux-x64: 34M, linux-arm64: 19M)
//   - onnxruntime-web: 130 MB (wasm: ~75M, dist JS: ~20M, maps: ~6M)
//   - better-sqlite3: 45 MB
//   - sql.js: 24 MB
//   - tiktoken + js-tiktoken: 45 MB
//   - typescript: 20 MB
//   - @ngrok: 19 MB
//   - @img: 19 MB
//   - next: 17 MB
//   - es-toolkit: 17 MB
//   - playwright-core: 14 MB
// src: 96 MB (src/i18n: 69 MB)
// .build/next/node_modules: 113 MB
// .build/next/static: 81 MB
