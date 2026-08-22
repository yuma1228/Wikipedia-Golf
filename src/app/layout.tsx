import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://wikipedia-golf-theta.vercel.app";
const TITLE = "Wikipedia Golf｜ウィキペディアのリンクを辿る最短ルートゲーム";
const DESCRIPTION =
  "Wikipedia Golf（ウィキペディアゴルフ）は、Wikipediaの記事内リンクだけを辿ってゴールの記事に最短手数でたどり着く無料ブラウザゲーム。ランダムのお題でも、自分で決めたお題でも遊べます。登録不要・スマホ対応。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s｜Wikipedia Golf",
  },
  description: DESCRIPTION,
  keywords: [
    "Wikipedia Golf",
    "ウィキペディアゴルフ",
    "ウィキペディア ゲーム",
    "Wikipedia リンク 辿る",
    "wikiracing",
    "無料 ブラウザゲーム",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Wikipedia Golf",
    title: TITLE,
    description: DESCRIPTION,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {modal}
      </body>
    </html>
  );
}
