import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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
      width: scrolled ? 'calc(100% - 30px)' : 'calc(100% - 40px)',
      maxWidth: scrolled ? '1050px' : '1180px',
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <nav style={{
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.85)' 
          : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        borderRadius: menuOpen ? '24px' : '50px',
        padding: scrolled ? '0.4rem 1rem' : '0.6rem 1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
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
              background: '#eff6ff',
              border: '1px solid #dbeafe',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#2563eb',
              fontSize: '1.2rem',
              outline: 'none'
            }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobile && menuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
            borderTop: '1px solid #e2e8f0',
            boxShadow: '0 20px 30px rgba(15, 23, 42, 0.1)',
            padding: '1rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginTop: '0.5rem'
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
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? '#2563eb' : '#334155',
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