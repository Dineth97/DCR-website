import React, { useRef, useState } from 'react';

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
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  // Mouse Down (Drag පටන් ගන්න විට)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    
    if (trackRef.current) {
      const computedStyle = window.getComputedStyle(trackRef.current);
      const matrix = new WebKitCSSMatrix(computedStyle.transform);
      currentTranslate.current = matrix.m41;
      prevTranslate.current = matrix.m41;
      trackRef.current.style.animation = 'none';
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  // Mouse Move (Drag කරන විට)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  // Mouse Up / Leave (Drag ඉවර වූ විට)
  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (trackRef.current) {
      trackRef.current.style.animation = 'marqueeScroll 35s linear infinite';
    }
  };

  return (
    <div style={styles.tickerWrapper}>
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
      >
        <div
          ref={trackRef}
          style={{
            ...styles.tickerTrack,
            animation: isDragging ? 'none' : 'marqueeScroll 35s linear infinite',
          }}
        >
          {quadStack.map((item, index) => (
            <div key={index} style={styles.tickerItem}>
              <div style={styles.badge}>
                <span style={styles.icon}>{item.icon}</span>
                <span style={styles.name}>{item.name}</span>
              </div>
              <span style={styles.dot}>•</span>
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
    padding: '6px 0',
    margin: '25px 0',
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
    gap: '12px',
    padding: '0 8px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#ffffff',
    border: '1px solid #dbeafe',
    padding: '4px 12px',
    borderRadius: '20px',
    boxShadow: '0 1px 4px rgba(37, 99, 235, 0.04)',
  },
  icon: {
    fontSize: '14px',
  },
  name: {
    color: '#1e293b',
    fontSize: '11.5px',
    fontWeight: '700',
    letterSpacing: '0.6px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  dot: {
    color: '#2563eb',
    fontSize: '14px',
    fontWeight: 'bold',
    opacity: 0.4,
  },
};