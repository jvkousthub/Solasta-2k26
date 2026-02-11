import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Sponsor1 from '../assets/Sponsor1.jpg'
import Sponsor2 from '../assets/Sponsor2.jpg'
import Sponsor3 from '../assets/Sponsor3.jpg'
import Sponsor4 from '../assets/Sponsor4.jpg'
import Sponsor5 from '../assets/Sponsor5.jpg'
import Sponsor6 from '../assets/Sponsor6.jpg'
import esports from '../assets/esports.jpeg'

const EventCard = ({ _id, title, date, time, venue, img, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", _id * 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="group cursor-pointer flex flex-col relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-[#FFA07A]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: '"Oxanium", sans-serif' }}>
          {title}
        </h2>

        <div className="flex flex-col gap-2 text-white/80">
          <p className="flex items-center gap-2 text-sm" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            <Icon icon="uiw:date" className="text-[#FFA07A]" /> {date}
          </p>
          <p className="flex items-center gap-2 text-sm" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            <Icon icon="lets-icons:time-light" className="text-[#FFA07A]" /> {time}
          </p>
          <p className="flex items-center gap-2 text-sm" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            <Icon icon="carbon:location" className="text-[#FFA07A]" /> {venue}
          </p>
        </div>

        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 w-full bg-[#FFA07A] hover:bg-[#FFB88C] text-white font-bold py-3 rounded-lg transition-all duration-300 min-h-[44px] flex items-center justify-center" 
          style={{ fontFamily: '"Oxanium", sans-serif' }}
        >
          Register Now
        </a>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const categories = [
    "All",
    "Performing arts",
    "Creative Arts",
    "Technical Events",
    "Fun Games",
    "Esports",
    "Literary",
    "Photography",
    "Pronites",
  ];

  const [currentCategory, setCurrentCategory] = useState("All");
  const [list, setList] = useState([]);

  // Sample data - replace with actual API call
  const sampleEvents = [
    {
      _id: 0,
      title: "RoboWar",
      date: "28 Feb - 1 Mar 2026",
      time: "9:32 AM - 9:33 AM IST",
      venue: "IIITDM Kurnool",
      img: Sponsor1,
      category: "Technical Events",
      link: "https://unstop.com/o/4XRwIQ2?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 1,
      title: "Datathon 2.0",
      date: "28 Feb - 1 Mar 2026",
      time: "9:34 AM - 9:35 AM IST",
      venue: "IIITDM Kurnool",
      img: Sponsor2,
      category: "Technical Events",
      link: "https://unstop.com/o/XBskqDL?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 2,
      title: "Aero RC Challenge",
      date: "28 Feb - 1 Mar 2026",
      time: "11:22 PM - 11:23 PM IST",
      venue: "IIITDM Kurnool",
      img: Sponsor3,
      category: "Technical Events",
      link: "https://unstop.com/o/nO64TIi?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Competitions",
    },
    {
      _id: 3,
      title: "The Scribe's Pen",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: Sponsor4,
      category: "Literary",
      link: "https://unstop.com/o/haeIQmc?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 4,
      title: "The Great Debate",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: Sponsor5,
      category: "Literary",
      link: "https://unstop.com/o/P6WBsLV?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 5,
      title: "Pic of the Day",
      date: "3-Day Event",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: Sponsor6,
      category: "Photography",
      link: "https://unstop.com/o/i3e0NPn?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 6,
      title: "People Poster",
      date: "TBA",
      time: "TBA",
      venue: "TBA",
      img: esports,
      category: "Photography",
      link: "https://unstop.com/o/6nH2V9T?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 7,
      title: "Photo Scavenger Hunt",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: Sponsor1,
      category: "Photography",
      link: "https://unstop.com/o/aCXqsK7?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 8,
      title: "Resin Art",
      date: "1 Mar 2026",
      time: "8:55 AM - 9:56 AM IST",
      venue: "IIITDM Kurnool",
      img: Sponsor2,
      category: "Creative Arts",
      link: "https://unstop.com/o/Ayh3PgS?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 9,
      title: "Glass Painting",
      date: "28 Feb 2026",
      time: "8:48 AM - 9:49 AM IST",
      venue: "IIITDM Kurnool",
      img: Sponsor3,
      category: "Creative Arts",
      link: "https://unstop.com/events/glass-painting-competition-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kur-1639493",
    },
    {
      _id: 10,
      title: "Art Fusion",
      date: "28 Feb 2026",
      time: "11:24 AM - 12:25 PM IST",
      venue: "TBA",
      img: Sponsor4,
      category: "Creative Arts",
      link: "https://unstop.com/events/art-fusion-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1638947",
    },
    {
      _id: 11,
      title: "Tales by Twilight",
      date: "28 Feb 2026",
      time: "11:02 AM - 12:03 PM IST",
      venue: "IIITDM Kurnool",
      img: Sponsor5,
      category: "Literary",
      link: "https://unstop.com/p/tales-by-twilight-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1638896",
    },
    {
      _id: 12,
      title: "Fun Games",
      date: "28 Feb 2026",
      time: "9:05 AM - 11:06 AM IST",
      venue: "IIITDM Kurnool",
      img: Sponsor6,
      category: "Fun Games",
      link: "https://unstop.com/p/fun-games-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1639496",
    },
    {
      _id: 13,
      title: "Voice of Solasta",
      date: "28 Feb 2026",
      time: "2:50 PM - 6:51 PM IST",
      venue: "Solasta Stage, Kurnool",
      img: esports,
      category: "Performing arts",
      link: "https://unstop.com/p/voice-of-solasta-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640058",
    },
  ];

  const changeCategory = (category) => {
    setCurrentCategory(category);
    if (category === "All") {
      setList(sampleEvents);
    } else {
      setList(sampleEvents.filter((event) => event.category === category));
    }
  };

  useEffect(() => {
    setList(sampleEvents);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" id="events">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF6B35] mb-6"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Events
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-10 sm:mb-12 px-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => changeCategory(category)}
              className={`border-2 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-lg cursor-pointer transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base min-h-[44px] ${
                category === currentCategory
                  ? "text-white bg-[#FFA07A] border-[#FFA07A] scale-105 shadow-lg"
                  : "text-white border-white/30 hover:border-[#FFA07A]/50 hover:text-[#FFA07A]"
              }`}
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {list?.map((event) => (
            <EventCard key={event._id} {...event} />
          ))}
        </motion.div>

        {list?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-xl" style={{ fontFamily: '"Oxanium", sans-serif' }}>
              No events found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
