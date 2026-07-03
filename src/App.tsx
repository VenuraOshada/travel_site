import { useEffect, FC, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Layout from './components/Layout';
import Home from './pages/Home';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';


interface PageTransitionProps {
  children: ReactNode;
}

// Custom Wrapper for page fade-in/out transitions
export const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  );
};

function AnimatedAppContent() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait" onExitComplete={() => {
        // Reset scroll position and resize Lenis on route change
        window.scrollTo(0, 0);
        if ((window as any).lenis) {
          (window as any).lenis.resize();
        }
      }}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/packages" element={<PageTransition><Packages /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <AnimatedAppContent />
    </Router>
  );
}

export default App;
