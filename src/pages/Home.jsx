import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Map, Compass, Shield, Heart, Coffee, UserCheck, Star, ArrowRight, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// 3D Card Tilt Component for premium hover feel
const TiltCard = ({ children, className, cursorType = "explore" }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to card center (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Max 10 degrees tilt
    const rX = -(mouseY / height) * 12;
    const rY = (mouseX / width) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorType}
      className={`${className} perspective-1000`}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: isHovered ? 1.02 : 1,
        z: isHovered ? 20 : 0
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

// Elegant Curtain Image Reveal on scroll
const ImageReveal = ({ src, alt, className }) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <motion.div
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: 1.25 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className={className}
        />
      </motion.div>
    </div>
  );
};

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const features = [
    { icon: <Map className="w-8 h-8 text-accent" />, title: 'Personalized Tours', desc: 'Custom itineraries tailored to your unique preferences.' },
    { icon: <Heart className="w-8 h-8 text-accent" />, title: 'Dutch-Friendly Service', desc: 'Seamless communication and expectations met.' },
    { icon: <UserCheck className="w-8 h-8 text-accent" />, title: 'Local Expert Guides', desc: 'Discover hidden gems with native Sri Lankan experts.' },
    { icon: <Shield className="w-8 h-8 text-accent" />, title: 'Safe & Comfortable Travel', desc: 'Premium vehicles and verified accommodations.' },
    { icon: <Coffee className="w-8 h-8 text-accent" />, title: 'Luxury & Budget Options', desc: 'Experiences crafted for various budgets without compromising quality.' },
    { icon: <Compass className="w-8 h-8 text-accent" />, title: 'Cultural Experiences', desc: 'Authentic immersion into Sri Lanka\'s rich heritage.' },
  ];

  const destinations = [
    { name: 'Sigiriya', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800', desc: 'Ancient rock fortress and palace ruin.' },
    { name: 'Ella', image: 'https://images.unsplash.com/photo-1576671414121-3183aa178e22?q=80&w=800', desc: 'Lush green tea plantations and scenic views.' },
    { name: 'Mirissa', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800', desc: 'Pristine beaches and whale watching.' },
    { name: 'Kandy', image: 'https://images.unsplash.com/photo-1620608670698-35cb676e100e?q=80&w=800', desc: 'Cultural capital and Temple of the Tooth.' },
    { name: 'Nuwara Eliya', image: 'https://images.unsplash.com/photo-1625736300986-13a8ecf2b960?q=80&w=800', desc: 'Little England with cool climate.' },
    { name: 'Yala Safari', image: 'https://images.unsplash.com/photo-1544605929-3738fb87e220?q=80&w=800', desc: 'Wildlife adventure with leopards and elephants.' },
  ];

  const packages = [
    { title: '7-Day Cultural Escape', days: '7 Days', price: '€899', highlight: 'Temples, Heritage & History', img: 'https://images.unsplash.com/photo-1588611849174-8ba6438dc20f?q=80&w=800' },
    { title: '10-Day Tropical Adventure', days: '10 Days', price: '€1,299', highlight: 'Beaches, Safari & Mountains', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800' },
    { title: 'Luxury Honeymoon Tour', days: '14 Days', price: '€2,499', highlight: 'Private Villas, Romantic Dinners', img: 'https://images.unsplash.com/photo-1574686008677-22d733db9b3d?q=80&w=800' },
  ];

  // Headline staggered text configuration
  const titleWords1 = "Discover Sri Lanka With".split(" ");
  const titleWords2 = "Nordic Safari On Silk Road".split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-dark/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2000&auto=format&fit=crop" 
            alt="Sri Lanka landscape" 
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            <div className="overflow-hidden block py-1">
              {titleWords1.map((w, idx) => (
                <span key={idx} className="inline-block text-mask mr-[0.25em]">
                  <motion.span variants={wordVariants} className="inline-block">{w}</motion.span>
                </span>
              ))}
            </div>
            <div className="overflow-hidden block py-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
                {titleWords2.map((w, idx) => (
                  <span key={idx} className="inline-block text-mask mr-[0.25em]">
                    <motion.span variants={wordVariants} className="inline-block">{w}</motion.span>
                  </span>
                ))}
              </span>
            </div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-100 mb-10 font-light max-w-3xl drop-shadow-md"
          >
            Luxury journeys, authentic experiences, and unforgettable adventures crafted for travelers from the Netherlands.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/packages" className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-full font-medium text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 backdrop-blur-sm border border-primary/50">
              Explore Packages
            </Link>
            <Link to="/packages#custom" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-md border border-white/30">
              Customize Your Tour
            </Link>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <span className="text-white/80 text-sm mb-2 font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white opacity-80" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl font-heading font-bold text-dark mb-4"
            >
              Why Choose Us
            </motion.h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-dark mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-light relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-heading font-bold text-dark mb-4"
              >
                Must-Visit Destinations
              </motion.h2>
              <div className="w-24 h-1 bg-accent rounded-full"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <Link to="/about" className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-2">
                Discover More <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <TiltCard
                key={i}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <ImageReveal src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity z-10"></div>
                <div style={{ transform: "translateZ(30px)" }} className="absolute bottom-0 left-0 p-6 w-full transform z-20">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {dest.desc}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-dark mb-4"
            >
              Popular Packages
            </motion.h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <TiltCard
                key={i}
                className="bg-light rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageReveal src={pkg.img} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-lg flex items-center gap-1 z-20">
                    <Clock size={16} /> {pkg.days}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between" style={{ transform: "translateZ(10px)" }}>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-dark mb-2 group-hover:text-primary transition-colors">{pkg.title}</h3>
                    <p className="text-accent font-medium mb-4">{pkg.highlight}</p>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <span className="block text-sm text-gray-500">Starting from</span>
                      <span className="text-xl font-bold text-dark">{pkg.price}</span>
                    </div>
                    <Link to="/packages" className="px-6 py-2 bg-dark hover:bg-accent text-white rounded-full font-medium transition-colors duration-300">
                      View Details
                    </Link>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/packages" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors text-lg">
              View All Packages <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark relative z-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-white mb-4"
            >
              What Our Travelers Say
            </motion.h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">Hear from Dutch travelers who experienced the magic of Sri Lanka with us.</p>
          </div>

          <div className="max-w-3xl mx-auto" data-cursor="drag">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full"
            >
              {[1, 2, 3].map((_, i) => (
                <SwiperSlide key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl text-white shadow-2xl">
                  <div className="flex gap-1 mb-6 text-secondary">
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                  </div>
                  <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
                    "An absolutely unforgettable journey! The team at Nordic Safari understood exactly what we wanted as Dutch travelers. The hotels were premium, and our guide was exceptional."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="User" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Jan & Sophie</h4>
                      <span className="text-sm text-gray-400">Amsterdam, NL</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
