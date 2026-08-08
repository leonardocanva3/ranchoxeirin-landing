import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async headers() {
    const securityHeaders = [
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=()",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob:",
          "media-src 'self' blob:",
          "font-src 'self'",
          "frame-src https://www.google.com",
          "connect-src 'self' https://wa.me https://api.whatsapp.com",
          "base-uri 'self'",
          "form-action 'self'",
          "frame-ancestors 'none'",
        ].join("; "),
      },
    ];

    const publicAssetCacheHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=604800, stale-while-revalidate=2592000",
      },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/images/:path*",
        headers: publicAssetCacheHeaders,
      },
      {
        source: "/icons/:path*",
        headers: publicAssetCacheHeaders,
      },
      {
        source: "/videos/:path*",
        headers: publicAssetCacheHeaders,
      },
    ];
  },
};

export default nextConfig;
