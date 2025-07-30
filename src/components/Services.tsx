import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Palette, Map, Hammer, Box, Calculator, Compass, Layers, ClipboardList, Trees, Key } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Building,
      title: 'Architecture',
      description: 'Innovative architectural solutions for residential and commercial projects'
    },
    {
      icon: Palette,
      title: 'Interior Designing',
      description: 'Sophisticated interior concepts that blend functionality with aesthetics'
    },
    {
      icon: Map,
      title: 'Master Planning',
      description: 'Comprehensive planning and development strategies for large-scale projects'
    },
    {
      icon: Hammer,
      title: 'Design and Buildup',
      description: 'Complete design-build services from concept to construction completion'
    },
   
    {
      icon: Calculator,
      title: 'Cost Estimates',
      description: 'Accurate project cost analysis and budget planning services'
    },
    {
      icon: Compass,
      title: 'Vastu Consultation',
      description: 'Traditional Vastu Shastra principles integrated with modern design'
    },
    {
      icon: Layers,
      title: 'Structure Design',
      description: 'Expert structural engineering and design solutions'
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description: 'Comprehensive project oversight from concept to completion'
    }
    
    
  ];

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
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From initial concept to final execution, we offer comprehensive design services 
            that transform your vision into reality with precision and creativity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-amber-100 rounded-xl mb-4 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-amber-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;