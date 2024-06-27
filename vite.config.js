const { defineConfig } = require('vite');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://сервер-api-url.com',
        changeOrigin: true,
        secure: false,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    }
  }
});
