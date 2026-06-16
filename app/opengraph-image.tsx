import { ImageResponse } from "next/og";

// Social preview image shown on WhatsApp, Facebook, LinkedIn, X, etc.
// File-based: Next auto-injects og:image and twitter:image for every route
// that doesn't define its own. Generated at build, no static asset needed.
export const runtime = "edge";
export const alt = "Zero Web Lab — Web Design & Brand Identity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#030303",
          fontFamily: "sans-serif",
        }}
      >
        {/* Indigo glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -200,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.55), rgba(139,92,246,0) 70%)",
          }}
        />
        <div
          style={{
            color: "#8B5CF6",
            fontSize: 26,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          zeroweblab.it
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 120,
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}
        >
          Zero Web Lab
        </div>
        <div
          style={{
            color: "#D4D4D8",
            fontSize: 40,
            marginTop: 30,
            maxWidth: 860,
          }}
        >
          Siti Web, Landing Page ed Esperienze Digitali che convertono.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 56,
            color: "#9CA3AF",
            fontSize: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#8B5CF6",
            }}
          />
          Web Design &amp; Brand Identity · Cuneo, IT
        </div>
      </div>
    ),
    { ...size }
  );
}
