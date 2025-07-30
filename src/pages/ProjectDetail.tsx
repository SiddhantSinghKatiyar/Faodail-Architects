import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import local images
import proj1 from '../assets/proj1.jpg';

//residential
import v1 from '../assets/residential/1.jpg';
import v2 from '../assets/residential/2.jpg';
import v3 from '../assets/residential/3.jpg';
import v4 from '../assets/residential/4.jpg';
import v5 from '../assets/residential/5.jpg';
import v6 from '../assets/residential/6.jpg';
import v7 from '../assets/residential/7.jpg';
import v8 from '../assets/residential/8.jpg';
import v9 from '../assets/residential/9.jpg';
import v10 from '../assets/residential/10.jpg';

//hospitality
import h1 from '../assets/hospitality/h1.png';
import h2 from '../assets/hospitality/h2.jpg';
import h3 from '../assets/hospitality/h3.png';
import h4 from '../assets/hospitality/h4.jpg';
import h5 from '../assets/hospitality/h5.jpg';
import h6 from '../assets/hospitality/h6.jpg';
import h7 from '../assets/hospitality/h7.jpg';
import h8 from '../assets/hospitality/h8.png';
import h9 from '../assets/hospitality/h9.png';
import h10 from '../assets/hospitality/h10.png';
import h11 from '../assets/hospitality/h11.png';
import h12 from '../assets/hospitality/h12.jpg';
import h13 from '../assets/hospitality/h13.png';
import h14 from '../assets/hospitality/h14.png';

//interiors
import q1 from '../assets/interiors/q1.jpg';
import q2 from '../assets/interiors/q2.jpg';
import q3 from '../assets/interiors/q3.jpg';
import q4 from '../assets/interiors/q4.jpg';
import q5 from '../assets/interiors/q5.jpg';
import q6 from '../assets/interiors/q6.jpg';
import q7 from '../assets/interiors/q7.jpg';
import q8 from '../assets/interiors/q8.jpg';
import q9 from '../assets/interiors/q9.jpg';
import q10 from '../assets/interiors/q10.jpg';
import q11 from '../assets/interiors/q11.jpg';

//corporate
import w1 from '../assets/corporate/w1.png';
import w2 from '../assets/corporate/w2.png';
import w3 from '../assets/corporate/w3.png';
import w4 from '../assets/corporate/w4.png';
import w5 from '../assets/corporate/w5.png';
import w6 from '../assets/corporate/w6.jpg';
import w7 from '../assets/corporate/w6.png';
import w8 from '../assets/corporate/w7.jpg';
import w9 from '../assets/corporate/w8.png';
import w10 from '../assets/corporate/w9.png';
import w11 from '../assets/corporate/w10.jpg';

//institutional
import as1 from '../assets/institutional/A.jpg';
import as2 from '../assets/institutional/B.jpg';
import as3 from '../assets/institutional/C.jpeg';
import as4 from '../assets/institutional/D.jpg';
import as5 from '../assets/institutional/E.jpg';

// healthcare
import e1 from '../assets/healthcare/e1.jpg';




const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projectsData = {
    '1': {
      id: 1,
      title: 'Residence',
      
      //client: 'Private Residence',
      
      category: 'Residential',
      
            description: 'A stunning contemporary villa featuring clean lines, expansive glass walls, and seamless indoor-outdoor living spaces. This project represents the perfect harmony between modern architecture and natural landscape integration.',
      fullDescription: `This exceptional modern villa stands as a testament to contemporary architectural excellence. Designed for a discerning family seeking a harmonious blend of luxury and sustainability, the residence features floor-to-ceiling windows that frame breathtaking views of the surrounding landscape.

The design philosophy centers around creating seamless transitions between indoor and outdoor spaces, with expansive sliding glass doors that open to reveal meticulously landscaped gardens and a stunning infinity pool. The interior spaces flow effortlessly from one to another, creating an open-plan living experience that feels both grand and intimate.

Sustainable features include solar panels, rainwater harvesting systems, and energy-efficient HVAC systems. The material palette consists of natural stone, warm wood accents, and sleek metal details that create a sophisticated yet welcoming atmosphere.`,
      images: [
        proj1,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6,
        v7,
        v8,
        v9,
        v10
      ],
      features: [
//         'Open-plan living spaces',
//         'Floor-to-ceiling windows',
//         'Infinity pool and spa',
//         'Smart home automation',
//         'Solar energy system',
//         'Landscaped gardens',
//         'Home theater',
//         'Wine cellar'
      ]
    },
    '2': {
      id: 2,
//       title: 'Corporate Headquarters',
//       location: '-',
//       year: '-',
//       client: 'Tech Corporation',
//       area: '- sq ft',
//       category: 'Commercial',
//       status: '-',
      
      description: 'A visionary corporate headquarters combining architectural sophistication with sustainable innovation and adaptable workplace design.',
      fullDescription: `This state-of-the-art corporate headquarters exemplifies forward-thinking architecture, seamlessly integrating sustainability, technology, and employee-centric design. Crafted to reflect the company’s ethos of innovation and responsibility, the building creates an inspiring environment for collaboration, productivity, and well-being.

The workplace layout emphasizes flexibility, with modular workstations, open-plan collaboration zones, focus rooms, and wellness areas strategically placed to accommodate evolving business operations and diverse work styles.`,
      images: [
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h8,
        h9,
        h10,
        h11,
        h12,
        h13,
        h14,
      ],
      features: [
//         'LEED Platinum certification',
//         'Flexible workspace design',
//         'Advanced HVAC systems',
//         'Rooftop garden',
//         'Electric vehicle charging',
//         'Fitness center',
//         'Conference facilities',
//         'Cafeteria and dining'
      ]
    },
    '3': {
      id: 3,
//       title: 'Luxury Lawn',
//       location: '-',
//       year: '-',
//       client: 'Private Client',
//       area: '- sq ft',
//       category: 'Interior Design',
//       status: '-',
    
      description: 'A luxury resort designed with sustainable architecture, immersive guest experiences, and seamless integration with the natural surroundings.',
      fullDescription: `This newly built resort sets a benchmark for eco-luxury hospitality by combining modern architectural elegance with environmentally conscious design. Nestled within a pristine natural landscape, the resort offers guests an elevated experience rooted in comfort, sustainability, and cultural connection.

The layout emphasizes openness and flow, with villas and common areas strategically placed to preserve native vegetation and enhance privacy. Each space—from tranquil suites to vibrant communal lounges—is crafted to support relaxation, rejuvenation, and social engagement.`,
      images: [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11
      ],
      features: [
//         'Panoramic ocean views',
//         'Custom millwork',
//         'Designer furniture',
//         'Wraparound terrace',
//         'Spa-like bathrooms',
//         'Smart lighting systems',
//         'Premium appliances',
//         'Private elevator access'
       ]
    },
    '4': {
      id: 4,
//       title: 'Luxury Resort',
//       location: 'Sitapur',
//       year: '-',
//       client: 'Private Client',
//       area: '- sq ft',
//       category: 'Resort',
//       status: 'Running',
      
      description: 'A modern resort blending luxurious comfort with sustainable design and immersive natural experiences.',
      fullDescription: `This contemporary resort reimagines the luxury getaway with its cutting-edge architectural design and commitment to sustainability. Designed to harmonize with its surroundings, the resort offers a serene escape while setting new standards in eco-conscious hospitality.

The resort features a flexible layout with private villas, open lounges, wellness centers, and recreational zones thoughtfully distributed across the site to cater to various guest experiences and activities. Each space is crafted to enhance relaxation, privacy, and connection to nature.`,
      images: [
        w1,
        w2,
        w3,
        w4,
        w5,
        w6,
        w7,
        w8,
        w9,
        w10,
        w11
      ],
      features: [
//         'Original hardwood floors',
//         'Restored moldings',
//         'Period fixtures',
//         'Modern HVAC system',
//         'Updated electrical',
//         'Preserved facade',
//         'Historic windows',
//         'Original fireplaces'
      ]
    },
    '5': {
      id: 5,
//       title: 'Sustainable Office Complex',
//       location: 'Seattle, WA',
//       year: '2023',
//       client: 'Green Tech Company',
//       area: '75,000 sq ft',
//       category: 'Commercial',
//       status: 'Completed',
      
      description: 'A thoughtfully designed sustainable farmhouse that blends rustic charm with cutting-edge eco-conscious practices. This project exemplifies a harmonious union between traditional farmhouse aesthetics and modern sustainable living principles.',
      fullDescription: `This remarkable farmhouse is a celebration of sustainable architecture, envisioned for clients who value both ecological responsibility and timeless rural elegance. Nestled amidst lush greenery, the home features a warm, inviting exterior crafted from reclaimed wood, natural stone, and lime plaster—materials chosen for their durability and low environmental impact.

The spatial layout emphasizes functionality and comfort, with generous verandas, shaded outdoor seating areas, and breezy cross-ventilated interiors that reduce reliance on mechanical cooling. Large windows and skylights flood the interiors with natural light, enhancing the connection with the surrounding farmland.

Sustainability is at the heart of this design: the farmhouse integrates rooftop solar panels, a greywater recycling system, rainwater harvesting, and an organic kitchen garden. The interiors combine rustic textures with contemporary finishes, creating a cozy, grounded environment that fosters a conscious and connected lifestyle.`,
      images: [
        as1,
        as2,
        as3,
        as4,
        as5
      ],
      features: [
//         'Lush, manicured landscaping',
//         'Automated irrigation system',
//         'Ambient garden lighting',
//         'Premium natural stone pathways',
//         'Water features and reflecting pools',
//         'Dedicated event space with seating',
//       'Private cabanas and lounge areas',
//       'Integrated outdoor sound system',

      ]
    },
    '6': {
      id: 6,
       title: 'Resort',
//       location: 'Sitapur',
//       year: '-',
//       client: 'Private Client',
//       area: '- sq ft',
//       category: 'Residential',
//       status: 'Running',
      
      description: 'A resort retreat designed with innovative sustainable architecture and immersive wellness-driven guest experiences.',
      fullDescription: `This exceptional resort retreat redefines leisure and relaxation through its thoughtfully curated design and environmentally conscious features. The property stands as a symbol of modern hospitality, prioritizing guest wellbeing, ecological harmony, and timeless comfort.

The retreat’s layout embraces flexibility and connection to nature, featuring a blend of private villas, open-air lounges, spa zones, and meditative garden spaces. Each area is intentionally positioned to support a range of guest experiences—from social interaction to personal rejuvenation.`,
      images: [
        e1,
      ],
      features: [
//         'Local stone and timber',
//         'Mountain views',
//         'Energy-efficient design',
//         'Stone fireplaces',
//         'Covered terraces',
//         'Hot tub and spa',
//         'Ski storage',
//         'Wine cellar'
      ]
    }
  };

  useEffect(() => {
    if (id && projectsData[id as keyof typeof projectsData]) {
      setProject(projectsData[id as keyof typeof projectsData]);
      document.title = `${projectsData[id as keyof typeof projectsData].title} - Faodail Architects`;
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-slate-700 hover:text-amber-500 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to HomePage
            </button>
            <span className="font-bold text-xl text-slate-800">Faodail</span>
          </div>
        </div>
      </nav>

      {/* Hero Image Carousel */}
      <section className="pt-16 h-96 md:h-[500px] relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {project.images.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
          <ChevronRight size={24} />
        </button>

        {/* Project Title & Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{project.title}</h1>
              <div className="flex flex-wrap gap-3 mb-2">
                {project.location && project.location !== '-' && (
                  <span className="flex items-center bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    <MapPin size={16} className="mr-1" />{project.location}
                  </span>
                )}
                {project.year && project.year !== '-' && (
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    <span className="font-semibold">Year:</span> {project.year}
                  </span>
                )}
                {project.client && project.client !== '-' && (
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    <span className="font-semibold">Client:</span> {project.client}
                  </span>
                )}
                {project.area && project.area !== '-' && (
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    <span className="font-semibold">Area:</span> {project.area}
                  </span>
                )}
                {project.category && (
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                )}
                {project.status && project.status !== '-' && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Custom summary based on project title */}
                <div className="mb-8">
                  {(() => {
                    switch (project.title) {
                      case 'Residential':
                      case 'Residence':
                        return (
                          <>
                            <p className="text-lg text-slate-700 mb-2">A modern residential project designed for comfort, elegance, and seamless integration with its natural surroundings.</p>
                            <p className="text-lg text-slate-700 mb-2">Spacious interiors, abundant natural light, and thoughtful landscaping define this home.</p>
                          </>
                        );
                      case 'Hospitality':
                        return (
                          <>
                            <p className="text-lg text-slate-700 mb-2">A hospitality space that blends luxury and functionality, offering guests a memorable and relaxing experience.</p>
                            <p className="text-lg text-slate-700 mb-2">Contemporary design and premium amenities set this project apart.</p>
                          </>
                        );
                      case 'Interiors':
                        return (
                          <>
                            <p className="text-lg text-slate-700 mb-2">An interior design showcase featuring bespoke finishes, modern aesthetics, and a focus on comfort.</p>
                            <p className="text-lg text-slate-700 mb-2">Each space is tailored to reflect the client’s personality and lifestyle.</p>
                          </>
                        );
                      case 'Corporate Offices':
                        return (
                          <>
                            <p className="text-lg text-slate-700 mb-2">A state-of-the-art corporate office designed for productivity and collaboration.</p>
                            <p className="text-lg text-slate-700 mb-2">Flexible workspaces and innovative features support a dynamic business environment.</p>
                          </>
                        );
                      case 'Institutional':
                        return (
                          <>
                            <p className="text-lg text-slate-700 mb-2">An institutional project focused on sustainability, community, and long-term value.</p>
                            <p className="text-lg text-slate-700 mb-2">Robust design and efficient layouts ensure lasting impact.</p>
                          </>
                        );
                      case 'Healthcare':
                        return (
                          <>
                            <p className="text-lg text-slate-700 mb-2">A healthcare facility prioritizing patient well-being, safety, and modern medical standards.</p>
                            <p className="text-lg text-slate-700 mb-2">Thoughtful planning and advanced infrastructure enable quality care.</p>
                          </>
                        );
                      default:
                        return (
                          <p className="text-lg text-slate-700 mb-2">A signature project by Faodail Architects, blending innovation and excellence in every detail.</p>
                        );
                    }
                  })()}
                </div>
              </motion.div>
            </div>

            {/* Sidebar removed for a cleaner, focused layout */}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Project Gallery</h2>
<p className="text-center text-slate-500 mb-8 text-base md:text-lg">Tap on the image to view it in full screen</p>
            <div className="flex flex-wrap justify-center gap-6">
              {project.images.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  onClick={() => {
                    setLightboxOpen(true);
                    setLightboxIndex(index);
                  }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
            {lightboxOpen && (
              <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={project.images.map((img: string, idx: number) => ({
                  src: img,
                  title: project.title,
                  description: project.description
                }))}
                plugins={[Captions, Thumbnails]}
                on={{
                  view: ({ index }) => setLightboxIndex(index)
                }}
              />
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;




