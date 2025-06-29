import { NextResponse } from "next/server"

export async function GET() {
  const stats = {
    profile: {
      name: "Shaheer Naeem",
      age: "Student",
      location: "Pakistan",
      status: "Active Student Developer",
    },
    education: {
      matriculationYear: 2025,
      currentInstitution: "The Educator",
      additionalLearning: "Governor House - Python AI/SDK",
    },
    skills: {
      totalSkills: 6,
      webTechnologies: 4,
      programmingLanguages: 2,
      currentlyLearning: 3,
    },
    experience: {
      yearsOfLearning: "2+",
      professionalExperience: 0,
      projectsCompleted: "Multiple academic projects",
      seekingOpportunities: true,
    },
    learning: {
      currentProgram: "Python for AI/SDK Development",
      focus: "Agent-based Systems",
      institution: "Governor House",
      expectedCompletion: "2025-2026",
    },
    availability: {
      status: "Available",
      type: "Student work opportunities",
      schedule: "Flexible",
      commitment: "Part-time/Internship",
    },
    lastUpdated: new Date().toISOString(),
    apiVersion: "1.0.0",
  }

  return NextResponse.json(stats, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
