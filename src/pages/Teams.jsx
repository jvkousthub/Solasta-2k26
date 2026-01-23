import React from 'react';
import Lanyard from '../components/Lanyard';

const Teams = () => {
  const teamMembers = [
    { id: 1, name: 'Team Member 1', role: 'Role 1', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Team Member 2', role: 'Role 2', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Team Member 3', role: 'Role 3', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Team Member 4', role: 'Role 4', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Team Member 5', role: 'Role 5', image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Team Member 6', role: 'Role 6', image: 'https://via.placeholder.com/300' },
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
          <p className='text-white/60 text-[10px] text-center mt-2 px-4' style={{ fontFamily: '"Montserrat", sans-serif' }}>
            Tap and drag to rotate the cards!
          </p>
        </div>
      </div>

      {/* Team Members Grid - 3D Lanyard Cards */}
      <div className="container mx-auto px-2 sm:px-6 md:px-8 py-8 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] mx-auto max-w-sm md:max-w-none"
            >
              {/* Container for 3D Lanyard with controlled touch area */}
              <div className="absolute inset-0 rounded-lg overflow-visible">
                <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} fov={25} />
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
