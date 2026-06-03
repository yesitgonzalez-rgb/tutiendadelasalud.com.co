import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://tutiendadelasalud.com.co/sitemap.xml",
    host: "https://tutiendadelasalud.com.co",
  };
}
