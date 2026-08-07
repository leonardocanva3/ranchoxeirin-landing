export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  locale: "pt_BR",
  assetPaths: {
    images: "/images",
    videos: "/videos",
    icons: "/icons",
  },
} as const;

export function getSiteUrl() {
  return siteConfig.url ? new URL(siteConfig.url) : undefined;
}
