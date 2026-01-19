import React from 'react'
import Stack from './Stack'
import Sponsor1 from '../assets/Sponsor1.jpg'
import Sponsor2 from '../assets/Sponsor2.jpg'
import Sponsor3 from '../assets/Sponsor3.jpg'
import Sponsor4 from '../assets/Sponsor4.jpg'
import Sponsor5 from '../assets/Sponsor5.jpg'
import Sponsor6 from '../assets/Sponsor6.jpg'

const PreviousYearHighlights = () => {
  const images = [
    Sponsor1,
    Sponsor2,
    Sponsor3,
    Sponsor4,
    Sponsor5,
    Sponsor6
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFA07A] mb-2 sm:mb-4"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Previous Year Highlights
          </h2>
          {/* Helper Text */}
          <p className="text-white/60 text-sm md:text-base mt-2" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            Click or drag cards to explore
          </p>
        </div>

        {/* Stack Container - MASSIVELY INCREASED SIZE */}
        <div className="flex flex-col items-center justify-center gap-8">
          <div 
            className="relative bg-white/5 rounded-3xl p-4"
            style={{ width: '1400px', height: '1120px', maxWidth: '95vw' }}
          >
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              mobileClickOnly={true}
              autoplay={true}
              autoplayDelay={4000}
              pauseOnHover={true}
              cards={images.map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  alt={`SOLASTA highlight ${i + 1}`} 
                  className="w-full h-full object-cover pointer-events-none select-none rounded-2xl shadow-2xl"
                />
              ))}
            />
          </div>
          
          {/* Instruction */}
          <p className="text-gray-400 text-lg font-medium" style={{ fontFamily: '"Oxanium", sans-serif' }}>
            Click or drag cards
          </p>
        </div>
      </div>
    </section>
  )
}

export default PreviousYearHighlights
