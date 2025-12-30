import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import bg1 from '../assets/bg1.png'

const Hero = () => {
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
      charSpan.style.cursor = 'url("data:image/svg+xml,%3Csvg width=\'64px\' height=\'64px\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 700 700\'%3E%3Cpath d=\'M419.99,560.0013c83.627,0,151.67-68.041,151.67-151.67v-198.33A46.6565,46.6565,0,0,0,499.047,171.22a46.6714,46.6714,0,0,0-70-23.3323,46.7853,46.7853,0,0,0-44.055-31.219,46.2641,46.2641,0,0,0-23.332,6.2773V46.669a46.668,46.668,0,1,0-93.336,0v272.79l-64.145-32.082a70.2983,70.2983,0,0,0-31.289-7.375,44.6638,44.6638,0,0,0-31.5,76.23l150.88,150.87A179.4167,179.4167,0,0,0,420,560Z\' fill=\'%23fff\'/%3E%3C/svg%3E%0A") 32 32, pointer'
      
      charSpan.addEventListener('mousedown', (e) => {
        mouseInitialY.current = e.clientY
        charIndexSelected.current = index
        setIsMouseDown(true)
        document.body.classList.add('grab')
      })
      
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

    const handleMouseUp = () => {
      if (isMouseDown) {
        setIsMouseDown(false)
        snapBackText()
        document.body.classList.remove('grab')
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
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
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
    <div className='min-h-screen flex items-center justify-center overflow-hidden relative bg-[#FF7F99] p-4'>
      
      <div 
        className='absolute inset-0 bg-cover bg-center opacity-30'
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      />
      
      <div className='relative z-10 w-full max-w-[95vw] flex flex-col items-center justify-center gap-6 sm:gap-8'>
       
        <p 
          className='text-white/90 text-[clamp(0.875rem,3.5vw,2rem)] text-center'
          style={{
            fontFamily: '"Oxanium", sans-serif',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
          }}
        >
          IIITDM KURNOOL PRESENTS
        </p>
        
        {/* Main Title */}
        <h1 
          ref={textRef}
          className='text-white text-[clamp(2.5rem,12vw,8rem)] leading-[0.8] sm:leading-[0.6] tracking-[-0.05em] sm:tracking-[-0.1em] select-none text-center'
          style={{
            fontFamily: 'GT-Flexa, sans-serif',
            fontWeight: weightInit,
            fontStretch: `${stretchInit}%`,
            letterSpacing: '0.008em',
            textShadow: '0 0.05em 0 #FFB0C0, 0 0.1em 0.1em rgba(70,0,35, 0.3), 0 0.4em 0.3em rgba(70,0,35, 0.1)'
          }}
        >
          Solasta'26
        </h1>
      </div>
    </div>
  )
}

export default Hero
