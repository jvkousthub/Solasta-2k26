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

const EventCard = ({ _id, title, date, time, venue, img }) => {
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

        <button className="mt-6 w-full bg-[#FFA07A] hover:bg-[#FFB88C] text-white font-bold py-3 rounded-lg transition-all duration-300 min-h-[44px]" style={{ fontFamily: '"Oxanium", sans-serif' }}>
          Show Details
        </button>
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
    "Digital Arts",
    "Pronites",
  ];

  const [currentCategory, setCurrentCategory] = useState("All");
  const [list, setList] = useState([]);

  // Sample data - replace with actual API call
  const sampleEvents = [
    {
      _id: 0,
      title: "Dance Competition",
      date: "Feb 28, 2026",
      time: "10:00 AM",
      venue: "Main Auditorium",
      img: esports,
      category: "Performing arts",
    },
    {
      _id: 1,
      title: "Art Exhibition",
      date: "Feb 28, 2026",
      time: "2:00 PM",
      venue: "Gallery Hall",
      img: Sponsor2,
      category: "Creative Arts",
    },
    {
      _id: 2,
      title: "Hackathon",
      date: "Mar 1, 2026",
      time: "9:00 AM",
      venue: "Tech Lab",
      img: Sponsor3,
      category: "Technical Events",
    },
    {
      _id: 3,
      title: "Gaming Tournament",
      date: "Mar 1, 2026",
      time: "3:00 PM",
      venue: "Gaming Arena",
      img: Sponsor4,
      category: "Esports",
    },
    {
      _id: 4,
      title: "Poetry Slam",
      date: "Mar 2, 2026",
      time: "11:00 AM",
      venue: "Open Air Theater",
      img: Sponsor5,
      category: "Literary",
    },
    {
      _id: 5,
      title: "DJ Night",
      date: "Mar 2, 2026",
      time: "7:00 PM",
      venue: "Main Ground",
      img: Sponsor6,
      category: "Pronites",
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
