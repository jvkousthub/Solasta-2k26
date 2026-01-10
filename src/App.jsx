import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import CountdownTimer from './pages/CountdownTimer'
import AboutUs from './pages/AboutUs'
import PreviousYearGallery from './components/PreviousYearGallery'
import WhySponsorUs from './pages/WhySponsorUs'

const App = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleScheduleClick = () => {
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 2500)
  }

  return (
    <Router>
      <Navbar />
      <div>
        <Hero />
        <CountdownTimer />
        <PreviousYearGallery />
        <AboutUs />
        <WhySponsorUs />
      </div>
      
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
      
      {/* Commented out Schedule Button - Register button moved to Navbar */}
      {/* <div className="fixed top-9 right-8 z-50 flex borderr items-center gap-3 sm:gap-4"> */}
        {/* Download Schedule Button */}
        {/* <button
          onClick={handleScheduleClick}
          className="bg-white/90  text-[#FF6B35] px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out border border-[#FF6B35]/50 hover:bg-[#FF6B35] hover:text-white active:scale-95 flex items-center gap-1.5"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="hidden sm:inline">Schedule</span>
        </button> */}
        
        {/* Register Button - Moved to Navbar */}
        {/* <a 
          href="#register" 
          className="bg-white text-[#FF6B35] px-6 py-2.5 sm:px-9 sm:py-4 rounded-full font-bold text-sm sm:text-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out backdrop-blur-sm border-2 border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white active:scale-95"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Register
        </a> */}
      {/* </div> */}
      
      {/* Popup Message */}
      {/* {showPopup && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] bg-white px-8 py-6 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-2 border-[#FF6B35] animate-[fadeIn_0.3s_ease-out]">
          <p className="text-[#FF6B35] font-bold text-xl text-center" style={{ fontFamily: '"Oxanium", sans-serif' }}>
            Schedule will be out soon! 🎉
          </p>
        </div>
      )} */}
    </Router>
  )
}

export default App
