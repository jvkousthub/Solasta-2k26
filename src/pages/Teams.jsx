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
      <div className="relative w-full pt-32 pb-20 overflow-hidden">
        {/* Background gradient circles similar to AboutUs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFA07A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FFD4A3]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#FFA07A]"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Meet Our Team
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            The brilliant minds behind Solasta 2026
          </p>
        </div>
      </div>

      {/* Team Members Grid - 3D Lanyard Cards */}
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative w-full h-[70vh] md:h-screen min-h-[500px]"
            >
              {/* 3D Lanyard Card */}
              <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} fov={25} />
              
              {/* Member Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/90 to-transparent text-center z-10 pointer-events-none">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-[#FFA07A]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-white/80 text-base md:text-lg"
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
      <div className="container mx-auto px-4 py-16 sm:py-20 text-center relative">
        {/* Background gradient circle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#FF6B35]"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Want to Join Us?
          </h2>
          <p 
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            We&apos;re always looking for passionate individuals to join our team and make Solasta even better!
          </p>
          <button 
            className="bg-white text-[#FFA07A] px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out border-2 border-[#FFA07A] hover:bg-[#FFA07A] hover:text-white active:scale-95"
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
