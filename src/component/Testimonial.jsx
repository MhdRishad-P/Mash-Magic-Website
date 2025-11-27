import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amina N (Parent)",
      text:
        "Mash Magic transformed my daughter’s consistency and confidence. She used to procrastinate everything, but the mentor’s daily check-ins made her disciplined and more responsible. We could clearly see her growth every week.",
    },
    {
      name: "Rahul Kumar (Parent)",
      text:
        "The mentor feels like a second parent — always guiding, correcting, motivating and making sure our son stays on track. His academics improved, but more importantly his mindset and focus changed.",
    },
    {
      name: "Sana & Her Mom",
      text:
        "We joined mainly for tuition, but the mentorship support was the real magic. The reports helped us understand her strengths and weak areas so clearly. Her marks jumped by 20% in two months.",
    },
  ];

  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  // Auto change testimonial every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // GSAP animation on change
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [index]);

  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#008080] mb-10">
          What Parents & Students Say
        </h2>

        {/* Testimonial Card */}
        <div
          ref={cardRef}
          className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 mx-auto max-w-3xl"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            “{testimonials[index].text}”
          </p>

          <h4 className="text-[#008080] font-semibold text-xl">
            — {testimonials[index].name}
          </h4>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-[#008080]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
