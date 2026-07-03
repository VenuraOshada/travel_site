import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

interface ContactInfoItem {
  icon: React.ReactElement;
  title: string;
  desc: React.ReactNode;
}

const Contact: React.FC = () => {
  const contactItems: ContactInfoItem[] = [
    { icon: <MapPin />, title: "Our Office", desc: <>123 Silk Road Ave, Colombo 03<br />Sri Lanka</> },
    { icon: <Phone />, title: "Phone", desc: "+94 77 123 4567" },
    { icon: <Mail />, title: "Email", desc: "hello@nordicsafari.com" },
  ];

  return (
    <div className="min-h-screen bg-light pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title Reveal */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Ready to plan your Sri Lankan adventure? Reach out to our experts and let's make it happen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Contact Form Container (Slides in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-heading font-bold text-dark mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.015, borderColor: '#153e35', boxShadow: '0 4px 20px rgba(21, 62, 53, 0.08)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    type="text"
                    className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary outline-none transition-colors"
                    placeholder="Jan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.015, borderColor: '#153e35', boxShadow: '0 4px 20px rgba(21, 62, 53, 0.08)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    type="text"
                    className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary outline-none transition-colors"
                    placeholder="Jansen"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: '#153e35', boxShadow: '0 4px 20px rgba(21, 62, 53, 0.08)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  type="email"
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary outline-none transition-colors"
                  placeholder="jan@example.nl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number (Optional)</label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: '#153e35', boxShadow: '0 4px 20px rgba(21, 62, 53, 0.08)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  type="tel"
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary outline-none transition-colors"
                  placeholder="+31 6 12345678"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: '#153e35', boxShadow: '0 4px 20px rgba(21, 62, 53, 0.08)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary outline-none transition-colors"
                  rows={5}
                  placeholder="I am interested in a 10-day tour for 2 people..."
                ></motion.textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full py-4 bg-dark hover:bg-primary text-white rounded-xl font-bold text-lg transition-colors flex justify-center items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map (Slides in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.3 }}
            className="space-y-10 flex flex-col"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 transition-colors hover:bg-primary hover:text-white duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Link with Concentric Radar Pulse Rings */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-8 rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                {/* Custom glowing pulse wrapper */}
                <div className="relative w-12 h-12 shrink-0">
                  <motion.div
                    animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
                    className="absolute inset-0 bg-[#25D366] rounded-full z-0"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut", delay: 0.7 }}
                    className="absolute inset-0 bg-[#25D366] rounded-full z-0"
                  />
                  <div className="w-full h-full bg-[#25D366] rounded-full flex items-center justify-center text-white relative z-10">
                    <MessageCircle size={22} />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark">Chat on WhatsApp</h3>
              </div>
              <p className="text-gray-600 mb-6 relative z-10">Get an immediate response from our travel experts. We're online and ready to help.</p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebd5c] text-white font-bold rounded-full transition-colors shadow-lg shadow-[#25D366]/30 relative z-10"
              >
                Start Chat
              </motion.a>
            </div>

            {/* Map Placeholder with slow parallax zoom hover */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-100 flex-grow cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500 bg-gray-100 hover:bg-gray-200/80 transition-colors duration-300">
                <MapPin size={40} className="mb-2 opacity-50 text-primary animate-bounce" />
                <span className="font-semibold text-dark">Google Maps Embedded Here</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
