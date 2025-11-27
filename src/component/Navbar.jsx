import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = navRef.current;

    gsap.fromTo(
      el,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    let lastScroll = 0;

    ScrollTrigger.create({
      start: 0,
      onUpdate: (self) => {
        const current = self.scroll();
        if (current > lastScroll && current > 70) {
          gsap.to(el, { y: -90, duration: 0.4, ease: "power3.out" });
        } else {
          gsap.to(el, { y: 0, duration: 0.4, ease: "power3.out" });
        }
        lastScroll = current;
      },
    });
  }, []);

  return (
    <div className="w-full flex justify-center fixed top-5 z-50">
      <nav
        ref={navRef}
        className="
          px-6 py-2 rounded-full flex items-center gap-10
          bg-white/20 backdrop-blur-xl border border-white/30
          shadow-[0_4px_20px_rgba(0,0,0,0.12)]
          transition-all duration-300
          scale-95
        "
      >
        {/* LOGO */}
        <h1 className="text-sm font-semibold tracking-wide text-black font-[Poppins]">
          MASH MAGIC
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 text-gray-800">
          <SmallMenu label={<Link to="/">HOME</Link>} />
          <SmallMenu label={<Link to="/about">ABOUT US</Link>} />
          <SmallMenu label={<Link to="/whyus">WHY US</Link>} />
          <SmallMenu label={<Link to="/programs">PROGRAMS</Link>} />
            <SmallMenu label={<Link to="/contact">CONTACT</Link>} />
        </ul>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <span className="text-2xl text-[#008081]">☰</span>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            absolute top-20 w-48 p-4 rounded-2xl
            bg-white/30 backdrop-blur-xl border border-white/40
            shadow-lg md:hidden
          "
        >
          <ul className="flex flex-col gap-3 text-gray-900 text-sm font-[Poppins]">
            <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT US</Link></li>
            <li>WHY US</li>
            <li>PROGRAMS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function SmallMenu({ label }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        y: -3,
        duration: 0.2,
        ease: "power2.out",
        color: "#008081",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        y: 0,
        duration: 0.2,
        ease: "power2.out",
        color: "#444",
      });
    });
  }, []);

  return (
    <li
      ref={ref}
      className="cursor-pointer text-sm italic text-gray-700 font-[Poppins] tracking-wide"
    >
      {label}
    </li>
  );
}
