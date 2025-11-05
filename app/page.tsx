import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ArchiveSection } from "@/components/archive-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="bg-[#ede9e5]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ArchiveSection />
      <ContactSection />
    </main>
  )
}
