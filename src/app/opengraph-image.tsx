import { ImageResponse } from "next/og";

export const alt =
  "NuraBuild Contracting — contracting, renovation, and fit-out in the UAE";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #0F2433 0%, #152a3a 42%, #0F2433 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginBottom: 36,
          }}
        >
          <svg
            width="88"
            height="88"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="6" width="6" height="28" fill="#FAF7F2" />
            <rect x="30" y="6" width="6" height="28" fill="#FAF7F2" />
            <path
              d="M10 6L36 34V28L10 6Z"
              fill="#FAF7F2"
              opacity="0.88"
            />
            <rect x="0" y="36" width="40" height="2.5" rx="1" fill="#B88746" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#FAF7F2",
                letterSpacing: "-0.02em",
                fontFamily: "Georgia, 'Times New Roman', serif",
                lineHeight: 1.05,
              }}
            >
              NuraBuild
            </span>
            <span
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#D4A85C",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
              }}
            >
              Contracting
            </span>
          </div>
        </div>
        <div
          style={{
            width: 120,
            height: 4,
            background: "#B88746",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />
        <p
          style={{
            fontSize: 30,
            color: "rgba(250, 247, 242, 0.82)",
            maxWidth: 820,
            lineHeight: 1.45,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          Renovation, commercial fit-out, approvals, and site supervision across
          Dubai and the UAE.
        </p>
      </div>
    ),
    { ...size }
  );
}
