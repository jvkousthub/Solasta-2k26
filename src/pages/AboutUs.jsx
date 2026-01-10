import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return

    let ctx = gsap.context(() => {
      // Fade in animation
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Parallax effect for background elements
      gsap.to('.about-bg-circle', {
        y: -100,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-bg-circle"></div>
      <div className="about-bg-circle about-bg-circle-2"></div>
      
      <div ref={contentRef} className="about-container">
        <h2 className="about-title">ABOUT US</h2>
        
        <div className="about-content">
          <div className="about-logo-section">
            <div className="logo-placeholder">
              <span>LOGO</span>
            </div>
          </div>

          <div className="about-text">
            <p className="about-paragraph">
              The Indian Institute of Information Technology, Design & Manufacturing, Kurnool (IIITDM Kurnool) was established in 2014 following the President of India's approval of the Institutes of Information Technology Act, 2014. Fully funded by the Ministry of Education, this prestigious institution was elevated to the status of an Institute of National Importance on August 3, 2017, through a significant amendment to the IIIT Act. IIITDM Kurnool is a beacon of academic excellence, innovation, and transformative education.
            </p>
            
            <p className="about-paragraph">
              <span className="highlight-text">SOLASTA</span>, the flagship Techno-Cultural extravaganza of IIITDM Kurnool, has been a cornerstone of the institute's legacy since its inception in 2019. Recognized as the grandest festival of its kind not only in Kurnool city but across the greater Rayalaseema region, SOLASTA has become a vibrant platform that celebrates talent, creativity, and innovation. With an astounding annual footfall exceeding <span className="highlight-number">10,000 attendees</span> from over <span className="highlight-number">50 prestigious colleges</span> in the region, the event showcases thrilling competitions, artistic brilliance, and technological marvels, offering a staggering prize pool worth over <span className="highlight-number">₹2,50,000</span>.
            </p>
            
            <p className="about-paragraph">
              SOLASTA provides aspiring talents with a unique opportunity to connect, collaborate, and showcase their potential. Through this cultural spectacle, IIITDM Kurnool passionately advocates for the growth of artistic and technological pursuits among the youth, ensuring a brighter and more glorious future for art and innovation.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%);
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .about-bg-circle {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
          top: -200px;
          left: -200px;
          pointer-events: none;
        }

        .about-bg-circle-2 {
          top: auto;
          bottom: -200px;
          left: auto;
          right: -200px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%);
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .about-title {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          text-align: center;
          color: #fff;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          background: linear-gradient(135deg, #fff 0%, #FF6B35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .about-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #FF6B35, transparent);
          border-radius: 2px;
        }

        .about-content {
          display: grid;
          gap: 3rem;
          align-items: center;
        }

        .about-logo-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-placeholder {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.2));
          border: 3px solid rgba(255, 107, 53, 0.4);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Oxanium', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #FF6B35;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 40px rgba(255, 107, 53, 0.2);
          transition: all 0.3s ease;
        }

        .logo-placeholder:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 50px rgba(255, 107, 53, 0.3);
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-paragraph {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          text-align: justify;
          background: rgba(255, 255, 255, 0.03);
          padding: 1.5rem;
          border-radius: 15px;
          border-left: 3px solid #FF6B35;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .about-paragraph:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }

        .highlight-text {
          color: #FF6B35;
          font-weight: 700;
          font-size: 1.1em;
        }

        .highlight-number {
          color: #FF6B35;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .about-content {
            grid-template-columns: 250px 1fr;
          }

          .logo-placeholder {
            width: 220px;
            height: 220px;
          }
        }

        @media (max-width: 767px) {
          .about-section {
            padding: 4rem 1.5rem;
          }

          .about-paragraph {
            text-align: left;
            padding: 1.2rem;
          }

          .logo-placeholder {
            width: 180px;
            height: 180px;
            font-size: 1.3rem;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default AboutUs
