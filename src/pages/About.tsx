import { useRef, FC, ReactElement, cloneElement } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Leaf, Users, Map, Heart, Plane, ShieldCheck, Compass, Anchor } from 'lucide-react';

interface TimelineStep {
  icon: ReactElement;
  title: string;
  desc: string;
  location: string;
}

interface CoreValue {
  icon: ReactElement;
  title: string;
  desc: string;
}

const About: FC = () => {
  const timelineRef = useRef<HTMLElement>(null);

  // Track scroll progress of the Silk Road timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"]
  });

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const timelineSteps: TimelineStep[] = [
    {
      icon: <Plane size={22} />,
      title: "From the Netherlands",
      desc: "Your journey begins in the Netherlands. We design customized luxury itineraries, coordinating every detail in Dutch and English for your ultimate peace of mind.",
      location: "Amsterdam / Rotterdam"
    },
    {
      icon: <Anchor size={22} />,
      title: "Connecting along the Silk Road",
      desc: "Inspired by ancient trade routes, our curated paths connect Europe and Asia, bringing historical depth and authentic cultural exchanges to your adventure.",
      location: "Maritime Silk Road Route"
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Arrive Under Local Care",
      desc: "Meet our dedicated local guide at Colombo. Travel in safe, private luxury vehicles with full-time assistance, staying only in verified premium hotels.",
      location: "Colombo Office"
    },
    {
      icon: <Compass size={22} />,
      title: "Unrivaled Sri Lankan Exploration",
      desc: "Explore Sigiriya, hike tea hills in Ella, track leopards in Yala, and lounge on beaches in Mirissa. Your dream travel becomes reality.",
      location: "Sigiriya - Kandy - South Coast"
    }
  ];

  const coreValues: CoreValue[] = [
    { icon: <Leaf />, title: 'Sustainable Tourism', desc: 'We prioritize eco-friendly accommodations and respect wildlife habitats.' },
    { icon: <Users />, title: 'Local Expertise', desc: 'Our team comprises native Sri Lankans ensuring authentic experiences.' },
    { icon: <Heart />, title: 'Dutch Focus', desc: 'We understand the preferences, standards, and expectations of Dutch travelers.' },
    { icon: <Map />, title: 'Bespoke Journeys', desc: 'Every itinerary is crafted with attention to detail and personal touch.' },
  ];

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1536697246787-1f276329e6c9?q=80&w=2000" alt="Sri Lanka Tea Fields" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 100, damping: 15 }}
            className="text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Bridging the gap between the Netherlands and the Pearl of the Indian Ocean through authentic, sustainable, and luxurious travel experiences.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-bold text-dark mb-6">Why Sri Lanka is Special</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sri Lanka is a land of incredible diversity. Within a few hours, you can travel from sun-kissed tropical beaches to cool, misty tea plantations. It's a country where ancient ruins coexist with dense jungles teeming with leopards and elephants.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For Dutch travelers, Sri Lanka offers a perfect blend of adventure and comfort, deeply rooted in history (including Dutch colonial heritage in places like Galle) and warm, welcoming hospitality.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                src="https://images.unsplash.com/photo-1714281346649-3594296cc13f?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Elephants"
                className="rounded-2xl shadow-lg w-full h-48 object-cover translate-y-8"
              />
              <motion.img
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1663403766714-1b43bd155a17?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Temple"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Silk Road Journey SVG Timeline Section */}
      <section ref={timelineRef} className="py-24 bg-white relative z-20 overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Your Silk Road Journey</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-xl mx-auto">Track the seamless flow of your vacation adventure from first booking to Sri Lankan exploration.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Scroll-Linked SVG Connector Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[3px] bg-gray-100 hidden md:block" />

            <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[3px] hidden md:block">
              <svg className="absolute top-0 left-0 w-full h-full" style={{ overflow: "visible" }}>
                <motion.line
                  x1="1.5"
                  y1="0"
                  x2="1.5"
                  y2="100%"
                  stroke="#d4af37"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  style={{
                    pathLength: scrollSpring
                  }}
                />
              </svg>
            </div>

            <div className="space-y-16">
              {timelineSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="flex flex-col md:flex-row items-center relative">

                    {/* Left content (for even indices) */}
                    <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 order-last md:order-none'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 90, damping: 15 }}
                        className="bg-light p-8 rounded-3xl border border-gray-100 max-w-md w-full shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="text-xs font-semibold text-accent tracking-wider uppercase">{step.location}</span>
                        <h3 className="text-xl font-heading font-bold text-dark mt-1 mb-3">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </motion.div>
                    </div>

                    {/* Timeline Node Badge in the middle */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10 my-6 md:my-0">
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
                        className="w-12 h-12 rounded-full bg-primary text-white border-4 border-white shadow-xl flex items-center justify-center"
                        whileHover={{ scale: 1.15, backgroundColor: "#f26b38" }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    {/* Right space filler (even) or content (odd) */}
                    <div className="hidden md:block w-1/2" />

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-light relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">Our Commitment</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group cursor-pointer border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                >
                  {cloneElement(value.icon as ReactElement<{ size: number }>, { size: 30 })}
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
