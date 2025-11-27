import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UserCheck,
  HeartHandshake,
  BarChart,
  ClipboardList,
  Clock,
  Users,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };



  const benefits = [
    {
      title: "One-Child, One Mentor",
      desc: "Every child receives a dedicated mentor who acts as a personal guide, motivator, and friend-like support system.",
      icon: <UserCheck size={38} className="text-white" />,
      bg: "bg-[#008080]",
    },
    {
      title: "Holistic Tracking",
      desc: "We track academics, habits, mindset, personal well-being and overall growth — not just marks.",
      icon: <HeartHandshake size={38} className="text-white" />,
      bg: "bg-[#007373]",
    },
    {
      title: "Parent-Friendly Reports",
      desc: "Crystal clear reports covering strengths, weaknesses, habits, mistakes, and actionable insights for parents.",
      icon: <ClipboardList size={38} className="text-white" />,
      bg: "bg-[#009a9a]",
    },
    {
      title: "Flexible & Responsive Support",
      desc: "Sessions conducted after school hours, hybrid/remote guidance available for busy families and working parents.",
      icon: <Clock size={38} className="text-white" />,
      bg: "bg-[#00b5b5]",
    },
    {
      title: "Expert Support Team",
      desc: "Mentor Head supervises all student cases, ensuring high quality guidance with a trained support staff.",
      icon: <Users size={38} className="text-white" />,
      bg: "bg-[#00cccc]",
    },
    {
      title: "Proven Growth Systems",
      desc: "Daily reminders, monthly summaries, structured plans and professional monitoring to ensure consistency.",
      icon: <BarChart size={38} className="text-white" />,
      bg: "bg-[#00e4e4]",
    },
    {
      title: "Support for Migrant Families",
      desc: "Special focus for Kerala & GCC Malayali migrants, and families moving between states like North India.",
      icon: <ShieldCheck size={38} className="text-white" />,
      bg: "bg-[#00f0f0]",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-black">

      {/* HEADER */}
      <section
        ref={addToRefs}
        className="w-full bg-[#008080] text-white py-24 px-6 text-center"
      >
        <h1 className="text-5xl font-bold">Why Choose Mash Magic?</h1>
        <p className="text-white/90 mt-4 text-lg max-w-2xl mx-auto">
          We offer a premium, professionally-managed mentoring experience designed to transform confidence, discipline and academics.
        </p>
      </section>

      {/* BENEFITS GRID */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {benefits.map((item, i) => (
          <div
            ref={addToRefs}
            key={i}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6`}>
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-[#008080] mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
