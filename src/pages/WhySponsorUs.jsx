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

    // Force hardware acceleration with will-change and transform3d
    gsap.set(track, { 
      force3D: true,
      willChange: 'transform'
    })
    
    panels.forEach(panel => {
      const content = panel.querySelector('.panel-content')
      gsap.set(content, { 
        force3D: true,
        willChange: 'transform'
      })
    })

    let ctx = gsap.context(() => {
      // Main horizontal scroll animation with optimized settings
      const scrollTween = gsap.to(track, {
        x: () => {
          const trackWidth = track.scrollWidth
          const windowWidth = window.innerWidth
          const lastPanel = panels[panels.length - 1]
          const lastPanelWidth = lastPanel.offsetWidth
          return -(trackWidth - windowWidth / 2 - lastPanelWidth / 2)
        },
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: true, // Boolean for maximum smoothness
          start: "top top",
          end: () => {
            const trackWidth = track.scrollWidth
            const windowWidth = window.innerWidth
            return `+=${trackWidth - windowWidth + windowWidth / 2}`
          },
          invalidateOnRefresh: true,
          anticipatePin: 1,
          fastScrollEnd: true,
        }
      })

      // Smooth parallax effect for each panel
      panels.forEach((panel) => {
        const content = panel.querySelector('.panel-content')

        gsap.fromTo(content,
          {
            x: "-10%",
            force3D: true,
          },
          {
            x: "10%",
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true, // Boolean for smoothest parallax
            }
          }
        )
      })
    }, container)

    // Cleanup function
    const cleanup = () => {
      gsap.set(track, { clearProps: 'willChange' })
      panels.forEach(panel => {
        const content = panel.querySelector('.panel-content')
        gsap.set(content, { clearProps: 'willChange' })
      })
    }

    // Debounced resize handler
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        const nowDesktop = window.innerWidth >= 1024
        if (nowDesktop !== isDesktop) {
          setIsDesktop(nowDesktop)
        }
        ScrollTrigger.refresh()
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      ctx.revert()
      cleanup()
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDesktop])

  return (
    <section 
      ref={containerRef}
      className="sticky-element relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Title Section */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-center">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
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
          style={{ willChange: 'transform' }}
        >
          {sponsorData.map((item, index) => (
            <div
              key={index}
              className="sponsor-panel lg:flex-shrink-0 relative w-full lg:w-auto"
              style={{
                width: isDesktop ? 'clamp(280px, 80vw, 500px)' : 'auto',
                height: isDesktop ? 'clamp(400px, 70vh, 600px)' : '400px'
              }}
            >
              <div className="panel-content h-full w-full relative" style={{ willChange: 'transform' }}>
                {/* Card with image background - optimized for performance */}
                <div className="h-full w-full rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden transform-gpu backface-hidden" style={{ outline: 'none', border: 'none' }}>
                  {/* Background Image with lazy loading */}
                  <img 
                    src={item.img} 
                    alt={`Sponsor benefit ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transform-gpu"
                    loading="lazy"
                    decoding="async"
                    style={{ margin: '-1px', width: 'calc(100% + 2px)', height: 'calc(100% + 2px)' }}
                  />
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 md:p-10">
                    <div 
                      className="text-white text-6xl sm:text-7xl md:text-8xl font-black tracking-tight drop-shadow-2xl"
                      style={{ fontFamily: '"Oxanium", sans-serif', textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <p 
                        className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-bold tracking-wide drop-shadow-lg"
                        style={{ fontFamily: '"Oxanium", sans-serif', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                      >
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
