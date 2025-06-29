import { NextResponse } from "next/server"

export async function GET() {
  const education = {
    currentEducation: {
      institution: "The Educator",
      level: "Secondary/Higher Secondary",
      status: "Current Student",
    },
    academicHistory: {
      matriculation: {
        year: 2025,
        status: "Completed",
        achievement: "Successfully completed matriculation",
      },
    },
    continuingEducation: {
      program: "Python for AI/SDK Development",
      institution: "Governor House",
      focus: "Agent-based Systems",
      startDate: "2025",
      status: "In Progress",
      description:
        "Specialized training in Python programming with focus on AI and SDK development, particularly agent-based systems",
    },
    academicInterests: [
      "Artificial Intelligence",
      "Software Development",
      "Agent-based Systems",
      "Web Technologies",
      "Machine Learning",
    ],
    learningGoals: [
      "Master Python programming",
      "Develop expertise in AI/SDK development",
      "Build agent-based systems",
      "Gain practical experience in software development",
      "Secure student work opportunities",
    ],
    lastUpdated: new Date().toISOString(),
  }

  return NextResponse.json(education, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
