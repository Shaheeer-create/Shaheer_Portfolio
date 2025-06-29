import { NextResponse } from "next/server"

export async function GET() {
  const profile = {
    personal: {
      name: "Shaheer Naeem",
      fatherName: "Naeem Shahzad",
      status: "Student",
      seekingOpportunities: "Student work opportunities",
      location: "Pakistan",
    },
    education: {
      currentInstitution: "The Educator",
      matriculation: {
        year: 2025,
        status: "Completed",
      },
      currentLearning: {
        institution: "Governor House",
        program: "Python for AI/SDK Development",
        focus: "Agent-based Systems",
        status: "In Progress",
      },
    },
    skills: {
      webDevelopment: ["HTML", "CSS", "Tailwind CSS", "Next.js"],
      currentlyLearning: ["Python", "AI/SDK Development", "Agent-based Systems"],
      proficiencyLevel: {
        HTML: "Advanced",
        CSS: "Advanced",
        "Tailwind CSS": "Advanced",
        "Next.js": "Intermediate",
        Python: "Beginner",
        "AI/SDK": "Beginner",
      },
    },
    experience: {
      professionalExperience: "None",
      seekingRole: "Student Developer Position",
      availability: "Part-time/Internship",
      interests: ["Web Development", "Artificial Intelligence", "Agent-based Systems", "Full-stack Development"],
    },
    contact: {
      preferredContact: "Professional inquiries welcome",
      availability: "Open to student work opportunities",
    },
    lastUpdated: new Date().toISOString(),
  }

  return NextResponse.json(profile, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
