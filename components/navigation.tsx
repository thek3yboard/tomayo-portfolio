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
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const NavLink = ({ id, label }: { id: string; label: string }) => {
    return (
      <button
        onClick={() => scrollToSection(id)}
        className="relative px-3 text-black transition tracking-wide uppercase font-mono text-3xl font-bold"
      >
        <span className="before:absolute before:left-[-5] before:opacity-0 before:content-['['] after:absolute after:right-[-5] after:opacity-0 after:content-[']'] hover:before:opacity-100 hover:after:opacity-100 hover:before:translate-x-0 hover:after:translate-x-0 before:-translate-x-1 after:translate-x-1 transition-all duration-200">
          {label}
        </span>
      </button>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ede9e5] border-b border-transparent">
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
