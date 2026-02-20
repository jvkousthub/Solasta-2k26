import React from 'react'
import TiltedCard from '../components/TiltedCard'

// External images hosted on ImgBB to reduce Netlify bandwidth
const logo = 'https://i.ibb.co/zTSCY800/lanyard.png'
const Sponsor1 = 'https://i.ibb.co/99WZRFMT/Sponsor1.jpg'
const Sponsor2 = 'https://i.ibb.co/YTT72JnY/Sponsor2.jpg'
const Sponsor3 = 'https://i.ibb.co/jZQHr31F/Sponsor3.jpg'
const Sponsor4 = 'https://i.ibb.co/XkjNs4V8/Sponsor4.jpg'
const Sponsor5 = 'https://i.ibb.co/NgqTvv3h/Sponsor5.jpg'
const Sponsor6 = 'https://i.ibb.co/qM0KcZHh/Sponsor6.jpg'

const WhySponsorUs = () => {
  const sponsorData = [
    {
      img: Sponsor1,
      title: "Premier Technical Institute",

      description: "Techno-cultural fest of best technical institute in the region fully funded by MHRD."
    },
    {
      img: logo,
      title: "Brand Visibility",
      description: "Appearance of sponsor name and logo on website and merchandises of SOLASTA'26."
    },
    {
      img: Sponsor3,
      title: "Product Showcase",
      description: "Space will be provided to showcase products and services and engage with attendees."
    },
    {
      img: Sponsor4,
      title: "Wide Reach Marketing",
      description: "Publicity and on campus branding through social media (posters to be placed across the city) and 50+ college fest ambassador network."
    },
    {
      img: Sponsor5,
      title: "Student Engagement",
      description: "Connect with 10k+ young and energetic college students from across the region including that from premier institutions like IITs, IIITs and NITs."
    },
    {
      img: Sponsor6,
      title: "Brand Awareness",
      description: "Publicity and brand awareness through goodies exchange and event catalogues for attendees."
    }
  ]

  return (
    <section
      id="sponsors"
      className="relative w-full min-h-screen py-20 sm:py-24 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background gradient circles */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#FFB347]/10 rounded-full blur-3xl"></div>

      {/* Title Section */}
      <div className="relative z-10 text-center px-4 mb-16 sm:mb-20 md:mb-24">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#FF6B35]"
          style={{ fontFamily: '"Luckiest Guy", cursive' }}
        >
          Why Sponsor Us?
        </h2>
        <p 
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Reasons to Sponsor SOLASTA&apos;26
        </p>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {sponsorData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Tilted Card */}
              <TiltedCard
                imageSrc={item.img}
                altText={item.title}
                captionText={item.title}
                containerHeight="320px"
                containerWidth="100%"
                imageHeight="320px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FFA07A] to-[#FFD4A3] text-white px-4 py-2 rounded-full font-bold text-lg sm:text-xl">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                }
              />
              
              {/* Card Description */}
              <div className="mt-6 text-center max-w-sm">
                <h3 
                  className="text-xl sm:text-2xl font-bold mb-3 text-[#FFA07A]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-white/70 text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 text-center mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative z-10">
        <a 
          href="mailto:solasta@iiitk.ac.in"
          className="inline-block bg-white text-[#FFA07A] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out border-2 border-[#FFA07A] hover:bg-[#FFA07A] hover:text-white active:scale-95 min-h-[44px]"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Become a Sponsor
        </a>
      </div>
    </section>
  )
}

export default WhySponsorUs
