import React, { Suspense } from 'react';
import Lanyard from '../components/Lanyard';
import { useGLTF } from '@react-three/drei';
import cardModel from '../assets/card.glb';
import cardModel1 from '../assets/card1.glb';
import cardModel2 from '../assets/card2.glb';
import cardModel3 from '../assets/card3.glb';
import cardModel4 from '../assets/card4.glb';
import cardModel5 from '../assets/card5.glb';
import cardModel6 from '../assets/card6.glb';
import cardModel7 from '../assets/card7.glb';
import cardModel8 from '../assets/card8.glb';
import cardModel9 from '../assets/card9.glb';
import cardModel10 from '../assets/card10.glb';

// Preload all card models
useGLTF.preload(cardModel);
useGLTF.preload(cardModel1);
useGLTF.preload(cardModel2);
useGLTF.preload(cardModel3);
useGLTF.preload(cardModel4);
useGLTF.preload(cardModel5);
useGLTF.preload(cardModel6);
useGLTF.preload(cardModel7);
useGLTF.preload(cardModel8);
useGLTF.preload(cardModel9);
useGLTF.preload(cardModel10);

const Teams = () => {
  const teamMembers = [
    { id: 2, name: 'Sandeep', role: 'Event Lead', image: 'https://via.placeholder.com/300', cardModel: cardModel1 },
    { id: 1, name: 'Sujith', role: 'Event Lead', image: 'https://via.placeholder.com/300', cardModel: cardModel },
    { id: 3, name: 'Murari', role: 'Finance', image: 'https://via.placeholder.com/300', cardModel: cardModel2 },
    { id: 4, name: 'Motheendra', role: 'Finance', image: 'https://via.placeholder.com/300', cardModel: cardModel3 },
    { id: 6, name: 'Praveen', role: 'Organising team', image: 'https://via.placeholder.com/300', cardModel: cardModel5 },
    { id: 5, name: 'Giridhar', role: 'Logistics', image: 'https://via.placeholder.com/300', cardModel: cardModel4 },
    { id: 7, name: 'Charan', role: 'Sponsorship', image: 'https://via.placeholder.com/300', cardModel: cardModel6 },
    { id: 8, name: 'Kousthub', role: 'Web Developer', image: 'https://via.placeholder.com/300', cardModel: cardModel7 },
    { id: 9, name: 'Ashish', role: 'Sponsorship', image: 'https://via.placeholder.com/300', cardModel: cardModel8 },
    { id: 10, name: 'Sundeep', role: 'PR', image: 'https://via.placeholder.com/300', cardModel: cardModel9 },
    { id: 11, name: 'Harsha', role: 'PR', image: 'https://via.placeholder.com/300', cardModel: cardModel10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative w-full pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        {/* Background gradient circles similar to AboutUs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFA07A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FFD4A3]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-[#FFA07A] px-4"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Meet Our Team
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            The people behind Solasta 2026
          </p>
          {/* Helper Text */}
          <p className='text-white/70 text-xs sm:text-sm text-center mt-2 px-4 font-medium' style={{ fontFamily: '"Montserrat", sans-serif' }}>
            Tap and drag to rotate the cards!
          </p>
        </div>
      </div>

      {/* Team Members Grid - 3D Lanyard Cards */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[650px] mx-auto max-w-sm md:max-w-none"
            >
              {/* Container for 3D Lanyard with controlled touch area */}
              <div className="absolute inset-0 rounded-lg overflow-visible">
                <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} fov={25} cardModel={member.cardModel} />
              </div>
              
              {/* Member Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-black via-black/95 to-transparent text-center z-10 pointer-events-none rounded-b-lg">
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2 text-[#FFA07A]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-white/80 text-sm sm:text-base md:text-lg"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {member.role}
                </p>
                <div 
                  className="mt-1 md:mt-2 text-xs md:text-sm text-white/50"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  ID: {String(member.id).padStart(4, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center relative">
        {/* Background gradient circle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#FF6B35] px-4"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Want to Join Us?
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            We&apos;re always looking for passionate individuals to join our team and make Solasta even better!
          </p>
          <button 
            className="bg-white text-[#FFA07A] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out border-2 border-[#FFA07A] hover:bg-[#FFA07A] hover:text-white active:scale-95 min-h-[44px]"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
