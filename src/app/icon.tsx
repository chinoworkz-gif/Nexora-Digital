import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #ff6432 0%, #ff455f 45%, #f72585 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          color: "white",
          fontSize: 34,
          fontWeight: 900,
          letterSpacing: "-0.08em",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        N
      </div>
    ),
    {
      ...size,
    },
  );
}