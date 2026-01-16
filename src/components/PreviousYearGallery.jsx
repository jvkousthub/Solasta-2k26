import React from 'react'
import Stack from './Stack'

const PreviousYearGallery = () => {
  // Using placeholder fest images - Replace these URLs with your actual fest images
  const images = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format", // Concert crowd
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format", // Night event
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format", // Stage performance
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format", // Music performance
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format", // Cultural event
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format"  // Tech fest
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFA07A] mb-2 sm:mb-4"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Previous Year Highlights
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            Relive the magic of SOLASTA'25
          </p>
        </div>

        {/* Stack Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Stack Component */}
          <div className="w-full max-w-[380px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[550px]">
            <div 
              className="w-full aspect-square mx-auto"
              style={{ maxWidth: '750px' }}
            >
              <Stack
                randomRotation={true}
                sensitivity={150}
                sendToBackOnClick={true}
                mobileClickOnly={false}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                mobileBreakpoint={768}
                cards={images.map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt={`SOLASTA highlight ${i + 1}`} 
                    className="w-full h-95 object-cover pointer-events-none select-none"
                  />
                ))}
              />
            </div>
          </div>

          {/* Description */}
          {/* <div className="w-full lg:max-w-md xl:max-w-lg text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h3 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  Unforgettable Moments
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  Experience the energy, creativity, and excitement that made our previous edition a massive success. 
                  From electrifying performances to innovative competitions, SOLASTA brings together the best minds and talents. */}
                {/* </p>
              </div> */}
{/* 
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-[#FF6B35]/30">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] mb-1 sm:mb-2" style={{ fontFamily: '"Oxanium", sans-serif' }}>
                    10k+
                  </div>
                  <div className="text-white text-xs sm:text-sm md:text-base font-medium">
                    Participants
                  </div>
                </div> */}

                {/* <div className="bg-gradient-to-br from-[#FFA07A]/20 to-[#FFD4A3]/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-[#FFA07A]/30"> */}
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFA07A] mb-1 sm:mb-2" style={{ fontFamily: '"Oxanium", sans-serif' }}>
                    {/* 50+
                  </div>
                  <div className="text-white text-xs sm:text-sm md:text-base font-medium">
                    Events
                  </div>
                </div>
              </div> */}
{/* 
              <p className="text-gray-400 text-xs sm:text-sm md:text-base italic">
                💡 Tip: Click or drag the cards to explore more highlights!
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviousYearGallery

