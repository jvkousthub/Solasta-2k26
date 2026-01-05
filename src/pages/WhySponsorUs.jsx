import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Sponsor1 from '../assets/Sponsor1.jpg'
import Sponsor2 from '../assets/Sponsor2.jpg'
import Sponsor3 from '../assets/Sponsor3.jpg'
import Sponsor4 from '../assets/Sponsor4.jpg'
import Sponsor5 from '../assets/Sponsor5.jpg'
import Sponsor6 from '../assets/Sponsor6.jpg'

gsap.registerPlugin(ScrollTrigger)

const WhySponsorUs = () => {
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

  const sponsorData = [
    {
      img: Sponsor1,
      description: "Techno-cultural fest of best technical institute in the region fully funded by MHRD."
    },
    {
      img: Sponsor2,
      description: "Appearance of sponsor name and logo on website and merchandises of SOLASTA'26."
    },
    {
      img: Sponsor3,
      description: "Space will be provided to showcase products and services and engage with attendees."
    },
    {
      img: Sponsor4,
      description: "Publicity and on campus branding through social media (posters to be placed across the city) and 50+ college fest ambassador network."
    },
    {
      img: Sponsor5,
      description: "Connect with 10k+ young and energetic college students from across the region including that from premier institutions like IITs, IIITs and NITs."
    },
    {
      img: Sponsor6,
      description: "Publicity and brand awareness through goodies exchange and event catalogues for attendees."
    }
  ]

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    const panels = track.querySelectorAll('.sponsor-panel')

    if (!container || !track || panels.length === 0) return

    // Only apply horizontal scroll on desktop
    if (!isDesktop) return

    // Use will-change for GPU acceleration
    gsap.set(track, { willChange: 'transform' })
    panels.forEach(panel => {
      gsap.set(panel.querySelector('.panel-content'), { willChange: 'transform, opacity' })
    })

    let ctx = gsap.context(() => {
      const trackWidth = track.scrollWidth
      const windowWidth = window.innerWidth

      // Main horizontal scroll animation with optimized scrub
      const scrollTween = gsap.to(track, {
        x: () => -(trackWidth - windowWidth / 2 - panels[panels.length - 1].offsetWidth / 2),
        ease: "none", // Linear for smoothest scrolling
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1, // Reduced for snappier feel
          start: "center center",
          end: () => `+=${trackWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      })

      // Simplified parallax effect for each panel
      panels.forEach((panel) => {
        const content = panel.querySelector('.panel-content')
        
        gsap.fromTo(content, 
          { 
            opacity: 0.8
          }, 
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left right",
              end: "center center",
              scrub: 1,
            }
          }
        )
      })
    }, container)

    // Cleanup will-change after animations complete
    const cleanupWillChange = () => {
      gsap.set(track, { willChange: 'auto' })
      panels.forEach(panel => {
        gsap.set(panel.querySelector('.panel-content'), { willChange: 'auto' })
      })
    }

    // Debounced resize handler
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        const nowDesktop = window.innerWidth >= 1024
        if (nowDesktop !== isDesktop) {
          setIsDesktop(nowDesktop)
        }
        ScrollTrigger.refresh()
      }, 150)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      ctx.revert()
      cleanupWillChange()
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDesktop])

  return (
    <section 
      ref={containerRef}
      className="sticky-element relative w-full lg:h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Title Section */}
      <div className="lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 z-10 text-center px-4 py-8 lg:py-0">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Why Sponsor Us?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          Reasons to Sponsor SOLASTA'26
        </p>
      </div>

      {/* Horizontal Scrolling Track for Desktop / Grid for Mobile */}
      <div className="track-container h-full flex items-center lg:pt-0 pt-4">
        <div 
          ref={trackRef}
          className="track-flex lg:flex lg:gap-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-12 py-8 lg:py-0 w-full lg:w-auto"
        >
          {sponsorData.map((item, index) => (
            <div
              key={index}
              className="sponsor-panel lg:flex-shrink-0 relative overflow-hidden w-full lg:w-auto"
              style={{
                width: isDesktop ? 'clamp(280px, 80vw, 500px)' : 'auto',
                height: isDesktop ? 'clamp(400px, 70vh, 600px)' : '400px'
              }}
            >
              <div className="panel-content h-full w-full relative">
                {/* Card with image background - optimized for performance */}
                <div className="h-full w-full rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden transform-gpu">
                  {/* Background Image with lazy loading */}
                  <img 
                    src={item.img} 
                    alt={`Sponsor benefit ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 md:p-10">
                    <div className="text-white/90 text-6xl sm:text-7xl md:text-8xl font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  )
}

export default WhySponsorUs
