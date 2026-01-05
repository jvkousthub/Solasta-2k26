import React, { useState, useEffect } from 'react'

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

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(timeLeft)
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const TimeUnit = ({ value, label }) => {
    return (
      <div className="time-unit">
        <div className="digit-display">
          <span className="digit-value">{String(value).padStart(2, '0')}</span>
        </div>
        <div className="time-label">{label}</div>
      </div>
    )
  }

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <div className="countdown-header">
          <h2 className="countdown-title">See You In</h2>
          <div className="countdown-subtitle">February 28, 2026 • 9:00 AM</div>
        </div>
        
        <div className="countdown-timer">
          <div className="time-section">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="time-separator">:</div>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="time-separator">:</div>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <div className="time-separator">:</div>
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .countdown-section {
          min-height: 120vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .countdown-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .countdown-container {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .countdown-header {
          margin-bottom: 4rem;
        }

        .countdown-title {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          color: white;
          margin: 0 0 1rem 0;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.02em;
        }

        .countdown-subtitle {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(1rem, 3vw, 1.5rem);
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
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
          gap: clamp(1rem, 3vw, 2rem);
        }

        .time-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .digit-display {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(90px, 15vw, 140px);
          padding: clamp(1rem, 2vw, 2rem) clamp(0.5rem, 1vw, 1rem);
        }

        .digit-value {
          font-family: 'Orbitron', 'Oxanium', 'Courier New', monospace;
          font-size: clamp(3.5rem, 12vw, 7rem);
          font-weight: 700;
          color: #FF6B35;
          line-height: 1;
          letter-spacing: 0.05em;
          text-shadow: 
            0 0 10px rgba(255, 107, 53, 0.8),
            0 0 20px rgba(255, 107, 53, 0.6),
            0 0 30px rgba(255, 107, 53, 0.4),
            0 0 40px rgba(255, 107, 53, 0.2);
          transition: all 0.3s ease;
        }

        .time-separator {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2rem, 6vw, 4rem);
          font-weight: 700;
          color: white;
          margin: 0 0.5rem;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .time-label {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          font-weight: 700;
          color: #FF6B35;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-shadow: 0 2px 15px rgba(255, 107, 53, 0.5);
        }

        @media (max-width: 768px) {
          .countdown-section {
            padding: 2rem 1rem;
            min-height: 100vh;
          }

          .countdown-header {
            margin-bottom: 3rem;
          }

          .countdown-timer {
            gap: 2rem;
          }

          .time-section {
            gap: 0.75rem;
          }

          .time-separator {
            margin: 0 0.25rem;
            font-size: clamp(2rem, 6vw, 3rem);
          }
        }
      `}</style>
    </section>
  )
}

export default CountdownTimer