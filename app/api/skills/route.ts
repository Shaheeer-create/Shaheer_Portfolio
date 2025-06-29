import { NextResponse } from "next/server"

export async function GET() {
  const skills = {
    technicalSkills: {
      webDevelopment: {
        frontend: [
          {
            skill: "HTML",
            level: "Advanced",
            experience: "2+ years",
            description: "Semantic HTML, accessibility best practices",
          },
          {
            skill: "CSS",
            level: "Advanced",
            experience: "2+ years",
            description: "Modern CSS, Flexbox, Grid, animations",
          },
          {
            skill: "Tailwind CSS",
            level: "Advanced",
            experience: "1+ years",
            description: "Utility-first CSS framework, responsive design",
          },
        ],
        frameworks: [
          {
            skill: "Next.js",
            level: "Intermediate",
            experience: "1+ years",
            description: "React framework, SSR, API routes, App Router",
          },
        ],
      },
      programmingLanguages: [
        {
          language: "JavaScript",
          level: "Intermediate",
          context: "Web development, React/Next.js",
        },
        {
          language: "TypeScript",
          level: "Beginner",
          context: "Type-safe JavaScript development",
        },
        {
          language: "Python",
          level: "Learning",
          context: "AI/SDK development, agent-based systems",
          institution: "Governor House",
        },
      ],
    },
    currentLearning: {
      primaryFocus: "Python for AI/SDK Development",
      specialization: "Agent-based Systems",
      institution: "Governor House",
      learningPath: [
        "Python fundamentals",
        "AI/ML concepts",
        "SDK development",
        "Agent-based system architecture",
        "Practical project implementation",
      ],
      expectedCompletion: "2025-2026",
    },
    softSkills: [
      "Problem-solving",
      "Self-directed learning",
      "Adaptability",
      "Communication",
      "Time management",
      "Attention to detail",
    ],
    tools: ["Git/GitHub", "VS Code", "Browser DevTools", "Command Line", "Package Managers (npm, pip)"],
    lastUpdated: new Date().toISOString(),
  }

  return NextResponse.json(skills, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
