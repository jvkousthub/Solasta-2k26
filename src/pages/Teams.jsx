import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import Lanyard from '../components/Lanyard';

// Import all GLB card models
import card from '../assets/card.glb';
import card1 from '../assets/card1.glb';
import card2 from '../assets/card2.glb';
import card3 from '../assets/card3.glb';
import card4 from '../assets/card4.glb';
import card5 from '../assets/card5.glb';
import card6 from '../assets/card6.glb';
import card7 from '../assets/card7.glb';
import card8 from '../assets/card8.glb';
import card9 from '../assets/card9.glb';
import card10 from '../assets/card10.glb';

// Team members data with their corresponding card models
const teamMembers = [
  { id: 1, cardModel: card1, name: "Sandeep", role: "Event Lead", instagram: "@sandeep_likhithapudi" },
  { id: 2, cardModel: card, name: "Sujith", role: "Event Lead", instagram: "" },
  { id: 3, cardModel: card2, name: "Murari", role: "Finance Lead", instagram: "@_.koushik07._" },
  { id: 4, cardModel: card3, name: "Motheendra ", role: "Finance Lead", instagram: "" },
  { id: 5, cardModel: card5, name: "Praveen ", role: "Event Management Lead", instagram: "@pravxxnbalaji" },
  { id: 6, cardModel: card4, name: "Giridhar ", role: "Logistics Lead", instagram: "@_giri_2_8_5_" },
  { id: 7, cardModel: card6, name: "Charan", role: "Sponsorship Lead", instagram: "@charan.mulugula" },
  { id: 8, cardModel: card7, name: "Kousthub", role: "Web Developer", instagram: "@kousthubjv" },
  { id: 9, cardModel: card8, name: "Ashish", role: "Sponsorship", instagram: "@_ashish.130" },
  { id: 10, cardModel: card9, name: "Sundeep", role: "PR Lead", instagram: "@sundeeptejjj" },
  { id: 11, cardModel: card10, name: "Harsha", role: "PR Lead", instagram: "@lazzy_winner__" },
];

// Preload all card models
teamMembers.forEach(member => {
  useGLTF.preload(member.cardModel);
});

export default function Teams() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header Section */}
      <div className="pt-20 pb-8 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-[#FF6B35] via-[#FFB347] to-[#FF6B35] bg-clip-text text-transparent animate-gradient"
            style={{ fontFamily: '"Oxanium", sans-serif' }}
          >
            Our Team
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            style={{ fontFamily: '"Oxanium", sans-serif' }}
          >
            Meet the amazing people behind SOLASTA 2026
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs md:max-w-none mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]"
            >
              {/* Lanyard Container - Interactive Area */}
              <div style={{ minHeight: '500px', height: '500px' }} className="touch-pan-y sm:min-h-[500px] sm:h-[500px]">
                <Lanyard 
                  cardModel={member.cardModel}
                  position={[0, 0, 25]}
                  fov={20}
                  gravity={[0, -40, 0]}
                />
              </div>
              
              {/* Member Info - Below Interactive Area */}
              <div className="px-4 py-2 sm:px-4 sm:py-3 bg-black/40 backdrop-blur-sm pointer-events-none select-none">
                <h3 
                  className="text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-1"
                  style={{ fontFamily: '"Oxanium", sans-serif' }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-xs sm:text-base text-[#FFB347] mb-1 sm:mb-2"
                  style={{ fontFamily: '"Oxanium", sans-serif' }}
                >
                  {member.role}
                </p>
                <a
                  href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-sm text-white/70 hover:text-[#FF6B35] transition-colors pointer-events-auto"
                  style={{ fontFamily: '"Oxanium", sans-serif' }}
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {member.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional styling for gradient animation */}
      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
