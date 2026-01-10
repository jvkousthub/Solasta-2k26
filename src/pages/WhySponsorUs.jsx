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

    // Wait for all images to load before initializing ScrollTrigger
    const images = track.querySelectorAll('img')
    let loadedImages = 0
    const totalImages = images.length

    const initScrollTrigger = () => {
      let ctx = gsap.context(() => {
        // Horizontal scroll animation for all devices
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
            scrub: 0.5,
            start: "top top",
            end: () => {
              const trackWidth = track.scrollWidth
              const windowWidth = window.innerWidth
              return `+=${trackWidth - windowWidth + windowWidth / 2}`
            },
            invalidateOnRefresh: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            smoothChildTiming: true,
          }
        })

        // Parallax effect for each panel on all devices
        panels.forEach((panel) => {
          const content = panel.querySelector('.panel-content')

          gsap.fromTo(content,
            {
              x: "-8%",
              force3D: true,
            },
            {
              x: "8%",
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: 0.5,
              }
            }
          )
        })
      }, container)

      return ctx
    }

    const handleImageLoad = () => {
      loadedImages++
      if (loadedImages === totalImages) {
        // All images loaded, refresh ScrollTrigger
        ScrollTrigger.refresh()
      }
    }

    // Listen for image load events
    images.forEach(img => {
      if (img.complete) {
        handleImageLoad()
      } else {
        img.addEventListener('load', handleImageLoad)
        img.addEventListener('error', handleImageLoad) // Handle errors too
      }
    })

    // Initialize ScrollTrigger immediately (will recalculate when images load)
    const ctx = initScrollTrigger()

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
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad)
        img.removeEventListener('error', handleImageLoad)
      })
    }
  }, [isDesktop])

  return (
    <section 
      id="sponsors"
      ref={containerRef}
      className="sticky-element relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Title Section */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-10 text-center px-4">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Why Sponsor Us?
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
          Reasons to Sponsor SOLASTA'26
        </p>
      </div>

      {/* Horizontal Scrolling Track for All Devices */}
      <div className="track-container h-full flex items-center pt-24 sm:pt-28 md:pt-20 lg:pt-0 pb-4 lg:pb-0">
        <div 
          ref={trackRef}
          className="track-flex flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-3 sm:px-6 md:px-8 lg:px-12 py-4 lg:py-0"
          style={{ willChange: 'transform' }}
        >
          {sponsorData.map((item, index) => (
            <div
              key={index}
              className="sponsor-panel flex-shrink-0 relative"
              style={{
                width: 'clamp(240px, 75vw, 450px)',
                height: 'clamp(320px, 60vh, 500px)'
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
                  <div className="relative z-10 h-full flex flex-col justify-between p-3 sm:p-5 md:p-6 lg:p-8">
                    <div 
                      className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight drop-shadow-2xl"
                      style={{ fontFamily: '"Oxanium", sans-serif', textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <p 
                        className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-bold tracking-wide drop-shadow-lg"
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
