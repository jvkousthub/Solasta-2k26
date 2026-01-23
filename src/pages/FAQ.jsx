import React, { useState } from 'react'
import { general, accomodation } from '../data/faqData'

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const currentFaqs = activeTab === 'general' ? general : accomodation

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-[#FF6B35]"
          style={{ fontFamily: '"Luckiest Guy", cursive' }}
        >
          Frequently Asked Questions
        </h1>
        <p 
          className="text-white/70 text-center mb-12 text-lg"
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Everything you need to know about SOLASTA'26
        </p>

        {/* Tab Buttons */}
        <div className="flex gap-3 sm:gap-4 mb-8 justify-center flex-wrap">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 min-h-[44px] text-sm sm:text-base ${
              activeTab === 'general'
                ? 'bg-[#FF6B35] text-white shadow-lg scale-105'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
            style={{ fontFamily: '"Oxanium", sans-serif' }}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('accommodation')}
            className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 min-h-[44px] text-sm sm:text-base ${
              activeTab === 'accommodation'
                ? 'bg-[#FF6B35] text-white shadow-lg scale-105'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
            style={{ fontFamily: '"Oxanium", sans-serif' }}
          >
            Accommodation
          </button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center text-left hover:bg-white/5 transition-all duration-300 min-h-[60px]"
              >
                <span 
                  className="text-white font-semibold text-base sm:text-lg pr-2 sm:pr-4"
                  style={{ fontFamily: '"Oxanium", sans-serif' }}
                >
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#FF6B35] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p 
                    className="text-white/80 leading-relaxed text-sm sm:text-base"
                    style={{ fontFamily: '"Oxanium", sans-serif' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <p 
            className="text-white/70 mb-4"
            style={{ fontFamily: '"Oxanium", sans-serif' }}
          >
            Still have questions?
          </p>
          <a
            href="mailto:solasta@iiitk.ac.in"
            className="inline-block bg-[#FF6B35] hover:bg-[#FF8C5A] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[44px] text-sm sm:text-base"
            style={{ fontFamily: '"Oxanium", sans-serif' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
