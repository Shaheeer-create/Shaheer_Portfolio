import { NextResponse } from "next/server"

export async function GET() {
  const contact = {
    personalInfo: {
      name: "Shaheer Naeem",
      fatherName: "Naeem Shahzad",
      status: "Student",
    },
    professionalContact: {
      availability: "Open to student work opportunities",
      preferredContact: "Professional inquiries welcome",
      responseTime: "Within 24-48 hours",
      workingHours: "Flexible around academic schedule",
    },
    opportunityTypes: [
      "Student developer positions",
      "Part-time development work",
      "Internship opportunities",
      "Freelance projects",
      "Mentorship opportunities",
    ],
    currentFocus: [
      "Completing Python AI/SDK program at Governor House",
      "Building portfolio projects",
      "Seeking practical development experience",
      "Learning agent-based systems",
    ],
    note: "Shaheer is a dedicated student developer eager to apply his skills in HTML, CSS, Tailwind CSS, and Next.js while continuing to learn Python for AI/SDK development. He's actively seeking student work opportunities to gain practical experience.",
    lastUpdated: new Date().toISOString(),
  }

  return NextResponse.json(contact, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
