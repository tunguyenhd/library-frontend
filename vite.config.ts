import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon-192x192.jpg", "icon-512x512.jpg"],
      manifest: {
        name: "Code Knowledge",
        short_name: "CodeKnow",
        description:
          "Nơi lưu trữ kiến thức lập trình Front-End, Back-End và nhiều ngôn ngữ hơn.",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        scope: "/library-frontend/",
        start_url: "/library-frontend/",
        orientation: "portrait-primary",
        categories: ["education", "developer tools"],
        icons: [
          {
            src: "icon-192x192.jpg",
            sizes: "192x192",
            type: "image/jpeg",
          },
          {
            src: "icon-512x512.jpg",
            sizes: "512x512",
            type: "image/jpeg",
          },
          {
            src: "icon-512x512.jpg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg,woff,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  base: "/library-frontend/",
});
