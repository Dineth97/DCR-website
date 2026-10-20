import React, { useState, useEffect } from 'react';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Screen resize detector for dynamic responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      id: 0,
      tag: 'SERVICES',
      title: 'Full-Stack & Mobile Developer',
      desc: 'Crafting aesthetic, high-performance & responsive digital experiences with clean architecture.',
      badge: 'Tech & Code'
    },
    {
      id: 1,
      tag: "HELLO, I'M",
      name: 'Dineth Rajapaksha',
      role: 'Software Developer & Legal Scholar',
      desc: 'Passionate about creating modern, interactive web applications with clean code & high aesthetic value.',
      isMain: true
    },
    {
      id: 2,
      tag: 'ACADEMICS',
      title: 'BIT (UoM) & LL.B (OUSL)',
      desc: 'Merging structured analytical legal thinking with modern software development skills.',
      badge: 'Dual Degree'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      paddingTop: isMobile ? '100px' : '130px',
      paddingBottom: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 20%, #ffffff 0%, #f1f5f9 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      {/* Top Welcome Pill Badge */}
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '1.5rem' : '2.5rem', zIndex: 2 }}>
        <span style={{
          background: '#eff6ff',
          color: '#2563eb',
          border: '1px solid #dbeafe',
          padding: isMobile ? '0.4rem 1rem' : '0.5rem 1.4rem',
          borderRadius: '30px',
          fontSize: isMobile ? '0.75rem' : '0.85rem',
          fontWeight: '700',
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          boxShadow: '0 2px 10px rgba(37, 99, 235, 0.08)'
        }}>
          ✨ Welcome to my personal website
        </span>
      </div>

      {/* 3D Perspective Card Container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: isMobile ? '800px' : '1200px',
        width: '100%',
        maxWidth: '1200px',
        height: isMobile ? '400px' : '460px',
        position: 'relative'
      }}>
        {cards.map((card, idx) => {
          let position = idx - activeIndex;
          if (position < -1) position += cards.length;
          if (position > 1) position -= cards.length;

          const isCenter = position === 0;
          const isLeft = position === -1;
          const isRight = position === 1;

          // Responsive Card Width & Offset distance
          const cardWidth = isMobile ? '88vw' : '420px';
          const maxCardWidth = isMobile ? '340px' : '420px';
          const offsetX = isMobile ? 180 : 340;

          let transform = 'scale(0.8) translateZ(-200px)';
          let opacity = 0.2;
          let zIndex = 1;

          if (isCenter) {
            transform = 'scale(1) translateZ(0) rotateY(0deg)';
            opacity = 1;
            zIndex = 10;
          } else if (isLeft) {
            transform = `translateX(-${offsetX}px) scale(0.8) rotateY(18deg)`;
            opacity = isMobile ? 0.35 : 0.75;
            zIndex = 5;
          } else if (isRight) {
            transform = `translateX(${offsetX}px) scale(0.8) rotateY(-18deg)`;
            opacity = isMobile ? 0.35 : 0.75;
            zIndex = 5;
          }

          return (
            <div
              key={card.id}
              onClick={() => setActiveIndex(idx)}
              style={{
                position: 'absolute',
                width: cardWidth,
                maxWidth: maxCardWidth,
                height: isMobile ? '390px' : '440px',
                background: isCenter 
                  ? 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)' 
                  : '#ffffff',
                borderRadius: '24px',
                padding: isMobile ? '1.5rem' : '2.5rem',
                boxShadow: isCenter 
                  ? '0 20px 40px -10px rgba(37, 99, 235, 0.18), 0 10px 20px -5px rgba(15, 23, 42, 0.04)' 
                  : '0 10px 25px rgba(0,0,0,0.04)',
                border: isCenter ? '1.5px solid #2563eb' : '1.5px solid #e2e8f0',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                transform,
                opacity,
                zIndex,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box'
              }}
            >
              <div>
                {/* Card Top Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: isMobile ? '0.75rem' : '0.8rem', fontWeight: '800', color: '#2563eb', letterSpacing: '1.2px' }}>
                    {card.tag}
                  </span>
                  {card.badge && (
                    <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '10px' }}>
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Card Header Content */}
                {card.isMain ? (
                  <>
                    <h1 style={{ 
                      fontSize: isMobile ? '1.8rem' : '2.6rem', 
                      fontWeight: '800', 
                      margin: '0.3rem 0 0.2rem', 
                      color: '#0f172a', 
                      lineHeight: 1.1, 
                      letterSpacing: '-0.5px' 
                    }}>
                      {card.name}
                    </h1>
                    <h3 style={{ 
                      fontSize: isMobile ? '0.95rem' : '1.1rem', 
                      color: '#2563eb', 
                      fontWeight: '700', 
                      marginBottom: '0.8rem' 
                    }}>
                      {card.role}
                    </h3>
                  </>
                ) : (
                  <h2 style={{ 
                    fontSize: isMobile ? '1.4rem' : '1.8rem', 
                    fontWeight: '800', 
                    margin: '0.5rem 0 0.8rem', 
                    color: '#0f172a', 
                    lineHeight: 1.25 
                  }}>
                    {card.title}
                  </h2>
                )}

                <p style={{ 
                  color: '#475569', 
                  lineHeight: 1.55, 
                  fontSize: isMobile ? '0.85rem' : '0.95rem', 
                  margin: 0 
                }}>
                  {card.desc}
                </p>
              </div>

              {/* Active Card Interactive Buttons */}
              {card.isMain && (
                <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem' }}>
                  <a 
                    href="#contact"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      background: '#2563eb',
                      color: '#ffffff',
                      textDecoration: 'none',
                      padding: isMobile ? '0.7rem 0.8rem' : '0.85rem 1.2rem',
                      borderRadius: '10px',
                      fontWeight: '700',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Hire Me
                  </a>
                  <a 
                    href="#about"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      background: '#ffffff',
                      color: '#0f172a',
                      textDecoration: 'none',
                      border: '1.5px solid #cbd5e1',
                      padding: isMobile ? '0.7rem 0.8rem' : '0.85rem 1.2rem',
                      borderRadius: '10px',
                      fontWeight: '700',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    More Details
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Controls */}
      <div style={{ display: 'flex', gap: '1.2rem', marginTop: isMobile ? '1.5rem' : '3rem', alignItems: 'center', zIndex: 2 }}>
        <button
          onClick={handlePrev}
          style={{
            width: isMobile ? '40px' : '46px',
            height: isMobile ? '40px' : '46px',
            borderRadius: '50%', background: '#ffffff',
            border: '1.5px solid #cbd5e1', cursor: 'pointer', fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)', color: '#0f172a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          ←
        </button>
        <span style={{ fontWeight: '700', color: '#64748b', fontSize: isMobile ? '0.85rem' : '0.9rem', letterSpacing: '1px' }}>
          0{activeIndex + 1} / 0{cards.length}
        </span>
        <button
          onClick={handleNext}
          style={{
            width: isMobile ? '40px' : '46px',
            height: isMobile ? '40px' : '46px',
            borderRadius: '50%', background: '#ffffff',
            border: '1.5px solid #cbd5e1', cursor: 'pointer', fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)', color: '#0f172a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          →
        </button>
      </div>
    </section>
  );
}