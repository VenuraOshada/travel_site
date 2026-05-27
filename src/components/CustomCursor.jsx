import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for smooth delay
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    // Show only on desktop screen sizes
    const checkViewport = () => {
      if (window.innerWidth >= 1024) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const interactiveEl = target.closest('a, button, select, input, textarea, [role="button"], [data-cursor]');
      if (interactiveEl) {
        const cursorData = interactiveEl.getAttribute('data-cursor');
        if (cursorData) {
          setCursorType(cursorData);
          if (cursorData === 'explore') {
            setCursorText('EXPLORE');
          } else if (cursorData === 'drag') {
            setCursorText('DRAG');
          } else {
            setCursorText(cursorData);
          }
        } else {
          setCursorType('pointer');
          setCursorText('');
        }
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };
    
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('resize', checkViewport);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Styles dynamic updates
  const getVariants = () => {
    const scaleFactor = isClicked ? 0.8 : 1;
    switch (cursorType) {
      case 'explore':
        return {
          width: 80,
          height: 80,
          backgroundColor: '#d4af37', // secondary
          border: 'none',
          scale: scaleFactor,
        };
      case 'drag':
        return {
          width: 80,
          height: 80,
          backgroundColor: '#153e35', // primary
          border: 'none',
          scale: scaleFactor,
        };
      case 'pointer':
        return {
          width: 45,
          height: 45,
          backgroundColor: 'rgba(242, 107, 56, 0.05)', // accent transparency
          border: '2px solid #f26b38', // accent
          scale: scaleFactor,
        };
      default:
        return {
          width: 28,
          height: 28,
          backgroundColor: 'transparent',
          border: '1.5px solid #153e35',
          scale: scaleFactor,
        };
    }
  };

  return (
    <>
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[10px] font-bold text-white tracking-widest overflow-hidden hidden lg:flex"
        animate={getVariants()}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-white text-center font-heading font-extrabold uppercase text-[9px] pointer-events-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
