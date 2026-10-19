import React, { useState } from 'react';
import profileImg from "../Images/profileImg.jpg";

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Info Cards Data
  const infoCards = [
    {
      id: 'bit',
      icon: '🎓',
      label: 'BIT Degree',
      value: 'University of Moratuwa',
      badge: 'Completed'
    },
    {
      id: 'llb',
      icon: '⚖️',
      label: 'LL.B Degree',
      value: 'Open University of Sri Lanka',
      badge: 'Level 5'
    },
    {
      id: 'loc',
      icon: '📍',
      label: 'Location',
      value: 'Kegalle / Mawanella, SL',
      badge: 'Native'
    },
    {
      id: 'lang',
      icon: '🗣️',
      label: 'Languages',
      value: 'English, Sinhala',
      badge: 'Fluent'
    }
  ];

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.headerBox}>
          <span style={styles.topBadge}>ABOUT ME</span>
          <h2 style={styles.mainTitle}>Bridging Tech & Law with Creative Precision</h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div style={styles.contentGrid}>
          
          {/* Left Column: Image Card */}
          <div style={styles.imageWrapper}>
            <div style={styles.imageCard}>
              <img 
                src={profileImg}
                alt="Dineth Rajapaksha" 
                style={styles.profileImg} 
              />
              <div style={styles.imgGradientOverlay} />
              
              {/* Floating Glassmorphic Overlay Badge */}
              <div style={styles.imgFloatingBadge}>
                <h3 style={styles.badgeName}>Dineth Rajapaksha</h3>
                <p style={styles.badgeRole}>Software Developer & Legal Scholar</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Info Grid */}
          <div style={styles.bioWrapper}>
            
            <h3 style={styles.bioHeading}>
              Passionate about building <span style={styles.highlightText}>impactful digital solutions</span> & modern web experiences.
            </h3>

            <p style={styles.bioParagraph}>
              I'm a full-stack & mobile developer pursuing dual degrees in Information Technology at the University of Moratuwa and Law at OUSL. I blend structured analytical thinking with clean aesthetic coding to build scalable web applications, mobile apps, and intuitive user experiences.
            </p>

            {/* Info Cards Grid */}
            <div style={styles.infoGrid}>
              {infoCards.map((card) => {
                const isHovered = hoveredCard === card.id;
                return (
                  <div
                    key={card.id}
                    style={{
                      ...styles.miniCard,
                      borderColor: isHovered ? '#2563eb' : '#e2e8f0',
                      boxShadow: isHovered 
                        ? '0 12px 24px -8px rgba(37, 99, 235, 0.15)' 
                        : '0 2px 8px rgba(0, 0, 0, 0.04)',
                      transform: isHovered ? 'translateY(-3px)' : 'translateY(0px)',
                      backgroundColor: isHovered ? '#f8fafc' : '#ffffff'
                    }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div style={styles.miniCardHeader}>
                      <span style={styles.cardIcon}>{card.icon}</span>
                      <span style={styles.miniBadge}>{card.badge}</span>
                    </div>
                    <div style={styles.cardLabel}>{card.label}</div>
                    <div style={styles.cardValue}>{card.value}</div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '90px 20px',
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  container: {
    maxWidth: '1150px',
    margin: '0 auto'
  },
  headerBox: {
    textAlign: 'center',
    marginBottom: '55px'
  },
  topBadge: {
    fontSize: '12px',
    fontWeight: '800',
    color: '#2563eb',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    backgroundColor: '#eff6ff',
    padding: '6px 16px',
    borderRadius: '20px',
    border: '1px solid #dbeafe',
    display: 'inline-block',
    marginBottom: '12px'
  },
  mainTitle: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#0f172a',
    margin: 0,
    letterSpacing: '-0.5px'
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '50px',
    alignItems: 'center'
  },
  imageWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  imageCard: {
    position: 'relative',
    width: '100%',
    maxWidth: '440px',
    height: '480px',
    borderRadius: '28px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.12)',
    border: '1.5px solid #e2e8f0'
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  },
  imgGradientOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.1) 60%, transparent 100%)'
  },
  imgFloatingBadge: {
    position: 'absolute',
    bottom: '24px',
    left: '24px',
    right: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '18px',
    padding: '18px 22px',
    color: '#ffffff'
  },
  badgeName: {
    fontSize: '20px',
    fontWeight: '700',
    margin: '0 0 4px 0',
    color: '#ffffff'
  },
  badgeRole: {
    fontSize: '13px',
    color: '#cbd5e1',
    margin: 0,
    fontWeight: '500'
  },
  bioWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  bioHeading: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: '1.35',
    margin: '0 0 16px 0'
  },
  highlightText: {
    color: '#2563eb'
  },
  bioParagraph: {
    fontSize: '15px',
    color: '#475569',
    lineHeight: '1.7',
    margin: '0 0 32px 0'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  miniCard: {
    padding: '18px 20px',
    borderRadius: '18px',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    transition: 'all 0.25s ease',
    display: 'flex',
    flexDirection: 'column'
  },
  miniCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  cardIcon: {
    fontSize: '20px'
  },
  miniBadge: {
    fontSize: '10px',
    fontWeight: '700',
    color: '#2563eb',
    backgroundColor: '#eff6ff',
    padding: '3px 8px',
    borderRadius: '12px',
    border: '1px solid #dbeafe'
  },
  cardLabel: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  cardValue: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#0f172a',
    marginTop: '2px'
  }
};