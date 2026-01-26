import React from 'react'
import Stack from './Stack'
import fallback1 from '../assets/SolastaHighlights/IMG_1956.jpg'
import fallback2 from '../assets/SolastaHighlights/IMG_2296.jpg'
import fallback3 from '../assets/SolastaHighlights/IMG_2950.jpg'
import fallback4 from '../assets/SolastaHighlights/IMG_3447.jpg'
import fallback5 from '../assets/SolastaHighlights/IMG_7187.jpg'
import fallback6 from '../assets/SolastaHighlights/IMG_7489.jpg'
import fallback7 from '../assets/SolastaHighlights/IMG_7821.jpg'
import fallback8 from '../assets/SolastaHighlights/IMG_8217.jpg'
import fallback9 from '../assets/SolastaHighlights/IMG_8318.jpg'
import fallback10 from '../assets/SolastaHighlights/IMG_8326.jpg'
import fallback11 from '../assets/SolastaHighlights/IMG_8356.JPG'
import fallback12 from '../assets/SolastaHighlights/IMG_8580.jpg'
import fallback13 from '../assets/SolastaHighlights/IMG_8635.jpg'
import fallback14 from '../assets/SolastaHighlights/IMG_9116.jpg'

const PreviousYearGallery = () => {
  const images = [
    { src: 'https://i.ibb.co/HDBWyngg/IMG-1956.jpg', alt: 'IMG-1956', fallback: fallback1 },
    { src: 'https://i.ibb.co/F4Pv19Wx/IMG-2296.jpg', alt: 'IMG-2296', fallback: fallback2 },
    { src: 'https://i.ibb.co/V0X3Qhht/IMG-2950.jpg', alt: 'IMG-2950', fallback: fallback3 },
    { src: 'https://i.ibb.co/JR6S0cc2/IMG-3447.jpg', alt: 'IMG-3447', fallback: fallback4 },
    { src: 'https://i.ibb.co/xKpPd765/IMG-7187.jpg', alt: 'IMG-7187', fallback: fallback5 },
    { src: 'https://i.ibb.co/YBxPm1jx/IMG-7489.jpg', alt: 'IMG-7489', fallback: fallback6 },
    { src: 'https://i.ibb.co/Y7YKDN4d/IMG-7821.jpg', alt: 'IMG-7821', fallback: fallback7 },
    { src: 'https://i.ibb.co/gLXdkDBP/IMG-8217.jpg', alt: 'IMG-8217', fallback: fallback8 },
    { src: 'https://i.ibb.co/bgLBRpmT/IMG-8318.jpg', alt: 'IMG-8318', fallback: fallback9 },
    { src: 'https://i.ibb.co/FLq9kp8P/IMG-8326.jpg', alt: 'IMG-8326', fallback: fallback10 },
    { src: 'https://i.ibb.co/d4QhhhG4/IMG-8356.jpg', alt: 'IMG-8356', fallback: fallback11 },
    { src: 'https://i.ibb.co/fYhZMXt7/IMG-8580.jpg', alt: 'IMG-8580', fallback: fallback12 },
    { src: 'https://i.ibb.co/W4w2MWyK/IMG-8635.jpg', alt: 'IMG-8635', fallback: fallback13 },
    { src: 'https://i.ibb.co/cS5FChbJ/IMG-9116.jpg', alt: 'IMG-9116', fallback: fallback14 }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-12 md:mb-16 lg:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF6B35] mb-2 sm:mb-4"
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
          <div className="w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto">
            <div 
              className="w-full mx-auto"
              style={{ aspectRatio: '4/3', maxWidth: '900px' }}
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
                cards={images.map((img, i) => (
                  <img 
                    key={i} 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover pointer-events-none select-none rounded-2xl"
                    loading="eager"
                    onError={(e) => { e.target.src = img.fallback }}
                  />
                ))}
              />
            </div>
            {/* Helper Text */}
            <p className='text-white/60 text-xs sm:text-sm text-center mt-4 sm:mt-5' style={{ fontFamily: '"Montserrat", sans-serif' }}>
              <span >Tap or drag the cards to explore!</span>
              {/* <span className='hidden md:inline'>Click and drag the cards to explore more highlights!</span> */}
            </p>
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

