import type { MetadataRoute } from "next";

// ponytail: /Golf と /Goal はランダム生成の使い捨てページなので、
// インデックスさせると「中身の薄いページ」扱いでサイト全体の評価が下がる。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/Golf", "/Goal", "/preview"],
    },
    sitemap: "https://wikipedia-golf-theta.vercel.app/sitemap.xml",
  };
}
