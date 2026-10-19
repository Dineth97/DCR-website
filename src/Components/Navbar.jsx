import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Scroll වෙද්දී Navbar එක කුඩා වෙන සහ Shadow/Blur වෙන Logic එක
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Business & Social', href: '#business', id: 'business' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: scrolled ? '10px' : '20px', // scroll කරද්දී උඩින් තියෙන පරතරයත් අඩු වෙනවා
      left: '50%',
      transform: 'translateX(-50%)',
      width: scrolled ? 'calc(100% - 60px)' : 'calc(100% - 40px)', // scroll කරද්දී width එක ටිකක් අඩු වෙනවා
      maxWidth: scrolled ? '1050px' : '1180px', // max-width එක 1180px සිට 1050px වලට shrink වෙනවා
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <nav style={{
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.65)'  // scroll වුණාම transparent ගතිය වැඩි කරලා glass effect එක ගත්තා
          : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)', // scroll වෙද්දී blur එක වැඩි වෙනවා
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        border: scrolled ? '1px solid rgba(226, 232, 240, 0.6)' : '1px solid rgba(226, 232, 240, 0.8)',
        borderRadius: '50px',
        padding: scrolled ? '0.35rem 1rem' : '0.6rem 1.2rem', // padding එක අඩු වීමෙන් height එක shrink වෙනවා
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: scrolled 
          ? '0 10px 25px -5px rgba(15, 23, 42, 0.1)' 
          : '0 8px 20px -6px rgba(15, 23, 42, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>

        {/* Brand Logo / Name */}
        <a href="#home" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem', 
          textDecoration: 'none' 
        }}>
          <div style={{
            width: scrolled ? '32px' : '38px', // Icon එකේ size එක shrink වෙනවා
            height: scrolled ? '32px' : '38px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: scrolled ? '0.85rem' : '1rem',
            boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            D
          </div>
          <span style={{ 
            fontSize: scrolled ? '0.98rem' : '1.1rem', // Font size එක shrink වෙනවා
            color: '#0f172a', 
            letterSpacing: '-0.3px',
            transition: 'all 0.3s ease'
          }}>
            <strong style={{ fontWeight: '800' }}>Dineth</strong>{' '}
            <span style={{ fontWeight: '400', color: '#475569' }}>Rajapaksha</span>
          </span>
        </a>

        {/* Navigation Links */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: scrolled ? '0.15rem' : '0.3rem' 
        }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                style={{
                  padding: scrolled ? '0.4rem 0.85rem' : '0.55rem 1rem', // Button padding shrink වෙනවා
                  borderRadius: '30px',
                  fontSize: scrolled ? '0.82rem' : '0.88rem', // Button text size shrink වෙනවා
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#2563eb' : '#475569',
                  background: isActive ? '#eff6ff' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

      </nav>
    </header>
  );
}