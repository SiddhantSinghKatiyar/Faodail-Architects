import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animated Counter component
  interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
  }
  const Counter: React.FC<CounterProps> = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const step = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      step();
      // eslint-disable-next-line
    }, [end, duration]);
    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-amber-500">Faodail</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Established in April 2022 by Ar. Anushtha Srivastava, Faodail views architecture as an artistic expression. The firm offers holistic design and management solutions encompassing architecture, interior, landscaping and turn key solutions. Notably, in the last three years, it has secured significant projects in the residential, commercial, hospitality sectors. Currently, it is engaged in several prominent public and private building projects.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our comprehensive range of service includes architecture, interior design, 3D views/ elevations design, landscape, structure, project management, turnkey projects, permitting and approvals.

            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">
                  <Counter end={250} suffix="+" />
                </div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">
                  <Counter end={3} suffix="+" />
                </div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">
                  <Counter end={200} suffix="+" />
                </div>
                <div className="text-slate-600">Satisfied Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Faodail Design Studio"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-slate-800">
                <div className="text-sm font-medium text-amber-500 mb-1">Our Vision</div>
                <div className="text-lg font-semibold">Creating timeless spaces</div>
                <div className="text-sm text-slate-600">that inspire generations</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;