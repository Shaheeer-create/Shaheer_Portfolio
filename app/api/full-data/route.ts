import { NextResponse } from "next/server"

export async function GET() {
  const fullData = {
    // Personal Information
    personal: {
      name: "Shaheer Naeem",
      fatherName: "Naeem Shahzad",
      avatarURL: "https://avatars.githubusercontent.com/u/175212094?s=96&v=4",
      status: "Student",
      location: "Pakistan",
      seekingOpportunities: "Student work opportunities",
      availability: "Available for part-time/internship positions",
      careerStage: "Entry-level student developer",
      lastUpdated: new Date().toISOString(),
    },

    // Education Details
    education: {
      currentInstitution: {
        name: "The Educator",
        level: "Secondary/Higher Secondary",
        status: "Current Student",
        location: "Pakistan",
      },
      academicHistory: {
        matriculation: {
          year: 2025,
          status: "Completed",
          achievement: "Successfully completed matriculation",
          institution: "The Educator",
        },
      },
      continuingEducation: {
        program: "Python for AI/SDK Development",
        institution: "Governor House",
        focus: "Agent-based Systems",
        startDate: "2025",
        status: "In Progress",
        expectedCompletion: "2025-2026",
        description: "Specialized training in Python programming with focus on AI and SDK development, particularly agent-based systems",
        curriculum: [
          "Python fundamentals",
          "AI/ML concepts and implementation",
          "SDK development principles",
          "Agent-based system architecture",
          "Practical project implementation",
          "Machine learning algorithms",
          "Neural networks basics",
          "API development and integration",
        ],
      },
      academicInterests: [
        "Artificial Intelligence",
        "Software Development",
        "Agent-based Systems",
        "Web Technologies",
        "Machine Learning",
        "Full-stack Development",
        "API Development",
        "Modern JavaScript Frameworks",
      ],
      learningGoals: [
        "Master Python programming for AI applications",
        "Develop expertise in AI/SDK development",
        "Build sophisticated agent-based systems",
        "Gain practical experience in software development",
        "Secure meaningful student work opportunities",
        "Contribute to open-source projects",
        "Build a strong professional portfolio",
      ],
    },

    // Technical Skills
    skills: {
      webDevelopment: {
        frontend: [
          {
            skill: "HTML",
            level: "Advanced",
            experience: "2+ years",
            proficiency: 90,
            description: "Semantic HTML5, accessibility best practices, modern web standards",
            projects: ["Multiple responsive websites", "Landing pages", "Web applications"],
          },
          {
            skill: "CSS",
            level: "Advanced",
            experience: "2+ years",
            proficiency: 85,
            description: "Modern CSS3, Flexbox, Grid, animations, responsive design",
            specialties: ["Responsive design", "CSS Grid", "Flexbox", "Animations", "Custom properties"],
          },
          {
            skill: "Tailwind CSS",
            level: "Advanced",
            experience: "1+ years",
            proficiency: 88,
            description: "Utility-first CSS framework, component design, responsive utilities",
            expertise: ["Custom configurations", "Component libraries", "Responsive design", "Dark mode"],
          },
        ],
        frameworks: [
          {
            skill: "Next.js",
            level: "Intermediate",
            experience: "1+ years",
            proficiency: 75,
            description: "React framework, SSR, SSG, API routes, App Router",
            features: ["App Router", "Server Components", "API Routes", "Static Generation", "Image Optimization"],
          },
        ],
        backend: [
          {
            skill: "API Development",
            level: "Beginner",
            experience: "Learning",
            proficiency: 40,
            description: "RESTful APIs, JSON handling, server-side logic",
          },
        ],
      },
      programmingLanguages: [
        {
          language: "JavaScript",
          level: "Intermediate",
          experience: "1+ years",
          proficiency: 70,
          context: "Web development, React/Next.js, DOM manipulation",
          concepts: ["ES6+", "Async/Await", "Promises", "Event handling", "API integration"],
        },
        {
          language: "TypeScript",
          level: "Beginner",
          experience: "6 months",
          proficiency: 45,
          context: "Type-safe JavaScript development, Next.js projects",
          learning: ["Type definitions", "Interfaces", "Generics", "Type inference"],
        },
        {
          language: "Python",
          level: "Learning",
          experience: "Current",
          proficiency: 30,
          context: "AI/SDK development, agent-based systems",
          institution: "Governor House",
          focus: ["AI/ML libraries", "SDK development", "Agent frameworks", "Data structures"],
        },
      ],
      currentLearning: {
        primaryFocus: "Python for AI/SDK Development",
        specialization: "Agent-based Systems",
        institution: "Governor House",
        instructor: "Professional AI/ML instructors",
        coursework: [
          "Python syntax and fundamentals",
          "Object-oriented programming in Python",
          "AI/ML library usage (NumPy, Pandas, TensorFlow)",
          "Agent-based modeling and simulation",
          "SDK design patterns",
          "API integration and development",
          "Machine learning algorithms implementation",
          "Neural network basics",
        ],
        practicalProjects: [
          "Building simple AI agents",
          "Creating Python SDKs",
          "Implementing machine learning models",
          "Developing agent communication systems",
        ],
        expectedOutcomes: [
          "Proficiency in Python for AI applications",
          "Ability to create agent-based systems",
          "SDK development capabilities",
          "Understanding of AI/ML concepts",
        ],
      },
      tools: [
        {
          category: "Development",
          tools: ["VS Code", "Git/GitHub", "Command Line/Terminal", "Browser DevTools"],
        },
        {
          category: "Package Managers",
          tools: ["npm", "yarn", "pip"],
        },
        {
          category: "Design",
          tools: ["Figma (basic)", "Canva", "Adobe tools (learning)"],
        },
        {
          category: "AI/ML (Learning)",
          tools: ["Jupyter Notebooks", "Google Colab", "Python IDEs"],
        },
      ],
      softSkills: [
        "Problem-solving and analytical thinking",
        "Self-directed learning and research",
        "Adaptability to new technologies",
        "Clear communication and documentation",
        "Time management and organization",
        "Attention to detail and quality",
        "Collaborative teamwork",
        "Critical thinking and debugging",
      ],
    },

    // Experience and Opportunities
    experience: {
      professionalExperience: {
        status: "No prior professional experience",
        careerStage: "Entry-level student seeking first opportunities",
        readiness: "Eager to apply academic knowledge in real-world projects",
      },
      projectExperience: {
        type: "Academic and personal projects",
        webProjects: [
          "Responsive websites using HTML/CSS",
          "Interactive web applications with JavaScript",
          "Modern web apps built with Next.js",
          "Styled components using Tailwind CSS",
          "API integration projects",
        ],
        currentProjects: [
          "Learning Python through Governor House comprehensive program",
          "Building agent-based systems as part of coursework",
          "Developing AI/SDK skills through practical exercises",
          "Creating portfolio projects to showcase skills",
        ],
        upcomingProjects: [
          "Full-stack web application with Next.js",
          "Python-based AI agent system",
          "Personal portfolio website",
          "Open-source contribution goals",
        ],
      },
      seekingOpportunities: {
        type: "Student work opportunities",
        preferredRoles: [
          "Junior Web Developer",
          "Frontend Developer Intern",
          "Student Developer",
          "Part-time Developer",
          "Freelance Web Developer",
          "AI/ML Intern (future goal)",
          "Full-stack Developer Trainee",
        ],
        workArrangement: [
          "Part-time positions",
          "Internship programs",
          "Remote work opportunities",
          "Flexible hour arrangements",
          "Project-based work",
          "Mentorship programs",
        ],
        industries: [
          "Technology startups",
          "Web development agencies",
          "E-commerce companies",
          "Educational technology",
          "AI/ML companies (future)",
          "Software development firms",
        ],
      },
      careerGoals: {
        shortTerm: [
          "Secure first student work opportunity",
          "Complete Python AI/SDK program successfully",
          "Build comprehensive portfolio of projects",
          "Gain practical development experience",
          "Establish professional network",
          "Contribute to open-source projects",
        ],
        mediumTerm: [
          "Become proficient full-stack developer",
          "Specialize in AI/ML development",
          "Lead development projects",
          "Mentor other students",
          "Build innovative web applications",
        ],
        longTerm: [
          "Senior developer role in AI/tech company",
          "Create impactful agent-based systems",
          "Start own tech venture",
          "Contribute significantly to AI/ML field",
          "Become recognized expert in chosen specialization",
        ],
      },
      availability: {
        status: "Immediately available for student work",
        schedule: "Flexible around academic commitments",
        hoursPerWeek: "15-25 hours (part-time)",
        commitment: "Dedicated to learning and contributing value",
        startDate: "Immediate",
        workingHours: "Flexible, can accommodate different time zones",
        weekendAvailability: true,
      },
      strengths: [
        "Strong foundation in modern web technologies",
        "Eager to learn and quickly adapt to new technologies",
        "Self-motivated and disciplined learner",
        "Fresh perspective and innovative thinking",
        "Up-to-date with modern technology stack",
        "Strong problem-solving abilities",
        "Excellent attention to detail",
        "Passionate about technology and development",
      ],
      uniqueValue: [
        "Modern skill set aligned with current industry needs",
        "Fresh graduate perspective with latest learning methodologies",
        "Strong foundation in both traditional web dev and emerging AI",
        "Bilingual capabilities and cultural adaptability",
        "Cost-effective solution for companies seeking talent",
        "High motivation and commitment to growth",
      ],
    },

    // Contact and Professional Information
    contact: {
      personalInfo: {
        name: "Shaheer Naeem",
        fatherName: "Naeem Shahzad",
        status: "Student Developer",
        location: "Pakistan",
        profileImage: "/images/shaheer-profile.png",
      },
      professionalContact: {
        availability: "Open to student work opportunities and professional inquiries",
        preferredContact: "Professional inquiries welcome through appropriate channels",
        responseTime: "Within 24-48 hours for professional communications",
        workingHours: "Flexible schedule around academic commitments",
        timeZone: "Pakistan Standard Time (PST)",
        languages: ["English", "Urdu"],
      },
      opportunityTypes: [
        "Student developer positions",
        "Part-time development work",
        "Internship opportunities in web development",
        "Freelance web development projects",
        "Mentorship and learning opportunities",
        "Open-source collaboration",
        "Remote work opportunities",
      ],
      currentFocus: [
        "Completing Python AI/SDK program at Governor House",
        "Building comprehensive portfolio projects",
        "Seeking practical development experience",
        "Learning advanced agent-based systems",
        "Networking with industry professionals",
        "Contributing to open-source projects",
      ],
      professionalNote: "Shaheer is a dedicated and ambitious student developer with a strong foundation in modern web technologies. He's actively expanding his skill set with Python and AI/SDK development while seeking opportunities to apply his knowledge in real-world projects. His combination of technical skills, learning agility, and fresh perspective makes him an excellent candidate for student developer positions.",
    },

    // Statistics and Metrics
    stats: {
      profile: {
        name: "Shaheer Naeem",
        fatherName: "Naeem Shahzad",
        age: "Student",
        location: "Pakistan",
        status: "Active Student Developer",
        profileImage: "/images/shaheer-profile.png",
      },
      education: {
        matriculationYear: 2025,
        currentInstitution: "The Educator",
        additionalLearning: "Governor House - Python AI/SDK",
        expectedGraduation: "2025-2026",
        academicFocus: "Technology and Computer Science",
      },
      skillMetrics: {
        totalSkills: 8,
        webTechnologies: 4,
        programmingLanguages: 3,
        currentlyLearning: 4,
        proficiencyLevels: {
          advanced: 3,
          intermediate: 2,
          beginner: 2,
          learning: 1,
        },
      },
      experienceMetrics: {
        yearsOfLearning: "2+",
        professionalExperience: 0,
        academicProjects: "10+",
        personalProjects: "5+",
        seekingOpportunities: true,
        availabilityStatus: "Immediate",
      },
      learningProgress: {
        currentProgram: "Python for AI/SDK Development",
        focus: "Agent-based Systems",
        institution: "Governor House",
        progressPercentage: 40,
        expectedCompletion: "2025-2026",
        weeklyHours: "15-20 hours",
      },
      marketReadiness: {
        webDevelopment: 85,
        frontendDevelopment: 88,
        modernFrameworks: 75,
        aiMlReadiness: 35,
        overallReadiness: 70,
      },
    },

    // API Metadata
    metadata: {
      apiVersion: "2.0.0",
      lastUpdated: new Date().toISOString(),
      dataCompleteness: "100%",
      profileStatus: "Active",
      verificationStatus: "Verified Student",
      dataSource: "Official Profile Information",
      updateFrequency: "Weekly",
      nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      endpoints: {
        fullData: "/api/full_data",
        ogImage: "/api/og-image",
        profile: "/api/profile",
        education: "/api/education",
        skills: "/api/skills",
        experience: "/api/experience",
        contact: "/api/contact",
        stats: "/api/stats",
      },
      socialMedia: {
        ogImage: "/api/og-image",
        profileImage: "/images/shaheer-profile.png",
        shareableProfile: true,
      },
    },
  }

  return NextResponse.json(fullData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "application/json",
    },
  })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}
