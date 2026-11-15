import type { NextConfig } from "next";
import { headersFor } from "./security-headers.mjs"; // KIT

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false, // KIT: no "X-Powered-By: Next.js"
  cacheComponents: true,
  partialPrefetching: true,
  // KIT: security headers (+ X-Robots-Tag noindex on unlicensed previews)
  async headers() {
    return [{ source: "/:path*", headers: headersFor() }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
