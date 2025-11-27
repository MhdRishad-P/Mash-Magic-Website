import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KidImage from "../assets/kid.png"; // Assuming this is a high-quality image

gsap.registerPlugin(ScrollTrigger);

// Define your color constants for better readability
const COLOR_TEAL = "#008080";
const COLOR_YELLOW = "#f8ba2b";

export default function HeroSection6() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef([]);
  const highlightRefs = useRef([]);
  const imageWrapperRef = useRef(null);
  const glowRef = useRef(null); // Used for the background soft glow

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main entrance timeline - Gentle, classic stagger
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.from(heroRef.current, { opacity: 0, y: 40, duration: 1.0 })
        .from(
          badgeRef.current,
          { y: 20, opacity: 0 },
          "<0.3" // overlap
        )
        .from(
          titleRef.current,
          { y: 40, opacity: 0, duration: 1.1 },
          "-=0.5"
        )
        .from(
          subRef.current,
          { y: 30, opacity: 0 },
          "-=0.6"
        )
        .from(
          btnRef.current,
          { y: 20, opacity: 0, stagger: 0.15 },
          "-=0.4"
        )
        .from(
          highlightRefs.current,
          { y: 20, opacity: 0, stagger: 0.12 },
          "-=0.4"
        )
        .from(
          imageWrapperRef.current,
          { x: 100, opacity: 0, rotate: 5, scale: 0.9, ease: "back.out(1.1)" },
          "-=0.6"
        );

      // Floating image animation (loop)
      gsap.to(imageWrapperRef.current, {
        y: -15, // Gentle float
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Soft pulsing glow behind image
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle parallax on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Slight vertical and horizontal offset on scroll
          gsap.to(imageWrapperRef.current, {
            x: progress * 30,
            y: -15 - progress * 25,
            ease: "power1.out",
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="
        w-full 
        min-h-[85vh]
        bg-white // Pure white background for high contrast
        flex items-center
        relative
      "
    >
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div
        ref={glowRef}
        // Soft yellow glow for warmth and atmosphere
        style={{ backgroundColor: COLOR_YELLOW + "33" }} 
        className="
          hidden md:block
          absolute -left-20 top-1/4
          w-80 h-80
          rounded-full
          blur-3xl
          pointer-events-none
          opacity-50
        "
      />
      
      {/* A contrasting teal diagonal section for visual interest */}
      <div
        style={{ backgroundColor: COLOR_TEAL + "05" }} 
        className="
          absolute bottom-0 right-0 
          w-full md:w-3/5 h-1/2 
          transform skew-y-[-3deg] 
          md:skew-y-[-2deg] origin-bottom-right
          z-0
        "
      />

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row items-center gap-16 z-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8 relative">

          {/* Badge - High contrast, Yellow focus */}
          <div
            ref={badgeRef}
            style={{ 
                borderColor: COLOR_TEAL + "40", 
                backgroundColor: "white", 
                color: COLOR_TEAL
            }}
            className="
              inline-flex items-center gap-2 px-4 py-2
              rounded-full border shadow-sm
              backdrop-blur-sm text-xs md:text-sm font-semibold
              uppercase tracking-[0.2em]
            "
          >
            <span 
                style={{ backgroundColor: "black"}} 
                className="w-2 h-2 rounded-full border-red-500 animate-pulse" 
            />
            <span>One Mentor • One Magic Journey</span>
          </div>

          {/* Title - Bold text, using Teal and Yellow for emphasis */}
          <h1
            ref={titleRef}
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-extrabold leading-tight text-gray-900
            "
          >
            <span style={{ color: COLOR_TEAL }}>Transform</span>{" "}
            <span style={{ color: COLOR_YELLOW }}>Every Student</span>
            <br />
            Into a <span className="underline decoration-wavy decoration-4 underline-offset-8" style={{ textDecorationColor: COLOR_YELLOW }}>
                Confident Achiever
            </span>
          </h1>

          {/* Subtext - Clear and highly readable */}
          <p
            ref={subRef}
            className="
              text-base md:text-lg max-w-xl 
              text-gray-600
            "
          >
            At Mash Magic, we don’t just teach — we guide, mentor, and elevate
            your child’s entire learning journey with structured support,
            mindset coaching, and real-world skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              ref={(el) => (btnRef.current[0] = el)}
              // Primary Button: Solid Teal background, high energy
              style={{ backgroundColor: COLOR_TEAL }}
              className="
                text-white
                px-9 py-3.5 
                font-bold text-sm md:text-base
                rounded-full
                shadow-xl shadow-teal-700/30
                transition-transform duration-300 ease-out
                hover:scale-[1.05]
              "
            >
              Book a Free Demo ✨
            </button>

            <button
              ref={(el) => (btnRef.current[1] = el)}
              // Secondary Button: Yellow outline/text for accent
              style={{ borderColor: COLOR_YELLOW, color: COLOR_TEAL }}
              className="
                border-2 bg-white
                px-7 py-3 rounded-full font-semibold text-sm md:text-base
                hover:bg-gray-100
                shadow-md shadow-gray-200
                transition-all duration-300
              "
            >
              Learn More
            </button>
          </div>

          {/* Highlights Row - White/clean cards with Teal and Yellow accents */}
          <div className="grid grid-cols-3 gap-4 pt-8 text-xs md:text-sm">
            {[
              { label: "Personal Mentor", value: "1:1" },
              { label: "Weekly Check-ins", value: "Live" },
              { label: "Growth Tracking", value: "360°" },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={(el) => (highlightRefs.current[idx] = el)}
                className="
                  rounded-2xl px-4 py-3 
                  bg-white border border-gray-200
                  shadow-lg shadow-gray-100
                  flex flex-col gap-1
                "
              >
                <span style={{ color: COLOR_TEAL }} className="text-[10px] uppercase tracking-[0.2em]">
                  {item.label}
                </span>
                <span 
                    style={{ color: (idx === 1 ? COLOR_YELLOW : COLOR_TEAL) }} // Use Yellow for a specific accent (Live)
                    className="text-lg md:text-xl font-extrabold"
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center relative md:pt-10">
          
          <div
            ref={imageWrapperRef}
            className="
              relative z-10
              w-[280px] h-[280px]
              sm:w-[360px] sm:h-[360px]
              md:w-[420px] md:h-[420px]
              rounded-[3.5rem] // Unique, softer radius
              overflow-hidden
              border-8 border-white // Thick white border
              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              
              // New: Yellow glow inset effect for the image frame
              outline outline-4 outline-offset-[-4px]
            "
            style={{ outlineColor: COLOR_YELLOW }}
          >
            <img
              src={KidImage}
              alt="Child Learning"
              className="w-full h-full object-cover"
            />

            {/* small tech accent at bottom - Yellow/Teal contrast */}
            <div
              className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                px-4 py-2 rounded-full
                text-white text-[11px] md:text-xs
                flex items-center gap-2 font-medium
                shadow-lg
              "
              style={{ backgroundColor: COLOR_TEAL }}
            >
              <span 
                style={{ backgroundColor: COLOR_YELLOW }} 
                className="w-2 h-2 rounded-full animate-pulse" 
              />
              <span>Real Mentors • Real Progress</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}