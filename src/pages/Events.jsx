import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import ImageWithLoader from "../components/ImageWithLoader";
import img1 from '../assets/s/1.png'
import img2 from '../assets/s/2.png'
import img3 from '../assets/s/3.png'
import img4 from '../assets/s/4.png'
import img5 from '../assets/s/5.png'
import img6 from '../assets/s/6.png'
import img7 from '../assets/s/7.png'
import img8 from '../assets/s/8.png'
import img9 from '../assets/s/9.png'
import img10 from '../assets/s/10.png'
import img11 from '../assets/s/11.png'
import img12 from '../assets/s/12.png'
import img13 from '../assets/s/13.png'
import img14 from '../assets/s/14.png'
import img15 from '../assets/s/15.png'
import img16 from '../assets/s/16.png'
import img17 from '../assets/s/17.png'
import img18 from '../assets/s/18.png'
import img19 from '../assets/s/19.png'
import img20 from '../assets/s/20.png'
import img21 from '../assets/s/21.png'
import img22 from '../assets/s/22.png'
import img23 from '../assets/s/23.png'
import img24 from '../assets/s/24.png'
import img25 from '../assets/s/25.jpeg'
const img26 = 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=396&h=256&fit=crop' // Institute got Talent - microphone/comedy show
const img27 = 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=396&h=256&fit=crop' // Guess N' Win - quiz/games
const img28 = 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=396&h=256&fit=crop' // Reel Competition - video/film
const img29 = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=396&h=256&fit=crop' // CAD Design Championship - technical/design
const img30 = 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=396&h=256&fit=crop' // Campus Combat - sports/combat
const img31 = 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=396&h=256&fit=crop' // Snake and Ladder - board games
const img32 = 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=396&h=256&fit=crop' // Movie Theme Performance - dance/performance

