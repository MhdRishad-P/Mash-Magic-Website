import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Differentiators() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const list = [
    {
      title: "Personalized Growth Plans",
      desc: "Mentors create academic + personal development plans, including sleep, habits & meal-plan suggestions.",
    },
    {
      title: "Parent-Friendly Reports",
      desc: "Easy-to-understand reports covering strengths, weaknesses, performance trends & recommended improvements.",
    },
    {
      title: "Parent-Like Mentor Support",
      desc: "More than academics — mentors act as a guide, motivator, friend and emotional support system.",
    },
    {
      title: "Systematic Progress Tracking",
      desc: "Our custom Google Apps Script system tracks daily progress, learning gaps & consistency in real-time.",
    },
    {
      title: "Premium High-Value Service",
      desc: "A high-ticket pricing model designed for families seeking real, measurable, long-term transformation.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gray-50 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#008080]">
          Why Parents Choose Mash Magic
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our mentoring model stands out because we focus on long-term mindset,
          discipline, and personal growth — not just academics.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {list.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl 
                       hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[#008080] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
