"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import AnimatedButton from "@/components/ui/animatedbutton"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Reset status when user starts typing again
    if (status.submitted || status.error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: false,
        message: "",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: false, message: "" })

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xvgrdegv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent successfully.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Message sending failed:", error);
    
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: "Sorry, there was an error sending your message. Please try again.",
      });
    }
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-2xl border border-slate-700/50 bg-slate-800/90 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </CardTitle>
            <CardDescription className="text-slate-400 mt-2">
              I&lsquo;d love to hear from you. Send me a message and I&lsquo;ll respond as soon as possible.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-slate-300">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-emerald-500/20 border-slate-600 bg-slate-700/50 text-slate-100 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-slate-700"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-slate-300">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-emerald-500/20 border-slate-600 bg-slate-700/50 text-slate-100 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-slate-700"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-slate-300">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-emerald-500/20 border-slate-600 bg-slate-700/50 text-slate-100 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-slate-700 resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <AnimatedButton
              type="submit"
              disabled={status.submitting}
              isSubmitting={status.submitting}
              isSubmitted={status.submitted}
            />
          </form>

          {/* Status Messages */}
          {status.submitted && (
            <div className="mt-6 p-4 bg-emerald-900/30 border border-emerald-500/30 rounded-lg flex items-center space-x-3 animate-in slide-in-from-bottom-4 duration-500">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <p className="text-emerald-300 text-sm">{status.message}</p>
            </div>
          )}

          {status.error && (
            <div className="mt-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center space-x-3 animate-in slide-in-from-bottom-4 duration-500">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-sm">{status.message}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
