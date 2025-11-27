import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Target, Star, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
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
        <h1 className="text-5xl font-bold drop-shadow-lg">
          About <span className="text-[#f8ba2b]">Mash Magic</span>
        </h1>
        <p className="text-white/90 mt-5 max-w-2xl mx-auto text-lg">
          A new-age mentoring system built to transform discipline, confidence,
          academics and personal growth — for every child.
        </p>
      </section>

      {/* OUR STORY */}
      <section
        ref={addToRefs}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold text-[#008080] mb-6">
          Our Story
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          Mash Magic was founded with one mission — to revolutionize the way
          students are mentored. Not through ordinary tuitions, but through a
          **corporate-style mentoring system** built with precision, discipline
          and world-class processes.  
          <br /><br />
          We realized that thousands of Malayali migrants across Kerala, GCC and
          North India struggle to find structured guidance for their children.
          Mash Magic was created to solve this — through premium, high-accountability,
          daily monitoring and mentor-driven growth systems.
        </p>
      </section>

      {/* OUR PHILOSOPHY */}
      <section
        ref={addToRefs}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold text-[#008080] mb-6">
          Our Philosophy
        </h2>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe every child’s life is **multi-dimensional** — made of
            academics, emotional strength, habits, mindset, confidence,
            communication and consistency.  
            <br /><br />
            Mentoring is NOT tutoring.  
            <br />
            It is **guiding the child as a whole person**, not as a mark-scoring
            machine.  
            <br /><br />
            Unlike ordinary tuition centres, we focus on:
          </p>

          <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
            <li>Building confidence & identity</li>
            <li>Strengthening discipline & planning</li>
            <li>Academic improvement with structured habits</li>
            <li>Daily emotional & motivational support</li>
          </ul>
        </div>
      </section>

      {/* OUR TEAM */}
      <section
        ref={addToRefs}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold text-[#008080] mb-10">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              role: "Mentor Head",
              desc: "Leads the mentor team, ensures training quality, oversees reports & student progress.",
              icon: <Users size={40} className="text-white" />,
            },
            {
              role: "Academic Coordinator",
              desc: "Coordinates subject support, schedules, syllabus planning and academic tracking.",
              icon: <BookOpen size={40} className="text-white" />,
            },
            {
              role: "Student Mentors",
              desc: "Your child’s personal guide — daily check-ins, motivation, homework help, emotional support.",
              icon: <Star size={40} className="text-white" />,
            },
          ].map((team, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="bg-[#008080] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto">
                {team.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#008080] text-center">
                {team.role}
              </h3>

              <p className="text-gray-600 text-center mt-3 leading-relaxed">
                {team.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* OUR SYSTEMS & STANDARDS */}
      <section
        ref={addToRefs}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold text-[#008080] mb-6">
          Our Systems & Standards
        </h2>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <p className="text-gray-700 text-lg leading-relaxed">
            Mash Magic operates like a **professional corporate system**, not a
            tuition centre.  
            <br /><br />
            Our internal processes include:
          </p>

          <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside text-lg">
            <li>Daily mentor–student check-ins</li>
            <li>Goal-setting and tracking dashboards</li>
            <li>Monthly attendance & consistency summary</li>
            <li>Google Apps Script automation for daily reporting</li>
            <li>Weekly mentor meetings & training calendar</li>
            <li>Parent progress reports with strengths & weaknesses</li>
          </ul>

          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            These systems ensure **quality, accountability and uniform standards**
            across all our mentors — giving families a premium and reliable experience.
          </p>
        </div>
      </section>
    </div>
  );
}
