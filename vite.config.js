import { defineConfig } from "vite";
import { createProxyMiddleware } from "http-proxy-middleware";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://api.privatbank.ua",
        changeOrigin: true,
        secure: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    },
  },
});
