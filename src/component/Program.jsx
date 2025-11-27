import React from "react";
import { BookOpen, GraduationCap, Layers, Sparkles } from "lucide-react";

export default function Programs() {
  const list = [
    {
      title: "Full Tuition + Mentoring",
      desc: "Grades 1–12 support across Malayalam, English, Maths, Science, Hindi & Arabic with daily check-ins.",
      icon: <GraduationCap size={38} className="text-white" />,
      bg: "bg-[#008080]",
    },
    {
      title: "Mentorship-Only Program",
      desc: "A structured guidance-only program designed for discipline, accountability and academic planning.",
      icon: <BookOpen size={38} className="text-white" />,
      bg: "bg-[#006d6d]",
    },
    {
      title: "Crash Courses / Micro-Batches",
      desc: "Short-term boosters like ‘Final Touch’ exam prep to quickly strengthen weaker areas.",
      icon: <Layers size={38} className="text-white" />,
      bg: "bg-[#00a1a1]",
    },
    {
      title: "Coming Soon: Online Abacus",
      desc: "Improve speed, accuracy & brain development with our upcoming digital Abacus learning system.",
      icon: <Sparkles size={38} className="text-white" />,
      bg: "bg-[#00c2c2]",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#008080]">
            Programs & Courses Snapshot
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A wide spectrum of learning and guidance programs designed to support every student's unique journey.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {list.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
            >
              {/* Icon Circle */}
              <div
                className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#008080] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
