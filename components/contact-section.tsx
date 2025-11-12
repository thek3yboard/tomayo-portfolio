"use client"

import type React from "react"
import { useState, useEffect } from "react"
import emailjs from "emailjs-com"

import { Footer } from "@/components/footer";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  useEffect(() => {
    setTimeout(() => {
      if(status === 'success' || status === 'error') {
        setStatus("idle")
      }
    }, 2500);
  }, [status])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      })
      .catch((error) => {
        console.error(error)
        setStatus("error")
      })
  }

  return (
    <section id="contact" className="min-h-[calc(100vh-5rem)] pt-16 pb-4 flex flex-col justify-between">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="mb-12">
          <div className="flex items-center gap-8 mb-8">
            <h2 className="font-sans font-semibold text-5xl">CONTACT</h2>
            <div className="flex-1 h-[2px] bg-black"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between">
            <p className="font-sans text-xl">
              Thanks for reaching me out, it would be a pleasure to hear your proposal and work in a project together.
              You can find direct links below to contact me, or just fill up the form to send me a message.
            </p>

            <div className="space-y-4">
              <div className="bg-[#ede9e5] border border-gray-300 p-4 flex items-center gap-4 shadow-sm">
                <div className="text-3xl"><CallIcon sx={{ fontSize: 50, color: "#21180E" }} /></div>
                <div>
                  <p className="font-sans font-light text-md">Phone</p>
                  <p className="font-sans font-semibold text-lg tracking-wide">(+54) 11 6238 8686</p>
                </div>
              </div>

              <div className="bg-[#ede9e5] border border-gray-300 p-4 flex items-center gap-4 shadow-sm">
                <div className="text-3xl"><MailIcon sx={{ fontSize: 50, color: "#21180E" }} /></div>
                <div>
                  <p className="font-sans font-light text-md">Email</p>
                  <p className="font-sans font-semibold text-lg tracking-wide">tomas.ceb21@hotmail.com</p>
                </div>
              </div>

              <div className="bg-[#ede9e5] border border-gray-300 p-4 flex items-center gap-4 shadow-sm">
                <div className="text-3xl"><LinkedInIcon sx={{ fontSize: 50, color: "#21180E" }} /></div>
                <div>
                  <p className="font-sans font-light text-md">Linkedin</p>
                  <p className="font-sans font-semibold text-lg tracking-wide">Tomas Ceballos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-sans text-3xl font-medium mb-6">Contact me</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 font-sans font-light text-lg bg-[#ede9e5] border border-gray-300 focus:outline-none focus:border-gray-500 shadow-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 font-sans font-light text-lg bg-[#ede9e5] border border-gray-300 focus:outline-none focus:border-gray-500 shadow-sm"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                required
                className="w-full px-4 py-3 font-sans font-light text-lg bg-[#ede9e5] border border-gray-300 focus:outline-none focus:border-gray-500 resize-none shadow-sm"
              />
              <span className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-sans font-normal text-xl text-[#ede9e5] tracking-widest bg-[#6c0e06] hover:bg-[#8b2f2f] transition-colors py-2 px-4 disabled:opacity-60"
                >
                  {status === "sending" ? "SENDING..." : "SEND"} 
                </button>
                {status === "success" && (
                  <p className="text-green-700 text-sm flex items-center">Message sent successfully ✅</p>
                )}
                {status === "error" && (
                  <p className="text-red-700 text-sm flex items-center">Something went wrong. Please try again.</p>
                )}
              </span>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
