import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Maxera Talent | Professional Recruitment Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#111111",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Red accent bar top-left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "8px",
            height: "100%",
            backgroundColor: "#C6093C",
          }}
        />

        {/* Red diagonal shape */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-80px",
            width: "420px",
            height: "420px",
            backgroundColor: "#C6093C",
            opacity: 0.12,
            transform: "rotate(25deg)",
          }}
        />

        {/* Bottom-left accent */}
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "60px",
            width: "280px",
            height: "280px",
            backgroundColor: "#C6093C",
            opacity: 0.07,
            borderRadius: "50%",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: "60px 80px",
          }}
        >
          {/* Logo / Brand mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#C6093C",
                marginRight: "16px",
              }}
            />
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "22px",
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              MAXERA TALENT
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              marginBottom: "28px",
              maxWidth: "800px",
            }}
          >
            Professional{" "}
            <span style={{ color: "#C6093C" }}>Recruitment</span> Agency
          </div>

          {/* Tagline */}
          <div
            style={{
              color: "#AAAAAA",
              fontSize: "24px",
              fontWeight: 500,
              maxWidth: "620px",
              lineHeight: 1.4,
              borderLeft: "4px solid #C6093C",
              paddingLeft: "20px",
            }}
          >
            Connecting top companies with exceptional talent. Speed, precision,
            and reliability — every hire.
          </div>

          {/* Footer domain */}
          <div
            style={{
              position: "absolute",
              bottom: "48px",
              right: "80px",
              color: "#555555",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            maxeratalent.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
