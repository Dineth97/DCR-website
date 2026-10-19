import React, { useState } from 'react';

const educationData = [
  {
    id: 'bit',
    title: 'BIT (UoM)',
    subtitle: 'Bachelor of Information Technology',
    institution: 'University of Moratuwa',
    period: '2023 - Present',
    status: 'Reading - Final Year (Level 3)',
    summary: 'Focused on Software Engineering, Web Development, Database Management, and Mobile Application Architecture.',
    keyPoints: [
      'Core focus on Full-Stack Web Development & Mobile App Dev (Flutter/React)',
      'Object-Oriented Programming & Software Design Patterns',
      'Database Systems & Data Structures',
      'Completed major projects including GPA Calculator & Heritage Web Systems'
    ],
    seeMoreUrl: 'https://dinethrajapaksha.com/education/bit'
  },
  {
    id: 'llb',
    title: 'LL.B',
    subtitle: 'Bachelor of Laws',
    institution: 'The Open University of Sri Lanka',
    period: '2021 - Present',
    status: 'Reading - Final Level (Level 6)',
    summary: 'Specializing in Sri Lankan Legal System, Jurisprudence, Constitutional Law, Intellectual Property, and Commercial Law.',
    keyPoints: [
      'Comprehensive study of Constitutional, Criminal, & Administrative Law',
      'Intellectual Property & Cyber Law focus',
      'Legal Drafting, Research, and Analytical Skills',
      'Balancing Law & Technology intersection'
    ],
    seeMoreUrl: 'https://dinethrajapaksha.com/education/llb'
  },
  {
    id: 'primary',
    title: 'Primary Education',
    subtitle: 'G.C.E. Advanced Level & Ordinary Level',
    institution: 'School Education',
    period: 'Completed',
    status: 'Successfully Completed',
    summary: 'Solid foundation in Mathematics, Science, and Analytical Studies laying the groundwork for dual degree paths.',
    keyPoints: [
      'G.C.E. Advanced Level - Mathematics Stream',
      'G.C.E. Ordinary Level with High Distinction Passes',
      'Active involvement in Extra-Curriculars & Leadership Roles',
      'Strong Analytical & Logical Reasoning Skills'
    ],
    seeMoreUrl: 'https://dinethrajapaksha.com/education/primary'
  }
];

export default function EducationSection() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const toggleBox = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Title */}
        <h2 style={styles.mainTitle}>Education</h2>
        <p style={styles.subTitle}>Explore my academic qualifications and educational background</p>

        {/* 3 Main Header Boxes Grid */}
        <div style={styles.gridContainer}>
          {educationData.map((item) => {
            const isOpen = activeId === item.id || hoveredId === item.id;

            return (
              <div 
                key={item.id} 
                style={{
                  ...styles.cardColumn,
                  perspective: '1000px'
                }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                
                {/* Header Box (Top Box) */}
                <div 
                  onClick={() => toggleBox(item.id)} 
                  style={{
                    ...styles.headerBox,
                    borderColor: isOpen ? '#3b82f6' : 'rgba(226, 232, 240, 0.8)',
                    boxShadow: isOpen 
                      ? '0 20px 40px -10px rgba(59, 130, 246, 0.3), 0 10px 15px -5px rgba(59, 130, 246, 0.15)' 
                      : '0 8px 20px -5px rgba(0, 0, 0, 0.05)',
                    transform: isOpen ? 'translateY(-4px) translateZ(20px)' : 'translateY(0px) translateZ(0px)',
                    background: isOpen ? 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)' : '#ffffff'
                  }}
                >
                  <div style={styles.headerLeft}>
                    <div style={{
                      ...styles.iconBadge,
                      backgroundColor: isOpen ? '#2563eb' : '#eff6ff',
                      color: isOpen ? '#ffffff' : '#2563eb'
                    }}>
                      🎓
                    </div>
                    <h3 style={styles.boxTitle}>{item.title}</h3>
                  </div>

                  <div style={{
                    ...styles.arrow,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: isOpen ? '#2563eb' : '#94a3b8'
                  }}>
                    ▼
                  </div>
                </div>

                {/* Low Opacity & Faint Shade Card (No Blur) */}
                <div style={{
                  ...styles.dropdownWrapper,
                  maxHeight: isOpen ? '600px' : '150px',
                  opacity: isOpen ? 1 : 0.42, // ලාවට පේන ගානට opacity එක අඩු කළා
                  filter: 'none', // Blur එක සම්පූර්ණයෙන්ම අයින් කළා
                  transform: isOpen 
                    ? 'translateY(12px) translateZ(30px) scale(1)' 
                    : 'translateY(4px) translateZ(-10px) scale(0.98)',
                  borderColor: isOpen ? '#cbd5e1' : 'rgba(226, 232, 240, 0.6)',
                  boxShadow: isOpen 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 20px rgba(37, 99, 235, 0.1)' 
                    : '0 8px 20px -5px rgba(0, 0, 0, 0.03)',
                  pointerEvents: isOpen ? 'auto' : 'none'
                }}>
                  <div style={styles.dropdownContent}>
                    
                    <div style={styles.dropHeader}>
                      <div>
                        <h4 style={styles.subtitle}>{item.subtitle}</h4>
                        <span style={styles.institution}>{item.institution}</span>
                      </div>
                      <span style={styles.statusBadge}>{item.status}</span>
                    </div>

                    <p style={styles.summary}>{item.summary}</p>

                    <ul style={styles.bulletList}>
                      {item.keyPoints.map((point, index) => (
                        <li key={index} style={styles.bulletItem}>
                          <span style={styles.bulletDot}>•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* See More Link */}
                    <div style={styles.seeMoreContainer}>
                      <a 
                        href={item.seeMoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.seeMoreBtn}
                      >
                        See More Details ↗
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#f8fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  container: {
    maxWidth: '1150px',
    margin: '0 auto'
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: '38px',
    fontWeight: '800',
    color: '#0f172a',
    margin: '0 0 8px 0',
    letterSpacing: '-0.5px'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '15px',
    color: '#64748b',
    marginBottom: '50px'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '35px',
    alignItems: 'start'
  },
  cardColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  headerBox: {
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderRadius: '16px',
    padding: '20px 24px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    userSelect: 'none',
    position: 'relative',
    zIndex: 2
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px'
  },
  iconBadge: {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'all 0.3s ease'
  },
  boxTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0
  },
  arrow: {
    fontSize: '12px',
    transition: 'all 0.3s ease'
  },
  dropdownWrapper: {
    overflow: 'hidden',
    transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
    borderRadius: '16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
    position: 'relative',
    zIndex: 1
  },
  dropdownContent: {
    padding: '24px'
  },
  dropHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '14px',
    marginBottom: '16px'
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 4px 0'
  },
  institution: {
    fontSize: '13px',
    color: '#64748b',
    fontWeight: '500'
  },
  statusBadge: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#2563eb',
    backgroundColor: '#eff6ff',
    padding: '4px 10px',
    borderRadius: '20px',
    border: '1px solid #dbeafe'
  },
  summary: {
    fontSize: '13px',
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  bulletList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 20px 0'
  },
  bulletItem: {
    fontSize: '13px',
    color: '#64748b',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'flex-start',
    lineHeight: '1.5'
  },
  bulletDot: {
    color: '#2563eb',
    fontWeight: 'bold',
    marginRight: '8px',
    fontSize: '16px'
  },
  seeMoreContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderTop: '1px solid #f1f5f9',
    paddingTop: '14px'
  },
  seeMoreBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '10px',
    fontSize: '12px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
  }
};