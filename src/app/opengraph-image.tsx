import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} - Soluciones digitales para negocios`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          overflow: "hidden",
          background: "#fffaf7",
          color: "#07162c",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(247, 37, 133, 0.18)",
            filter: "blur(20px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: -160,
            bottom: -170,
            width: 560,
            height: 560,
            borderRadius: 999,
            background: "rgba(255, 138, 36, 0.22)",
            filter: "blur(20px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 70,
            width: 330,
            height: 210,
            borderRadius: 34,
            background: "white",
            border: "1px solid rgba(7, 22, 44, 0.08)",
            boxShadow: "0 28px 80px rgba(7, 22, 44, 0.16)",
            display: "flex",
            flexDirection: "column",
            padding: 28,
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 56,
                borderRadius: 16,
                background: "#fff3ee",
              }}
            />
            <div
              style={{
                flex: 1,
                height: 56,
                borderRadius: 16,
                background: "#ffe8f2",
              }}
            />
          </div>

          <div
            style={{
              width: "100%",
              height: 90,
              borderRadius: 18,
              background:
                "linear-gradient(135deg, rgba(116, 87, 245, 0.16), rgba(247, 37, 133, 0.10))",
              display: "flex",
              alignItems: "flex-end",
              gap: 10,
              padding: 18,
            }}
          >
            {[42, 64, 52, 86, 72, 104, 118].map((height, index) => (
              <div
                key={index}
                style={{
                  width: 20,
                  height,
                  borderRadius: 999,
                  background:
                    index % 2 === 0
                      ? "linear-gradient(180deg, #ff6432, #f72585)"
                      : "linear-gradient(180deg, #7457f5, #f72585)",
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "68%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 44,
            }}
          >
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: 20,
                background:
                  "linear-gradient(135deg, #ff6432 0%, #ff455f 45%, #f72585 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 42,
                fontWeight: 900,
                letterSpacing: "-0.08em",
              }}
            >
              N
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                {siteConfig.name}
              </div>

              <div
                style={{
                  marginTop: 6,
                  fontSize: 18,
                  color: "#667285",
                }}
              >
                {siteConfig.slogan}
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-0.055em",
              maxWidth: 760,
            }}
          >
            Modernizamos tu negocio con tecnología que genera resultados
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 24,
              lineHeight: 1.45,
              color: "#586476",
              maxWidth: 720,
            }}
          >
            Sitios web, sistemas, automatización y soluciones digitales para
            negocios que quieren crecer.
          </div>

          <div
            style={{
              marginTop: 42,
              display: "flex",
              gap: 16,
            }}
          >
            {["Sitios web", "Sistemas", "Automatización"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "14px 20px",
                  borderRadius: 999,
                  background: "white",
                  border: "1px solid rgba(7, 22, 44, 0.08)",
                  color: "#07162c",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}