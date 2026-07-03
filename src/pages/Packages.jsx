import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Star, Check, Calendar, Users, Camera, Waves, Tent } from 'lucide-react';

const Packages = () => {
  const [activeTab, setActiveTab] = useState('curated');

  const packages = [
    {
      id: 1,
      title: '7 Days Sri Lanka Explorer',
      duration: '7 Days / 6 Nights',
      locations: 'Colombo - Sigiriya - Kandy - Nuwara Eliya - Colombo',
      highlights: ['Sigiriya Rock Fortress', 'Temple of the Tooth', 'Tea Plantations'],
      image: 'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '€899'
    },
    {
      id: 2,
      title: '10 Days Beaches & Mountains',
      duration: '10 Days / 9 Nights',
      locations: 'Negombo - Kandy - Ella - Yala - Mirissa - Galle',
      highlights: ['Ella Train Ride', 'Yala Safari', 'Mirissa Whale Watching'],
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=1200',
      price: '€1,299'
    },
    {
      id: 3,
      title: 'Luxury Honeymoon Experience',
      duration: '14 Days / 13 Nights',
      locations: 'Bentota - Galle - Yala - Nuwara Eliya - Kandy - Maldives (Opt)',
      highlights: ['Private Beach Villas', 'Romantic Dinners', 'Couples Spa'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
      price: '€2,499'
    },
    {
      id: 4,
      title: 'Wildlife Safari Adventure',
      duration: '8 Days / 7 Nights',
      locations: 'Wilpattu - Minneriya - Gal Oya - Yala',
      highlights: ['Leopard Tracking', 'Elephant Gatherings', 'Luxury Glamping'],
      image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=1200',
      price: '€1,599'
    }
  ];

  const [customForm, setCustomForm] = useState({
    days: 7,
    travelers: 2,
    hotelCategory: 'Standard',
    transport: 'Private Car + Driver',
    destinations: [],
  });

  const toggleDestination = (dest) => {
    setCustomForm(prev => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter(d => d !== dest)
        : [...prev.destinations, dest]
    }));
  };

  const allDestinations = ['Cultural Triangle', 'Kandy & Hill Country', 'East Coast Beaches', 'South Coast Beaches', 'Wildlife Parks', 'Northern Region'];

  // Framer Motion staggered grid definitions
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-light pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16 pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our carefully curated tours or build your own custom Sri Lankan adventure.
          </motion.p>
        </div>

        {/* Tabs with layoutId spring morph slider */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-md flex items-center relative">
            <button
              onClick={() => setActiveTab('curated')}
              className={`relative z-10 px-8 py-3 rounded-full font-medium text-lg transition-colors duration-350 cursor-pointer ${activeTab === 'curated' ? 'text-white' : 'text-gray-500 hover:text-dark'
                }`}
            >
              Curated Tours
              {activeTab === 'curated' && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-primary rounded-full shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`relative z-10 px-8 py-3 rounded-full font-medium text-lg transition-colors duration-350 cursor-pointer ${activeTab === 'custom' ? 'text-white' : 'text-gray-500 hover:text-dark'
                }`}
            >
              Build Your Own
              {activeTab === 'custom' && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-primary rounded-full shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'curated' && (
            <motion.div
              key="curated"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  variants={cardVariants}
                  data-cursor="explore"
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100 flex flex-col"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-primary shadow-lg flex items-center gap-2 z-20">
                      <Clock size={16} /> {pkg.duration}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-heading font-bold text-dark group-hover:text-primary transition-colors duration-300">{pkg.title}</h3>
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    </div>

                    <div className="flex items-start gap-2 text-gray-600 mb-6">
                      <MapPin size={20} className="text-accent shrink-0 mt-1" />
                      <p>{pkg.locations}</p>
                    </div>

                    <div className="mb-8 flex-grow">
                      <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                        <Star size={18} className="text-secondary" /> Highlights
                      </h4>
                      <ul className="space-y-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <Check size={16} className="text-primary" /> {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-dark hover:bg-accent text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-xl cursor-pointer"
                    >
                      View Itinerary & Book
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'custom' && (
            <motion.div
              key="custom"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="max-w-5xl mx-auto"
              id="custom"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                {/* Form Section */}
                <div className="p-8 lg:p-12 lg:w-2/3">
                  <h2 className="text-3xl font-heading font-bold text-dark mb-8">Build Your Dream Tour</h2>

                  <div className="space-y-8">
                    {/* Basics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (Days)</label>
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setCustomForm(p => ({ ...p, days: Math.max(1, p.days - 1) }))}
                            className="px-5 py-3 hover:bg-gray-200 transition-colors font-bold cursor-pointer"
                          >
                            -
                          </motion.button>
                          <input type="number" value={customForm.days} readOnly className="w-full text-center bg-transparent font-medium" />
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setCustomForm(p => ({ ...p, days: p.days + 1 }))}
                            className="px-5 py-3 hover:bg-gray-200 transition-colors font-bold cursor-pointer"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Travelers</label>
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setCustomForm(p => ({ ...p, travelers: Math.max(1, p.travelers - 1) }))}
                            className="px-5 py-3 hover:bg-gray-200 transition-colors font-bold cursor-pointer"
                          >
                            -
                          </motion.button>
                          <input type="number" value={customForm.travelers} readOnly className="w-full text-center bg-transparent font-medium" />
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setCustomForm(p => ({ ...p, travelers: p.travelers + 1 }))}
                            className="px-5 py-3 hover:bg-gray-200 transition-colors font-bold cursor-pointer"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Regions */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Regions to Visit</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {allDestinations.map((dest) => (
                          <motion.button
                            key={dest}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleDestination(dest)}
                            className={`p-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${customForm.destinations.includes(dest)
                                ? 'bg-primary-light/10 border-primary text-primary shadow-sm'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                              }`}
                          >
                            {dest}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Accommodation */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Accommodation Style</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Budget', 'Standard', 'Luxury'].map((cat) => (
                          <motion.button
                            key={cat}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setCustomForm({ ...customForm, hotelCategory: cat })}
                            className={`py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${customForm.hotelCategory === cat
                                ? 'bg-primary-light/10 border-primary text-primary shadow-sm'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                              }`}
                          >
                            {cat}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests / Interests</label>
                      <textarea
                        className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        rows="4"
                        placeholder="Tell us about any specific activities (e.g., surfing, cooking classes) or dietary requirements..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Summary Section */}
                <div className="bg-dark text-white p-8 lg:p-12 lg:w-1/3 flex flex-col">
                  <h3 className="text-2xl font-heading font-bold mb-8 text-secondary">Your Trip Summary</h3>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent"><Clock size={20} /></div>
                      <div>
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="font-semibold">{customForm.days} Days</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent"><Users size={20} /></div>
                      <div>
                        <p className="text-sm text-gray-400">Travelers</p>
                        <p className="font-semibold">{customForm.travelers} Persons</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent"><Star size={20} /></div>
                      <div>
                        <p className="text-sm text-gray-400">Style</p>
                        <p className="font-semibold">{customForm.hotelCategory}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent shrink-0"><MapPin size={20} /></div>
                      <div>
                        <p className="text-sm text-gray-400">Regions</p>
                        <p className="font-semibold text-sm leading-relaxed">
                          {customForm.destinations.length > 0 ? customForm.destinations.join(', ') : 'Not selected yet'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(21,62,53,0.5)] hover:shadow-[0_0_30px_rgba(21,62,53,0.7)] cursor-pointer"
                    >
                      Request Custom Quote
                    </motion.button>
                    <p className="text-center text-sm text-gray-400 mt-4">No commitment required. We'll reply within 24 hours.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Packages;
