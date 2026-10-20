import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Screen size detector & scroll listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
      top: scrolled ? '10px' : '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: scrolled ? 'calc(100% - 24px)' : 'calc(100% - 32px)',
      maxWidth: scrolled ? '1050px' : '1180px',
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }} ref={menuRef}>
      <nav style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        borderRadius: '50px',
        padding: scrolled ? '0.4rem 1rem' : '0.6rem 1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative'
      }}>

        {/* Brand Logo / Name */}
        <a href="#home" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem', 
          textDecoration: 'none' 
        }}>
          <div style={{
            width: scrolled ? '32px' : '38px',
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
            fontSize: scrolled ? '0.98rem' : '1.1rem', 
            color: '#0f172a', 
            letterSpacing: '-0.3px',
            transition: 'all 0.3s ease'
          }}>
            <strong style={{ fontWeight: '800' }}>Dineth</strong>{' '}
            <span style={{ fontWeight: '400', color: '#475569' }}>Rajapaksha</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: scrolled ? '0.1rem' : '0.2rem' 
          }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  style={{
                    padding: scrolled ? '0.35rem 0.7rem' : '0.5rem 0.85rem',
                    borderRadius: '30px',
                    fontSize: scrolled ? '0.78rem' : '0.85rem',
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
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: menuOpen ? '#2563eb' : '#eff6ff',
              border: '1px solid #dbeafe',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: menuOpen ? '#ffffff' : '#2563eb',
              fontSize: '1.2rem',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}

        {/* Mobile Right-Aligned Glassmorphism Popup Menu */}
        {isMobile && menuOpen && (
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: '0px',
            width: '240px',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.15)',
            padding: '0.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            zIndex: 1100,
            animation: 'fadeInScale 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMenuOpen(false);
                  }}
                  style={{
                    padding: '0.65rem 1rem',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? '700' : '600',
                    color: isActive ? '#2563eb' : '#1e293b',
                    background: isActive ? '#eff6ff' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}

      </nav>
    </header>
  );
}