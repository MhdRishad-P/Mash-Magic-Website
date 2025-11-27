import React from "react";
import { Facebook, Instagram, Phone, Mail, Youtube } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="w-full bg-[#008080] text-white pt-20 pb-10 px-6">
      
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold leading-tight">
          Ready to give your child the
          <br />
          <span className="text-[#f8ba2b]">Magic Mentor Experience?</span>
        </h2>

        <p className="text-white/90 mt-4 text-lg">
          Book a free demo today and see the transformation begin.
        </p>

        <button className="mt-6 bg-[#f8ba2b] text-black font-semibold px-8 py-3 rounded-xl hover:scale-105 transition shadow-lg">
          Book a Demo
        </button>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-white/20 my-10"></div>

      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Phone size={20} />
            <p className="text-white/90">+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-3 mt-3 justify-center md:justify-start">
            <Mail size={20} />
            <p className="text-white/90">support@mashmagic.com</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 justify-center md:justify-start">
            <a className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer">
              <Facebook size={22} />
            </a>
            <a className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer">
              <Instagram size={22} />
            </a>
            <a className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer">
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>

          <p className="text-white/90 leading-relaxed max-w-sm mx-auto md:mx-0">
            Mash Magic Learning Hub,  
            Kochi, Kerala — 682020  
            India
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} Mash Magic. All rights reserved.
      </div>
    </footer>
  );
}
