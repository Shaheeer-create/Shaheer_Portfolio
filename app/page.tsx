"use client"

import { useState } from "react"
import PortfolioLanding from "../portfolio-landing"
import SimplePortfolio from "../simple-portfolio"
import DetailedPortfolio from "../detailed-portfolio"
type ViewMode = "landing" | "simple" | "detailed"

export default function Page() {
  const [currentView, setCurrentView] = useState<ViewMode>("landing")

  const handleModeSelect = (mode: "simple" | "detailed") => {
    setCurrentView(mode)
  }

  const handleBack = () => {
    setCurrentView("landing")
  }

  return (
    <>
      {currentView === "landing" && <PortfolioLanding onModeSelect={handleModeSelect} />}
      {currentView === "simple" && <SimplePortfolio onBack={handleBack} />}
      {currentView === "detailed" && <DetailedPortfolio onBack={handleBack} />}
    </>
  )
}
