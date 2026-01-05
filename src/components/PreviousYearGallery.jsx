import React, { useState, useEffect } from 'react'

// Import images - You'll need to add your actual previous year images to the assets folder
// For now using placeholder paths - replace these with your actual image imports
// import prev1 from '../assets/solasta2023-1.jpg'
// import prev2 from '../assets/solasta2023-2.jpg'
// etc...

const PreviousYearGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Placeholder images - Replace these with your actual images
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      caption: 'SOLASTA 2023 - Cultural Night',
      year: '2023'
    },
    {
      url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
      caption: 'SOLASTA 2023 - Tech Fest',
      year: '2023'
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      caption: 'SOLASTA 2022 - Dance Competition',
      year: '2022'
    },
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      caption: 'SOLASTA 2022 - Music Fest',
      year: '2022'
    },
    {
      url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
      caption: 'SOLASTA 2019 - Inauguration',
      year: '2019'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
        setIsTransitioning(false)
      }, 500)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
      setIsTransitioning(false)
    }, 300)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
      setIsTransitioning(false)
    }, 300)
  }

  const goToImage = (index) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex(index)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f3460] to-[#16213e]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#FF6B35] via-[#FFB347] to-[#FF6B35] bg-clip-text text-transparent"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          PREVIOUS YEAR HIGHLIGHTS
        </h2>
        <p 
          className="text-white/70 text-center mb-12 text-sm sm:text-base"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Relive the magical moments from past editions of SOLASTA
        </p>

        {/* Gallery Container */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-2 border-white/10">
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].caption}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
              }`}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div 
                className="inline-block bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-semibold mb-2"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                {images[currentImageIndex].year}
              </div>
              <h3 
                className="text-white text-xl sm:text-2xl md:text-3xl font-bold"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                {images[currentImageIndex].caption}
              </h3>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentImageIndex
                    ? 'bg-[#FF6B35] w-8 sm:w-10 h-2'
                    : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Preview (Optional) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mt-8">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentImageIndex
                  ? 'ring-4 ring-[#FF6B35] scale-105'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviousYearGallery
