import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") || "Shaheer Naeem"
  const subtitle = searchParams.get("subtitle") || "Student Developer | AI/SDK Learning"

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e40af",
        backgroundImage: "linear-gradient(45deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "60px",
          margin: "40px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          width: "90%",
          maxWidth: "800px",
        }}
      >
        {/* Profile Image Placeholder */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "60px",
            backgroundColor: "#e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
            border: "4px solid #3b82f6",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              color: "#6b7280",
            }}
          >
            👨‍💻
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#6b7280",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          {subtitle}
        </div>

        {/* Skills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {["Next.js", "Tailwind CSS", "Python", "AI/SDK"].map((skill) => (
            <div
              key={skill}
              style={{
                backgroundColor: "#dbeafe",
                color: "#1e40af",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            fontSize: "18px",
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          Son of Naeem Shahzad • Student at The Educator • Learning at Governor House
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
