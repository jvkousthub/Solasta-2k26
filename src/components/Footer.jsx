import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Section - College Logo and Name */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <Icon 
                icon="mdi:school" 
                className="text-[#FF6B35] text-6xl sm:text-7xl"
              />
              <div>
                <h3 
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF6B35] via-[#FFB347] to-[#FF6B35] bg-clip-text text-transparent"
                  style={{ fontFamily: '"Oxanium", sans-serif' }}
                >
                  SOLASTA'26
                </h3>
                <p 
                  className="text-white/70 text-sm mt-1"
                  style={{ fontFamily: '"Oxanium", sans-serif' }}
                >
                  IIITDM Kurnool
                </p>
              </div>
            </div>
            <p 
              className="text-white/60 text-sm text-center md:text-left max-w-md"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Indian Institute of Information Technology Design and Manufacturing, Kurnool, Andhra Pradesh (518008), INDIA
            </p>
          </div>

          {/* Right Section - Connect With Us */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="text-center md:text-right">
              <h3 
                className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#FF6B35] via-[#FFB347] to-[#FF6B35] bg-clip-text text-transparent"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                Connect With Us
              </h3>
              <a
                href="mailto:solasta@iiitk.ac.in"
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#FF8C5A] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                <Icon icon="mdi:email" className="text-xl" />
                Contact Us
              </a>
            </div>

            {/* Social Media Handles */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <p 
                className="text-white/70 text-sm font-semibold"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/iiitk.solasta?igsh=MWExODFwMXhucGxreA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF6B35] p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Icon icon="mdi:instagram" className="text-2xl" />
                </a>
                <a
                  href="https://youtube.com/@iiitksolasta?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF6B35] p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Icon icon="mdi:youtube" className="text-2xl" />
                </a>
                <a
                  href="https://wa.me/7999548368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF6B35] p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Icon icon="mdi:whatsapp" className="text-2xl" />
                </a>
                <a
                  href="tel:7999548368"
                  className="bg-white/10 hover:bg-[#FF6B35] p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Icon icon="mdi:phone" className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Made with love */}
      <div className="border-t border-white/10 py-6">
        <p 
          className="text-center text-white/60 text-sm"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Made with{" "}
          <Icon icon="mdi:heart" className="inline text-red-500 mx-1" />
          {" "}by{" "}
          <a
            href="https://kousthub.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:text-[#FFB347] font-semibold transition-colors duration-300"
          >
            JVK
          </a>
        </p>
      </div>
    </footer>
  );
}
