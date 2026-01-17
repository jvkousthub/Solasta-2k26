import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'
import bg1 from '../assets/bg1.png'

const Hero = () => {
  const navigate = useNavigate()
  const textRef = useRef(null)
  const charsRef = useRef([])
  const [isMouseDown, setIsMouseDown] = useState(false)
  const mouseInitialY = useRef(0)
  const mouseFinalY = useRef(0)
  const charIndexSelected = useRef(0)
  const charH = useRef(0)
  
  const weightInit = 600
  const weightTarget = 400
  const weightDiff = weightInit - weightTarget
  const stretchInit = 150
  const stretchTarget = 80
  const stretchDiff = stretchInit - stretchTarget
  const maxYScale = 2.5
  const elasticDropOff = 0.8

  useEffect(() => {
    const element = textRef.current
    if (!element) return

    const text = element.textContent
    element.innerHTML = ''
    charsRef.current = []

    // Split into chars
    text.split('').forEach((char, index) => {
      const charSpan = document.createElement('span')
      charSpan.textContent = char === ' ' ? '\u00A0' : char
      charSpan.style.display = 'inline-block'
      charSpan.style.transformOrigin = 'center bottom'
      charSpan.style.willChange = 'font-weight, font-stretch, transform'
      charSpan.style.cursor = 'pointer'
      charSpan.style.touchAction = 'none'
      
      // Mouse events
      charSpan.addEventListener('mousedown', (e) => {
        mouseInitialY.current = e.clientY
        charIndexSelected.current = index
        setIsMouseDown(true)
        document.body.classList.add('grab')
      })
      
      // Touch events for mobile
      charSpan.addEventListener('touchstart', (e) => {
        e.preventDefault()
        mouseInitialY.current = e.touches[0].clientY
        charIndexSelected.current = index
        setIsMouseDown(true)
      }, { passive: false })
      
      element.appendChild(charSpan)
      charsRef.current.push(charSpan)
    })

    charH.current = element.offsetHeight

    // Initial animation
    gsap.set(charsRef.current, { transformOrigin: 'center bottom' })
    gsap.from(charsRef.current, {
      y: -500,
      fontWeight: weightTarget,
      fontStretch: stretchTarget,
      scaleY: 2,
      ease: 'elastic(0.2, 0.1)',
      duration: 1.5,
      delay: 0.5,
      stagger: {
        each: 0.05,
        from: 'random'
      }
    })

    const handleResize = () => {
      if (textRef.current) {
        charH.current = textRef.current.offsetHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMouseDown) {
        mouseFinalY.current = e.clientY
        calcAndApplyDrag()
      }
    }
    
    const handleTouchMove = (e) => {
      if (isMouseDown) {
        e.preventDefault()
        mouseFinalY.current = e.touches[0].clientY
        calcAndApplyDrag()
      }
    }

    const handleMouseUp = () => {
      if (isMouseDown) {
        setIsMouseDown(false)
        snapBackText()
        document.body.classList.remove('grab')
      }
    }
    
    const handleTouchEnd = () => {
      if (isMouseDown) {
        setIsMouseDown(false)
        snapBackText()
      }
    }

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 || e.clientX <= 0 || 
          e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        snapBackText()
        setIsMouseDown(false)
      }
    }

    if (isMouseDown) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mouseleave', handleMouseLeave)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isMouseDown])

  const calcAndApplyDrag = () => {
    const maxYDragDist = charH.current * (maxYScale - 1)
    let distY = mouseInitialY.current - mouseFinalY.current
    let dragYScale = distY / maxYDragDist
    
    if (dragYScale > (maxYScale - 1)) dragYScale = maxYScale - 1
    else if (dragYScale < -0.5) dragYScale = -0.5

    gsap.to(charsRef.current, {
      y: (index) => {
        const fracDispersion = calcfracDispersion(index, dragYScale)
        return fracDispersion * -50
      },
      fontWeight: (index) => {
        const fracDispersion = calcfracDispersion(index, dragYScale)
        return weightInit - (fracDispersion * weightDiff)
      },
      fontStretch: (index) => {
        const fracDispersion = calcfracDispersion(index, dragYScale)
        return `${stretchInit - (fracDispersion * stretchDiff)}%`
      },
      scaleY: (index) => {
        const fracDispersion = calcfracDispersion(index, dragYScale)
        let scaleY = 1 + fracDispersion
        if (scaleY < 0.5) scaleY = 0.5
        return scaleY
      },
      ease: 'power4',
      duration: 0.6
    })
  }

  const calcfracDispersion = (index, dragYScale) => {
    const numChars = charsRef.current.length
    const dispersion = 1 - (Math.abs(index - charIndexSelected.current) / (numChars * elasticDropOff))
    return dispersion * dragYScale
  }

  const snapBackText = () => {
    gsap.to(charsRef.current, {
      y: 0,
      fontWeight: weightInit,
      fontStretch: `${stretchInit}%`,
      scale: 1,
      ease: 'elastic(0.35, 0.1)',
      duration: 1,
      stagger: {
        each: 0.02,
        from: charIndexSelected.current
      }
    })
  }

  return (
    <div id="home" className='min-h-screen flex items-center justify-center overflow-hidden relative bg-[#FF6B35] px-3 py-20 sm:px-4 sm:py-4'>
      
      <div 
        className='absolute inset-0 bg-cover bg-center opacity-30'
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      />
      
      <div className='relative z-10 w-full max-w-[95vw] flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8'>
       
        <p 
          className='text-white/90 text-[clamp(0.65rem,2.5vw,2rem)] text-center font-semibold tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] px-2'
          style={{
            fontFamily: '"Oxanium", sans-serif'
          }}
        >
          IIITDM KURNOOL PRESENTS
        </p>
        
        {/* Main Title */}
        <h1 
          ref={textRef}
          className='text-white text-[clamp(2.5rem,12vw,8rem)] leading-[0.95] sm:leading-[0.85] md:leading-[0.6] tracking-[-0.02em] sm:tracking-[-0.05em] md:tracking-[-0.1em] select-none text-center px-2 max-w-full'
          style={{
            fontFamily: 'GT-Flexa, sans-serif',
            fontWeight: weightInit,
            fontStretch: `${stretchInit}%`,
            letterSpacing: '0.008em',
            textShadow: '0 0.05em 0 #FFB088, 0 0.1em 0.1em rgba(70,30,0, 0.3), 0 0.4em 0.3em rgba(70,30,0, 0.1)',
            wordBreak: 'keep-all',
            overflowWrap: 'normal'
          }}
        >
          Solasta'26
        </h1>
        
        {/* Mobile Helper Text */}
        <p className='text-white/70 text-xs sm:text-sm md:hidden text-center px-4' style={{ fontFamily: '"Oxanium", sans-serif' }}>
          Tap and drag the title text!
        </p>
        
        {/* Teams Button */}
        <button
          onClick={() => navigate('/teams')}
          className='mt-4 sm:mt-6 md:mt-8 bg-white text-[#FF6B35] px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out border-2 border-white hover:bg-transparent hover:text-white active:scale-95 min-h-[44px]'
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Meet Our Teams
        </button>
      </div>
    </div>
  )
}

export default Hero
