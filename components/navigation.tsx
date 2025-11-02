"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [language, setLanguage] = useState<"ENG" | "ESP">("ENG")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "archive", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const NavLink = ({ id, label }: { id: string; label: string }) => {
    const isActive = activeSection === id
    return (
      <button
        onClick={() => scrollToSection(id)}
        className="text-base font-bold tracking-wide hover:opacity-70 transition-opacity uppercase"
      >
        {isActive ? `[${label}]` : label}
      </button>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#d9d4cc] border-b border-transparent">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 md:gap-16">
            <NavLink id="home" label="HOME" />
            <NavLink id="about" label="ABOUT" />
            <NavLink id="archive" label="ARCHIVE" />
            <NavLink id="contact" label="CONTACT" />
          </div>
          <button
            onClick={() => setLanguage(language === "ENG" ? "ESP" : "ENG")}
            className="text-base font-bold tracking-wide hover:opacity-70 transition-opacity"
          >
            {language}/ESP
          </button>
        </div>
      </div>
    </nav>
  )
}
