import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Wikipedia Golf";

// ponytail: 内蔵フォントは日本語を持っていない（豆腐になる）ので英字のみ。
// 日本語を載せたくなったら Noto Sans JP の woff を fetch して fonts に渡す。
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 60%)",
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 800, color: "#059669" }}>
          Wikipedia Golf
        </div>
        <div style={{ fontSize: 40, color: "#4b5563", marginTop: 24 }}>
          Reach the goal article in the fewest links.
        </div>
      </div>
    ),
    size
  );
}
