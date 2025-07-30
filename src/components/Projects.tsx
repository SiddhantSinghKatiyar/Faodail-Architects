import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

// Import local images
import proj1 from '../assets/proj1.jpg';
import proj2 from '../assets/hospitality/h4.jpg';
import proj3 from '../assets/interiors/q3.jpg';
import proj4 from '../assets/corporate/w1.png';
import proj5 from '../assets/institutional/C.jpeg';
import proj6 from '../assets/healthcare/e1.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Residential',
      location: 'Sitapur, India',
      image: proj1,
      //description: 'A sleek contemporary villa with clean lines, glass walls, and fluid indoor-outdoor spaces—seamlessly blending modern design with the natural landscape.',
      //category: 'Residential'
    },
    {
      id: 2,
      title: 'Hospitality',
      location: 'Sitapur, India',
      image: proj2,
      //description: 'A visionary corporate headquarters combining architectural sophistication with sustainable innovation and adaptable workplace design.',
      //category: 'Interior Design'
    },
    {
      id: 3,
      title: 'Interiors',
      location: 'Sitapur, India',
      image: proj3,
      //description: 'An opulent resort design showcasing panoramic views with sophisticated interior finishes.',
      //category: 'Interior Design'
    },
    {
      id: 4,
      title: 'Corporate Offices',
      location: 'Sitapur, India',
      image: proj4,
      //description: 'A modern resort blending luxurious comfort with sustainable design and immersive natural experiences.',
      //category: 'Commercial'
    },
    {
      id: 5,
      title: 'Institutional',
      location: 'Sitapur, India',
      image: proj5,
      //description: 'A thoughtfully designed sustainable farmhouse that blends rustic charm with cutting-edge eco-conscious practices. This project exemplifies a harmonious union between traditional farmhouse aesthetics and modern sustainable living principles.',
      //category: 'Commercial'
    },
    {
      id: 6,
      title: 'Healthcare',
      location: 'Sitapur, India',
      image: proj6,
      //description: 'A resort retreat designed with innovative sustainable architecture and immersive wellness-driven guest experiences.',
      //category: 'Residential'
    }
  ];

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured <span className="text-amber-500">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional projects that showcase our commitment to 
            innovative design, quality craftsmanship, and architectural excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium opacity-100 transition-opacity duration-300">
                  {project.category}
                </div>

                {/* Project Info - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 translate-y-0">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center text-sm mb-3">
                    <MapPin size={16} className="mr-1" />
                    {project.location}
                  </div>
                  <p className="text-sm text-white/90 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center text-amber-400 font-medium">
                    <span className="mr-2">View Details</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;