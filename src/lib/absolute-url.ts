import { getSiteUrl } from "@/config/site";

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl() ?? "http://localhost:3000").toString();
}
