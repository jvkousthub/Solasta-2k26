import React, { Suspense, useEffect } from 'react';
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
              className="group relative w-full h-[500px] sm:h-[550px] md:h-[600px] mx-auto max-w-sm md:max-w-none touch-none"
            >
              {/* Lanyard Container - Interactive Area */}
              <div className="absolute inset-0 rounded-lg overflow-visible">
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white/50 text-xs sm:text-sm animate-pulse">Loading...</div>
                  </div>
                }>
                  <Lanyard 
                    id={member.id}
                    cardModel={member.cardModel}
                    position={[0, 0, 25]}
                    fov={25}
                    gravity={[0, -40, 0]}
                  />
                </Suspense>
              </div>
              
              {/* Member Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-black via-black/95 to-transparent text-center z-10 pointer-events-none rounded-b-lg">
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2 text-[#FF6B35]"
                  style={{ fontFamily: '"Oxanium", sans-serif' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-white/80 text-sm sm:text-base md:text-lg"
                  style={{ fontFamily: '"Oxanium", sans-serif' }}
                >
                  {member.role}
                </p>
                {member.instagram && (
                  <p
                    className="mt-1 md:mt-2 text-xs md:text-sm text-white/50"
                    style={{ fontFamily: '"Oxanium", sans-serif' }}
                  >
                    {member.instagram}
                  </p>
                )}
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