const EventCard = ({ _id, title, date, time, venue, img, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", Math.min(_id * 0.03, 0.3), 0.45)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="group cursor-pointer flex flex-col relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-[#FFA07A]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden w-full max-w-[396px] mx-auto" style={{ aspectRatio: '396/256' }}>
        <ImageWithLoader 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          loading="eager"
        />
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
      title: "FreeFire",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img1,
      category: "Esports",
      link: "https://unstop.com/o/Eq7sGrD?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 1,
      title: "BGMI",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img2,
      category: "Esports",
      link: "https://unstop.com/o/7jMnKdl?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 2,
      title: "Valorant",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img3,
      category: "Esports",
      link: "https://unstop.com/o/8UuZzaq?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 3,
      title: "Datathon 2.0",
      date: "28 Feb - 1 Mar 2026",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img4,
      category: "Technical Events",
      link: "https://unstop.com/o/XBskqDL?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 4,
      title: "AeroSkill and RC Challenge",
      date: "28 Feb - 1 Mar 2026",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img5,
      category: "Technical Events",
      link: "https://unstop.com/o/nO64TIi?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Competitions",
    },
    {
      _id: 5,
      title: "Planet Hunt",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img6,
      category: "Fun Games",
      link: "https://unstop.com/p/planet-hunt-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640735",
    },
    {
      _id: 6,
      title: "BitSquad CodeSprint",
      date: "1 Mar 2026",
      time: "9AM - 11AM",
      venue: "IIITDM Kurnool",
      img: img7,
      category: "Technical Events",
      link: "https://unstop.com/p/team-coding-contest-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1641185",
    },
    {
      _id: 7,
      title: "Battle Bots (Robo Wars)",
      date: "28 Feb - 1 Mar 2026",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img8,
      category: "Technical Events",
      link: "https://unstop.com/o/4XRwIQ2?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 8,
      title: "Photo Scavenger Hunt",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img9,
      category: "Photography",
      link: "https://unstop.com/o/aCXqsK7?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 9,
      title: "Pic of the Day",
      date: "3-Day Event",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img10,
      category: "Photography",
      link: "https://unstop.com/o/i3e0NPn?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 10,
      title: "People Poster",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img11,
      category: "Photography",
      link: "https://unstop.com/o/6nH2V9T?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 11,
      title: "Scribe Pen",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img12,
      category: "Literary",
      link: "https://unstop.com/o/haeIQmc?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 12,
      title: "The Great Debate",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img13,
      category: "Literary",
      link: "https://unstop.com/o/P6WBsLV?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 13,
      title: "Stranger Things Quiz",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img14,
      category: "Fun Games",
      link: "https://unstop.com/o/Bb576nG?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Quizzes",
    },
    {
      _id: 14,
      title: "Tales by Twilight",
      date: "28 Feb 2026",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img15,
      category: "Literary",
      link: "https://unstop.com/p/tales-by-twilight-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1638896",
    },
    {
      _id: 15,
      title: "Art Fusion",
      date: "28 Feb 2026",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img16,
      category: "Creative Arts",
      link: "https://unstop.com/events/art-fusion-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1638947",
    },
    {
      _id: 16,
      title: "Glass Painting",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img17,
      category: "Creative Arts",
      link: "https://unstop.com/o/qcUboig?lb=Lh5bOgEz&utm_medium=Share&utm_source=123adsai3783&utm_campaign=Events",
    },
    {
      _id: 17,
      title: "Duet Dance",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img18,
      category: "Performing arts",
      link: "https://unstop.com/p/duet-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640385",
    },
    {
      _id: 18,
      title: "Solo/Duo/Trio Dance",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img19,
      category: "Performing arts",
      link: "https://unstop.com/p/solo-duo-trio-dance-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640370",
    },
    {
      _id: 19,
      title: "Group Dance",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img20,
      category: "Performing arts",
      link: "https://unstop.com/p/group-dance-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640381",
    },
    {
      _id: 20,
      title: "Solo Music",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img21,
      category: "Performing arts",
      link: "https://unstop.com/events/solo-music-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640309",
    },
    {
      _id: 21,
      title: "Duet Music",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img22,
      category: "Performing arts",
      link: "https://unstop.com/events/duet-music-performance-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640300",
    },
    {
      _id: 22,
      title: "Music Band",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img23,
      category: "Performing arts",
      link: "https://unstop.com/events/music-band-performance-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640295",
    },
    {
      _id: 23,
      title: "Rap Battle",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img24,
      category: "Performing arts",
      link: "https://unstop.com/events/rap-battle-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1640311",
    },
    {
      _id: 24,
      title: "GDG Hackathon",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img25,
      category: "Technical Events",
      link: "https://unstop.com/p/gdg-hackathon-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1641019",
    },
    {
      _id: 25,
      title: "Institute Got Talent",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img26,
      category: "Performing arts",
      link: "https://unstop.com/o/wa4j5EZ?utm_medium=Share&utm_source=jvkousthub&utm_campaign=Events",
    },
    {
      _id: 26,
      title: "Guess N' Win",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img27,
      category: "Fun Games",
      link: "https://unstop.com/o/qYnwfZB?utm_medium=Share&utm_source=jvkousthub&utm_campaign=Events",
    },
    {
      _id: 27,
      title: "Reel Competition",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img28,
      category: "Creative Arts",
      link: "https://unstop.com/o/eWkVS10?utm_medium=Share&utm_source=jvkousthub&utm_campaign=Events",
    },
    {
      _id: 28,
      title: "CAD Design Championship",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img29,
      category: "Technical Events",
      link: "https://unstop.com/p/cad-design-championship-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1642812",
    },
    {
      _id: 29,
      title: "Campus Combat",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img30,
      category: "Fun Games",
      link: "https://unstop.com/p/campus-combat-solasta-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kurnool-1646237",
    },
    {
      _id: 30,
      title: "Snake and Ladder",
      date: "TBA",
      time: "TBA",
      venue: "IIITDM Kurnool",
      img: img31,
      category: "Fun Games",
      link: "https://unstop.com/o/b1yXYUa?lb=Lh5bOgEz&utm_medium=Share&utm_source=events&utm_campaign=123adsai3783",
    },
    {
      _id: 31,
      title: "Movie Theme Dance Performance",
      date: "28 Feb 2026",
      time: "3:01 PM - 5:02 PM",
      venue: "Solasta Stage, IIITDM Kurnool",
      img: img32,
      category: "Performing arts",
      link: "https://unstop.com/o/lqCwY1N?utm_medium=Share&utm_source=jvkousthub&utm_campaign=Events",
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
