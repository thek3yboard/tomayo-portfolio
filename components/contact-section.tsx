"use client"

import type React from "react"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="mb-12">
          <div className="flex items-center gap-8 mb-8">
            <h2 className="text-5xl md:text-6xl font-bold">CONTACT</h2>
            <div className="flex-1 h-[2px] bg-black"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-8">
              Thanks for reaching me out, it would be a pleasure to hear your proposal and work in a project together.
              You can find direct links below to contact me, or just fill up the form to send me a message.
            </p>

            <div className="space-y-4">
              <div className="bg-white/50 border border-gray-300 p-6 flex items-center gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-lg font-semibold">(+54) 11 6238 8686</p>
                </div>
              </div>

              <div className="bg-white/50 border border-gray-300 p-6 flex items-center gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-lg font-semibold">tomas.ceb21@hotmail.com</p>
                </div>
              </div>

              <div className="bg-white/50 border border-gray-300 p-6 flex items-center gap-4">
                <div className="text-3xl">💼</div>
                <div>
                  <p className="text-sm text-gray-600">Linkedin</p>
                  <p className="text-lg font-semibold">Tomas Ceballos</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact me</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={8}
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 focus:outline-none focus:border-gray-500 resize-none"
              />
              <button
                type="submit"
                className="bg-[#6b1f1f] text-white px-12 py-3 font-bold text-lg hover:bg-[#8b2f2f] transition-colors"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
