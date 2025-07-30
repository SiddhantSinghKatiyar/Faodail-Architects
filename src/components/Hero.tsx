import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import local images
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';
import bg5 from '../assets/bg5.png';
import bg6 from '../assets/bg6.jpg';
import bg7 from '../assets/bg7.jpg';


const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroImages = [
    {
      url: bg1,
      alt: 'Modern Architecture'
    },
    {
      url: bg2,
      alt: 'Interior Design'
    },
    {
      url: bg3,
      alt: 'Contemporary Living'
    },
    {
      url: bg4,
      alt: 'Contemporary Living'
    },
    {
      url: bg5,
      alt: 'Contemporary Living'
    },
    {
      url: bg6,
      alt: 'Contemporary Living'
    },
    {
      url: bg7,
      alt: 'Contemporary Living'
    }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return <div className="h-screen bg-slate-900" />;
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={false}
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {/* Golden tint overlay */}
              <div className="absolute inset-0 bg-amber-400/30 pointer-events-none" />
              {/* Black overlay for contrast */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
        {/* Side arrows removed */}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Faodail Architects
            <br />
            <span className="text-amber-400">& Interior Designers</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Shaping Space, Inspiring Lives
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Discover Our Work
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-amber-400 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;