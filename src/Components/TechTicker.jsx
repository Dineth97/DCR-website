import React, { useRef, useState, useEffect } from 'react';

const techStack = [
  { name: 'REACT JS', icon: '⚛️' },
  { name: 'FLUTTER', icon: '📱' },
  { name: 'JAVASCRIPT', icon: '🟨' },
  { name: 'PYTHON', icon: '🐍' },
  { name: 'ADOBE PHOTOSHOP', icon: '🎨' },
  { name: 'DARKTABLE RAW', icon: '📷' },
  { name: 'NODE.JS', icon: '🟢' },
  { name: 'HTML5 & CSS3', icon: '🌐' },
  { name: 'FULL-STACK DEV', icon: '💻' },
  { name: 'LEGAL TECH', icon: '⚖️' },
];

export default function TechTicker() {
  const quadStack = [...techStack, ...techStack, ...techStack, ...techStack];

  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  // Screen size detector
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function for drag start (Mouse & Touch)
  const handleStart = (clientX) => {
    setIsDragging(true);
    startX.current = clientX;
    
    if (trackRef.current) {
      const computedStyle = window.getComputedStyle(trackRef.current);
      const matrix = new WebKitCSSMatrix(computedStyle.transform);
      currentTranslate.current = matrix.m41;
      prevTranslate.current = matrix.m41;
      trackRef.current.style.animation = 'none';
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  // Helper function for drag move (Mouse & Touch)
  const handleMove = (clientX) => {
    if (!isDragging) return;
    const diff = clientX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  // Helper function for drag end
  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (trackRef.current) {
      const duration = isMobile ? '25s' : '35s';
      trackRef.current.style.animation = `marqueeScroll ${duration} linear infinite`;
    }
  };

  // Mouse Handlers
  const handleMouseDown = (e) => handleStart(e.clientX);
  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleMouseUpOrLeave = () => handleEnd();

  // Touch Handlers (for Mobile)
  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleEnd();

  const animationDuration = isMobile ? '25s' : '35s';

  return (
    <div style={{
      ...styles.tickerWrapper,
      margin: isMobile ? '15px 0' : '25px 0',
      padding: isMobile ? '4px 0' : '6px 0'
    }}>
      {/* Dynamic Pure CSS Animation Injection */}
      <style>
        {`
          @keyframes marqueeScroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <div
        style={styles.scrollContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          style={{
            ...styles.tickerTrack,
            animation: isDragging ? 'none' : `marqueeScroll ${animationDuration} linear infinite`,
          }}
        >
          {quadStack.map((item, index) => (
            <div key={index} style={{
              ...styles.tickerItem,
              gap: isMobile ? '8px' : '12px',
              padding: isMobile ? '0 5px' : '0 8px'
            }}>
              <div style={{
                ...styles.badge,
                padding: isMobile ? '3px 9px' : '4px 12px'
              }}>
                <span style={{
                  ...styles.icon,
                  fontSize: isMobile ? '12px' : '14px'
                }}>{item.icon}</span>
                <span style={{
                  ...styles.name,
                  fontSize: isMobile ? '10px' : '11.5px'
                }}>{item.name}</span>
              </div>
              <span style={{
                ...styles.dot,
                fontSize: isMobile ? '11px' : '14px'
              }}>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  tickerWrapper: {
    width: '100%',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, rgba(239, 246, 255, 0.6) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(239, 246, 255, 0.6) 100%)',
    borderTop: '1px solid #e2e8f0',
    borderBottom: '1px solid #e2e8f0',
    position: 'relative',
    userSelect: 'none',
    boxShadow: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.01)',
  },
  scrollContainer: {
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    cursor: 'grab',
  },
  tickerTrack: {
    display: 'flex',
    width: 'max-content',
    alignItems: 'center',
    willChange: 'transform',
  },
  tickerItem: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#ffffff',
    border: '1px solid #dbeafe',
    borderRadius: '20px',
    boxShadow: '0 1px 4px rgba(37, 99, 235, 0.04)',
  },
  icon: {
    display: 'inline-block'
  },
  name: {
    color: '#1e293b',
    fontWeight: '700',
    letterSpacing: '0.6px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  dot: {
    color: '#2563eb',
    fontWeight: 'bold',
    opacity: 0.4,
  },
};