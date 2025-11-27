import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KidImage from "../assets/kid.png";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection6() {
  const heroRef = useRef(null);

  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef([]);

  const imageWrapperRef = useRef(null); // image animation

  useEffect(() => {
    // LEFT CONTENT
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }
    );

    gsap.fromTo(
      subRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.25, ease: "power3.out" }
    );

    gsap.fromTo(
      btnRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      }
    );

    // RIGHT IMAGE (Slide from right)
    gsap.fromTo(
      imageWrapperRef.current,
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full bg-gradient-to-br from-[#008080] to-[#005f5f] text-white"
    >
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT CONTENT  */}
        <div className="flex-1 space-y-7">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
          >
            Empower Your Child With  
            <br />
            <span className="text-[#f8ba2b]">Smart Mentorship</span>
          </h1>

          <p
            ref={subRef}
            className="text-lg max-w-lg opacity-90"
          >
            Guidance that builds confidence, creativity, emotional strength,
            academics, and discipline—crafted for today’s generation.
          </p>

          <div className="flex gap-4 pt-4">
            <button
              ref={(el) => (btnRef.current[0] = el)}
              className="bg-[#f8ba2b] text-black px-7 py-3 font-semibold rounded-xl shadow-md hover:scale-105 transition"
            >
              Enroll Now
            </button>

            <button
              ref={(el) => (btnRef.current[1] = el)}
              className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#008080] transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (Animate from right) */}
        <div className="flex-1 flex justify-center">
          <div
            ref={imageWrapperRef}
            className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] overflow-hidden"
          >
            <img
              src={KidImage}
              alt="Child Learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>
    </div>
  );
}
