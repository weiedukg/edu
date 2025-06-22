import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 180,
  height: 180,
}

export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(135deg, #2563eb 0%, #f97316 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px",
      }}
    >
      WEI
    </div>,
    {
      ...size,
    },
  )
}
