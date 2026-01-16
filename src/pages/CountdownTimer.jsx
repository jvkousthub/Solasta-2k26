import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CountdownTimer = () => {
  const targetDate = new Date('2026-02-28T09:00:00').getTime()
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [prevTime, setPrevTime] = useState(timeLeft)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(timeLeft)
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  useEffect(() => {
    // Initial entrance animations
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: 'power3.out'
      })

      gsap.from('.time-unit', {
        opacity: 0,
        scale: 0.5,
        y: 100,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 0.3
      })

      gsap.from('.countdown-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1
      })

      // Floating particles animation
      gsap.to('.particle', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-180, 180)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.2,
          from: 'random'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const TimeUnit = ({ value, label, index }) => {
    const digitRef = useRef(null)
    const prevValueRef = useRef(value)

    useEffect(() => {
      if (prevValueRef.current !== value) {
        // 3D flip animation when value changes
        const tl = gsap.timeline()
        
        tl.to(digitRef.current, {
          rotationX: 90,
          duration: 0.3,
          ease: 'power2.in',
          transformOrigin: '50% 50%'
        })
        .set(digitRef.current, {
          rotationX: -90
        })
        .to(digitRef.current, {
          rotationX: 0,
          duration: 0.3,
          ease: 'power2.out'
        })

        // Scale pulse on change
        gsap.to(digitRef.current.closest('.time-unit'), {
          scale: 1.1,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: 'power2.inOut'
        })

        // Ripple effect
        gsap.fromTo(`.ripple-${index}`, {
          scale: 0.8,
          opacity: 0.8
        }, {
          scale: 1.5,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        })

        prevValueRef.current = value
      }
    }, [value, index])

    return (
      <div className="time-unit">
        <div className="digit-wrapper">
          <div className={`ripple ripple-${index}`}></div>
          <div className="digit-display">
            <span ref={digitRef} className="digit-value">
              {String(value).padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className="time-label">{label}</div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="countdown-section">
      {/* Animated particles background */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`
          }}></div>
        ))}
      </div>

      <div className="countdown-container">
        <div className="countdown-header">
          <h2 ref={titleRef} className="countdown-title">See You In</h2>
        </div>
        
        <div className="countdown-timer">
          <div className="time-section">
            <TimeUnit value={timeLeft.days} label="Days" index={0} />
            <div className="time-separator">:</div>
            <TimeUnit value={timeLeft.hours} label="Hours" index={1} />
            <div className="time-separator">:</div>
            <TimeUnit value={timeLeft.minutes} label="Minutes" index={2} />
            <div className="time-separator">:</div>
            <TimeUnit value={timeLeft.seconds} label="Seconds" index={3} />
          </div>
        </div>
        
        <div className="countdown-subtitle">February 28, 2026 • 9:00 AM</div>
      </div>

      <style jsx>{`
        .countdown-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, #000000 0%, #1f2937 50%, #000000 100%);
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
          perspective: 1000px;
        }

        @media (min-width: 640px) {
          .countdown-section {
            padding: 3rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .countdown-section {
            padding: 4rem 2rem;
            min-height: 120vh;
          }
        }

        .countdown-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          pointer-events: none;
        }

        .countdown-section::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: transparent;
          pointer-events: none;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(50px, 50px) rotate(360deg); }
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0.3;
        }

        .countdown-container {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .countdown-header {
          margin-bottom: 2rem;
        }

        @media (min-width: 640px) {
          .countdown-header {
            margin-bottom: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .countdown-header {
            margin-bottom: 4rem;
          }
        }

        .countdown-title {
          font-family: 'Luckiest Guy', cursive;
          font-size: clamp(2rem, 8vw, 5rem);
          font-weight: 400;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.02em;
        }

        @media (min-width: 640px) {
          .countdown-title {
            margin: 0 0 1rem 0;
          }
        }

        .countdown-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1rem, 4vw, 2.5rem);
          color: rgba(255, 255, 255, 0.95);
          font-weight: 700;
          margin-top: 3rem;
        }

        @media (min-width: 640px) {
          .countdown-subtitle {
            margin-top: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .countdown-subtitle {
            margin-top: 5rem;
          }
        }

        .countdown-timer {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .time-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 2vw, 2rem);
          flex-wrap: wrap;
        }

        @media (min-width: 640px) {
          .time-section {
            flex-wrap: nowrap;
          }
        }

        .time-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.3s ease;
        }

        @media (min-width: 640px) {
          .time-unit {
            gap: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .time-unit {
            gap: 1.5rem;
          }
        }

        .digit-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          pointer-events: none;
          z-index: 0;
        }

        .digit-display {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(70px, 15vw, 160px);
          padding: clamp(1rem, 2.5vw, 3rem) clamp(0.5rem, 1.5vw, 2rem);
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transform-style: preserve-3d;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .digit-display {
            border-radius: 18px;
          }
        }

        @media (min-width: 1024px) {
          .digit-display {
            border-radius: 20px;
          }
        }

        .digit-display::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .digit-value {
          font-family: 'Orbitron', 'Oxanium', 'Courier New', monospace;
          font-size: clamp(2.5rem, 10vw, 8rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          letter-spacing: 0.05em;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
          transform-style: preserve-3d;
          position: relative;
          z-index: 1;
        }

        .time-separator {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(1.5rem, 5vw, 5rem);
          font-weight: 700;
          background: linear-gradient(180deg, #fff 0%, #FFA07A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0.25rem;
          animation: blink 2s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .time-separator {
            margin: 0 0.5rem;
          }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.95); }
        }

        .time-label {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(0.75rem, 2vw, 1.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #FFA07A 0%, #FFB88C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (min-width: 640px) {
          .time-label {
            letter-spacing: 0.15em;
          }
        }

        @media (min-width: 1024px) {
          .time-label {
            letter-spacing: 0.2em;
          }
        }

        @media (max-width: 639px) {
          .countdown-section {
            padding: 1.5rem 0.75rem;
            min-height: 100vh;
          }

          .countdown-header {
            margin-bottom: 2rem;
          }

          .countdown-timer {
            gap: 1rem;
          }

          .time-section {
            gap: 0.25rem;
          }

          .time-separator {
            margin: 0 0.1rem;
            font-size: clamp(1.5rem, 5vw, 2rem);
          }

          .digit-display {
            padding: clamp(0.75rem, 2vw, 1.25rem) clamp(0.4rem, 1vw, 0.75rem);
            min-width: clamp(60px, 15vw, 100px);
            border-radius: 12px;
          }

          .countdown-subtitle {
            margin-top: 2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default CountdownTimer