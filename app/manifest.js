export default function manifest() {
  return {
    name: "Mula Kebi Blog",
    short_name: "Mula Kebi Blog",
    description: "Mula Kebi Blog",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/apple-touch-icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
