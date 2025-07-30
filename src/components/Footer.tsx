import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import whatsappLogo from '../assets/wplogo2.png';
import logo2 from '../assets/logo2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
{ icon: Facebook, href: 'https://www.facebook.com/faodailarchitectsitapur', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/faodailarch', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/faodail_architects/?hl=en', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/faodailarchitects', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating WhatsApp Help Button - themed to match website */}
      <a
        href="https://wa.me/918532942452"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center w-16 h-16 transition-all border-4 border-white ring-4 ring-green-300 animate-bounce"
        aria-label="Chat on WhatsApp"
        style={{ boxShadow: '0 8px 32px rgba(37, 211, 102, 0.35)' }}
      >
        {/* WhatsApp Logo Image */}
        <img src={whatsappLogo} alt="WhatsApp" className="w-10 h-10 object-contain" />
      </a>
      <footer className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-amber-500 mb-4">
                  Faodail Architects & Interior Designers
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Creating exceptional spaces through innovative architecture and sophisticated interior design. 
                  Our commitment to excellence and sustainable practices makes us the preferred choice for 
                  discerning clients worldwide.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-300">
                    <Mail size={18} className="mr-3 text-amber-500" />
                    <span>admin@faodailarchitects.in</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Phone size={18} className="mr-3 text-amber-500" />
                    <span>(+91)  8532942452</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-slate-300 hover:text-amber-500 transition-colors duration-300"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social Media */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-white transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
                <div className="mt-6">
                  <h5 className="text-sm font-medium text-slate-400 mb-2">Office Hours</h5>
                  <p className="text-sm text-slate-300">Monday - Saturday: 10:30 AM - 7:00 PM</p>
                  <p className="text-sm text-slate-300">Sunday: Closed</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-slate-400 text-sm">
              © {currentYear} Faodail Architects & Interior Designers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">
                Terms of Service
              </a>
              
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;