"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [language, setLanguage] = useState<"ENG" | "ESP">("ENG")
  const [menuOpen, setMenuOpen] = useState(false)

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

  const scrollToSection = (sectionId: string, device: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = device === "desktop" ? -80 : 0
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  const NavLink = ({ id, label, device }: { id: string; label: string, device: string }) => (
    <button
      onClick={() => scrollToSection(id, device)}
      className="relative px-3 text-black transition tracking-wide uppercase font-mono text-3xl max-md:text-xl font-bold"
    >
      <span className="before:absolute before:left-[-5] before:opacity-0 before:content-['['] after:absolute after:right-[-5] after:opacity-0 after:content-[']'] hover:before:opacity-100 hover:after:opacity-100 hover:before:translate-x-0 hover:after:translate-x-0 before:-translate-x-1 after:translate-x-1 transition-all duration-200">
        {label}
      </span>
    </button>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ede9e5] border-b border-transparent">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-4 md:py-6 flex items-center justify-between">
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 md:gap-16">
          <NavLink id="home" label="HOME" device="desktop" />
          <NavLink id="about" label="ABOUT" device="desktop" />
          <NavLink id="archive" label="ARCHIVE" device="desktop" />
          <NavLink id="contact" label="CONTACT" device="desktop" />
        </div>

        {/* Language toggle */}
        <button
          onClick={() => setLanguage(language === "ENG" ? "ESP" : "ENG")}
          className="font-mono font-bold text-base hover:opacity-70 transition-opacity hidden md:block"
          disabled
        >
          {language}/ESP
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#ede9e5] border-t border-gray-300 flex flex-col items-center py-6 space-y-6 animate-slideDown">
          <NavLink id="home" label="HOME" device="mobile" />
          <NavLink id="about" label="ABOUT" device="mobile" />
          <NavLink id="archive" label="ARCHIVE" device="mobile" />
          <NavLink id="contact" label="CONTACT" device="mobile" />
          <button
            onClick={() => setLanguage(language === "ENG" ? "ESP" : "ENG")}
            className="font-mono font-bold text-base hover:opacity-70 transition-opacity"
            disabled
          >
            {language}/ESP
          </button>
        </div>
      )}
    </nav>
  )
}
