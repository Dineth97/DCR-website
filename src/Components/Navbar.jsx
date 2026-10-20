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
      width: scrolled ? 'calc(100% - 24px)' : 'calc(100% - 32px)',
      maxWidth: scrolled ? '1050px' : '1180px',
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <nav style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        borderRadius: '24px',
        padding: scrolled ? '0.5rem 1rem' : '0.7rem 1.2rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 15px 35px -5px rgba(15, 23, 42, 0.12)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>

        {/* Top Main Bar (Logo & Menu Button) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          {/* Brand Logo / Name */}
          <a href="#home" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            textDecoration: 'none' 
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '0.95rem',
              boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)'
            }}>
              D
            </div>
            <span style={{ 
              fontSize: '1.05rem', 
              color: '#0f172a', 
              letterSpacing: '-0.3px'
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
              gap: '0.2rem' 
            }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    style={{
                      padding: '0.5rem 0.85rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
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
                borderRadius: '12px',
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
        </div>

        {/* Mobile Dropdown Menu Items */}
        {isMobile && menuOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            marginTop: '0.8rem',
            paddingTop: '0.8rem',
            borderTop: '1px solid #e2e8f0',
            width: '100%',
            animation: 'fadeInMenu 0.3s ease forwards'
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
                    padding: '0.7rem 1rem',
                    borderRadius: '12px',
                    fontSize: '0.92rem',
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