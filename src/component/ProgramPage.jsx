import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  GraduationCap,
  Layers,
  Sparkles,
  ArrowRightCircle,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramsPage() {
  const sectionRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    sectionRefs.current.forEach((ref) => {
      gsap.fromTo(
        ref,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full bg-gray-50 text-black">

      {/* HEADER */}
      <section
        ref={addToRefs}
        className="w-full bg-[#008080] text-white py-24 px-6 text-center"
      >
        <h1 className="text-5xl font-bold">Our Programs & Services</h1>
        <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
          Tailored learning paths designed to shape discipline, confidence,
          academics, emotional strength and long-term personal development.
        </p>
      </section>


      {/* 3.1 MENTORSHIP ONLY */}
      <section ref={addToRefs} className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#008080] mb-8">
          3.1 Mentorship-Only Course
        </h2>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <p className="text-gray-700 text-lg leading-relaxed">
            Designed for families who want **complete mentor guidance** without academic tuition.
            Includes emotional & academic check-ins, homework support, confidence building,
            personal growth plans and structured parent reports every week.
          </p>
        </div>
      </section>


      {/* 3.2 FULL MENTORSHIP + TUITION */}
      <section ref={addToRefs} className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#008080] mb-8">
          3.2 Full Mentoring + Tuition Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Mentor Lite",
              desc: "Basic academic check-ins, school reminders, homework alerts & weekly updates.",
            },
            {
              title: "Mentor Pro",
              desc: "Pre–post class check-ins, study planning, homework support, reading support.",
            },
            {
              title: "Premium Mentorship",
              desc: "Multiple daily check-ins, personal development support, full academic monitoring.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-[#008080] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed text-lg mt-8">
          Offered for Grades 1–12 across Malayalam, English, Maths, Science, Hindi & Arabic.
          Supports Kerala State Board, CBSE & ICSE.
        </p>
      </section>


      {/* 3.3 CRASH COURSES */}
      <section ref={addToRefs} className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#008080] mb-8">
          3.3 Micro-Batch Crash Courses
        </h2>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-[#008080]">“Final Touch” Program (Aug 18–29)</h3>
          <p className="text-gray-700 text-lg leading-relaxed mt-3">
            A fast, high-impact revision program focusing on problem-solving, concept clarity and exam strategy.
            Offered subject-wise (Maths, Science, English, Malayalam, Hindi) with combo offers for Kerala families.
          </p>
        </div>
      </section>


      {/* 3.4 ABACUS */}
      <section ref={addToRefs} className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#008080] mb-8">
          3.4 Online Abacus Learning Course (Upcoming)
        </h2>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <p className="text-gray-700 text-lg leading-relaxed">
            A digital Abacus program designed to build speed, accuracy, mental math ability and brain development.
            Includes live classes, weekly challenges & level-based achievements.
          </p>
        </div>
      </section>


      {/* PRICING MATRIX */}
      <section ref={addToRefs} className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#008080] mb-10">Pricing / Plans</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Mentor Lite",
              includes: [
                "Daily basic check-ins",
                "Homework reminders",
                "Weekly parent report",
              ],
            },
            {
              title: "Mentor Pro",
              includes: [
                "All Lite features",
                "Pre- & post-class check-ins",
                "Reading & homework support",
                "Study plan creation",
              ],
            },
            {
              title: "Premium Mentorship",
              includes: [
                "All Pro features",
                "Multiple daily mentor calls",
                "Personal growth plan",
                "Advanced emotional support",
                "Full academic monitoring",
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold text-[#008080] mb-4 text-center">
                {plan.title}
              </h3>

              <ul className="space-y-3">
                {plan.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-[#008080]" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-gray-700 mt-8 text-lg">
          Our pricing reflects our **premium mentor support**, structured processes and professionalism — not low-cost tuition.
        </p>
      </section>


      {/* PROCESS OVERVIEW */}
      <section ref={addToRefs} className="max-w-7xl mx-auto py-20 px-6 pb-32">
        <h2 className="text-3xl font-bold text-[#008080] mb-10">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Consultation & demo class",
            "Skill / needs assessment",
            "Personalized growth plan",
            "Live mentoring sessions + tuition",
            "Regular parent reports",
            "Review & adjust plan",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition flex items-start gap-4"
            >
              <ArrowRightCircle className="text-[#008080]" size={40} />
              <p className="text-gray-700 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
