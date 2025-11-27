// src/pages/ContactPage.jsx
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl grid gap-10 lg:grid-cols-[1.1fr,1fr]">
        {/* Left: Form */}
        <div className="bg-slate-950/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-teal-900/40">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Book a 1:1 Demo for Your Child
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
            Contact Us & Book a Demo
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mb-6">
            Tell us a few details about your child and we’ll reach out with a{" "}
            <span className="text-teal-300 font-medium">personalized demo session</span>.
          </p>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              // handle submit here (API, email, etc.)
              alert("Demo request submitted!");
            }}
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-200">
                  Parent / Guardian Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Eg. Muhammed Rishad"
                  className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/40 transition"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/40 transition"
                />
              </div>
            </div>

            {/* Phone + Grade */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-200">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 234 567 890"
                  className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/40 transition"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-200">
                  Grade of Child
                </label>
                <select
                  required
                  className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/40 transition"
                >
                  <option value="">Select grade</option>
                  <option>Grade 1–3</option>
                  <option>Grade 4–6</option>
                  <option>Grade 7–9</option>
                  <option>Grade 10–12</option>
                  <option>Other / Competitive Exams</option>
                </select>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-200">
                Child&apos;s Interests / Subjects
              </label>
              <textarea
                rows={4}
                placeholder="Eg. Math, Coding, English communication, Olympiad prep..."
                className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/40 transition resize-none"
              />
            </div>

            {/* Preferred Time */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-200">
                  Preferred Day
                </label>
                <select className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/40 transition">
                  <option value="">Any day</option>
                  <option>Monday–Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-200">
                  Preferred Time
                </label>
                <select className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/40 transition">
                  <option value="">Any time</option>
                  <option>10:00 AM – 1:00 PM</option>
                  <option>2:00 PM – 5:00 PM</option>
                  <option>6:00 PM – 9:00 PM</option>
                </select>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-teal-500 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-400 active:scale-[0.98] transition"
              >
                Book Demo
              </button>
              <p className="text-xs sm:text-sm text-slate-400">
                We’ll contact you within{" "}
                <span className="text-teal-300 font-medium">24 hours</span> to
                confirm your demo slot.
              </p>
            </div>
          </form>
        </div>

        {/* Right: Contact info / highlight */}
        <div className="space-y-6 lg:space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-teal-500/40 bg-gradient-to-br from-teal-500/15 via-slate-900 to-slate-950 p-6 sm:p-7 shadow-2xl">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-teal-500/20 blur-3xl" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              One-Child, One-Mentor Learning
            </h2>
            <p className="text-sm sm:text-base text-slate-200 mb-4">
              Every child gets a dedicated mentor for{" "}
              <span className="text-teal-300 font-medium">
                academic & non-academic growth
              </span>
              . Book a free demo to see how we work with your child.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Personalized 1:1 sessions</li>
              <li>• Progress tracking for parents</li>
              <li>• Flexible slots, online or hybrid</li>
            </ul>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5">
            <h3 className="text-lg font-semibold">Contact Details</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">
                  Phone
                </p>
                <p className="font-medium">+1 (234) 567-8901</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">
                  Email
                </p>
                <p className="font-medium">hello@youracademy.com</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">
                  Address
                </p>
                <p className="font-medium">
                  123 Learning Street,
                  <br />
                  EduCity, NY 10001, USA
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 mt-3 text-xs text-slate-400">
              Available: Mon – Sat, 10:00 AM – 7:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
