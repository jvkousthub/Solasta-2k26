import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
const lanyardImg = 'https://raw.githubusercontent.com/jvkousthub/Solasta-2k26/master/src/assets/lanyard.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const handleTeamsClick = () => {
    navigate('/teams')
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-[#FFA07A] font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-[#FFA07A] font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              About
            </button>
            <button 
              onClick={handleTeamsClick}
              className="text-white/90 hover:text-[#FFA07A] font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Teams
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 md:gap-3">
            {/* <img 
              src={lanyardImg} 
              alt="Lanyard" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
            /> */}
            <h1 
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFA07A] via-[#FFD4A3] to-[#FFA07A] bg-clip-text text-transparent tracking-wider"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              SOLASTA
            </h1>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
            <button 
              onClick={() => scrollToSection('events')}
              className="text-white/90 hover:text-[#FFA07A] font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="text-white/90 hover:text-[#FFA07A] font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Sponsors
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-[#FFA07A] font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2.5 rounded-lg hover:bg-white/10 transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 animate-slideDown">
          <div className="px-4 py-5 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white/90 hover:text-[#FFA07A] font-semibold text-xl transition-colors py-2"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white/90 hover:text-[#FFA07A] font-semibold text-xl transition-colors py-2"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="block w-full text-left text-white/90 hover:text-[#FFA07A] font-semibold text-xl transition-colors py-2"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Events
            </button>
            <button 
              onClick={handleTeamsClick}
              className="block w-full text-left text-white/90 hover:text-[#FFA07A] font-semibold text-xl transition-colors py-2"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Teams
            </button>
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="block w-full text-left text-white/90 hover:text-[#FFA07A] font-semibold text-xl transition-colors py-2"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Sponsors
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white/90 hover:text-[#FFA07A] font-semibold text-xl transition-colors py-2"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
