import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Note: You'll need to set up EmailJS service in production
      // For demo purposes, we'll simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'admin@faodailarchitects.in',
      href: 'mailto:admin@faodailarchitects.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(+91)  8532942452',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: ' 462 A B.D. Kapoor Road, Arya Nagar, Sitapur',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your project and bring your vision to life 
            with our expertise in architecture and interior design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map box (left/first box) now contains Google Form button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-lg">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{info.title}</h4>
                    <p className="text-slate-300 whitespace-pre-line">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Google Form Button inside map box */}
            <div className="mt-8 bg-slate-800 rounded-2xl p-4 h-40 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-white mb-4">Send Us a Message</h3>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdYtn9Lhz3mEo_iNh40i1vkLk3kchuRVC-kavcQVO9SqbZm0A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg border-2 border-amber-400 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300"
                style={{ boxShadow: '0 4px 24px 0 rgba(255, 191, 0, 0.25)' }}
              >
                Fill Google Form
              </a>
            </div>
          </motion.div>

          {/* Google Form box (right/second box) now contains the map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center h-auto">
              
              <div className="w-full h-96 md:h-[28rem] rounded-xl overflow-hidden shadow-lg mt-2">
                <iframe
                  src="https://www.google.com/maps?q=Faodail+Architects+and+Interior+Designers,+462+A,+BD+Kapoor+Rd,+Arya+Nagar,+Sitapur,+Uttar+Pradesh+261001&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '320px', maxHeight: '500px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Faodail Architects and Interior Designers Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;