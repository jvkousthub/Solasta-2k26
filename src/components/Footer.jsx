import React from "react";
import { Icon } from "@iconify/react";

// External image hosted on ImgBB to reduce Netlify bandwidth
const clgLogo = "https://i.ibb.co/n8bDSB2j/clg-logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Section - College Logo and Name */}
          <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 pt-8 md:pt-12">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <img src={clgLogo} alt="IIITK" className="h-40 sm:h-60 md:h-55"/>
            <p 
              className="text-white/80 text-sm sm:text-base md:text-lg text-center max-w-md px-4 md:px-0"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
              Indian Institute of Information Technology Design and Manufacturing, Kurnool, Andhra Pradesh (518008), INDIA
            </p>
              </div>
          </div>

          {/* Right Section - Connect With Us */}
          <div className="flex flex-col py-12 sm:py-16 md:py-20 justify-center items-center gap-4 sm:gap-6">
            <div className="text-center">
              <h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#FF6B35] via-[#FFB347] to-[#FF6B35] bg-clip-text text-transparent px-4"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                Connect With Us
              </h3>
              <a
                href="mailto:solasta@iiitk.ac.in"
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#FF8C5A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base min-h-[44px]"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                <Icon icon="mdi:email" className="text-lg sm:text-xl" />
                Contact Us
              </a>
            </div>

            {/* Social Media Handles */}
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <p 
                className="text-white/70 text-base sm:text-lg md:text-xl font-semibold"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                Follow Us
              </p>
              <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
                <a
                  href="https://www.instagram.com/iiitk.solasta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF6B35] p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center"
                >
                  <Icon icon="mdi:instagram" className="text-3xl sm:text-4xl md:text-5xl" />
                </a>
                <a
                  href="https://youtube.com/@iiitksolasta?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF6B35] p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center"
                >
                  <Icon icon="mdi:youtube" className="text-3xl sm:text-4xl md:text-5xl" />
                </a>
                <a
                  href="https://wa.me/+917207055910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF6B35] p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center"
                >
                  <Icon icon="mdi:whatsapp" className="text-3xl sm:text-4xl md:text-5xl" />
                </a>
                <a
                  href="tel:7207055910"
                  className="bg-white/10 hover:bg-[#FF6B35] p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center"
                >
                  <Icon icon="mdi:phone" className="text-3xl sm:text-4xl md:text-5xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Made with love */}
      <div className="border-t border-white/14 py-4 sm:py-5 md:py-6 pb-6 sm:pb-6 relative z-10">
        <p 
          className="text-center text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl px-4"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Crafted with{" "}
          <Icon icon="mdi:heart" className="inline text-red-500 mx-1" />
          {" "}by<a
            href="https://kousthub.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:text-[#FFB347] font-semibold transition-colors duration-300 inline-flex items-center justify-center py-2 px-2 min-h-[44px] relative z-20 touch-manipulation"
            style={{ pointerEvents: 'auto' }}
          >
          JVK
          </a>
        </p>
      </div>
    </footer>
  );
}
