import React, { useState } from 'react';

export default function ResumeSection() {
  const [isHovered, setIsHovered] = useState(false);

  // ⚠️ මෙතැනට උඹේ Phone Number එක (94 එක්ක + නැතුව) සහ Email එක දාන්න
  const myWhatsAppNumber = "94777079176"; // e.g. 94771234567
  const myEmail = "dineth.rajapaksha977@gmail.com";

  // Pre-filled Message
  const reqMessage = "Hi Dineth, I visited your portfolio site and would like to request a copy of your updated Resume / CV.";
  const reqSubject = "Request for Resume / CV - Dineth Rajapaksha";

  // 1. WhatsApp Direct Link
  const getWhatsAppURL = () => {
    const encodedText = encodeURIComponent(reqMessage);
    return `https://api.whatsapp.com/send?phone=${myWhatsAppNumber}&text=${encodedText}`;
  };

  // 2. Gmail Direct Web Link (Browser එකෙන්ම Gmail ඕපන් වෙනවා - Default App ඕන නෑ)
  const getGmailWebURL = () => {
    const encodedSubject = encodeURIComponent(reqSubject);
    const encodedBody = encodeURIComponent(`${reqMessage}\n\nBest regards,`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Title & Subtitle */}
        <h2 style={styles.mainTitle}>My Resume</h2>
        <p style={styles.subTitle}>To protect personal privacy, full CV details are available upon direct request.</p>

        {/* Main Card */}
        <div 
          style={{
            ...styles.card,
            borderColor: isHovered ? '#2563eb' : '#e2e8f0',
            boxShadow: isHovered 
              ? '0 20px 35px -10px rgba(37, 99, 235, 0.2), 0 10px 15px -5px rgba(37, 99, 235, 0.08)' 
              : '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
            background: isHovered ? 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)' : '#ffffff'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Badge Icon */}
          <div style={styles.iconContainer}>
            <span style={styles.lockIcon}>🔒</span>
          </div>

          <h3 style={styles.cardHeading}>Request Full Curriculum Vitae</h3>
          <p style={styles.cardDescription}>
            Includes full career timeline, educational background, technical stack proficiency, and verified project links. Click below to request instantly via WhatsApp or Email.
          </p>

          {/* Action Buttons */}
          <div style={styles.btnGroup}>
            {/* WhatsApp Direct Open */}
            <a 
              href={getWhatsAppURL()} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.waBtn}
            >
              <span>💬</span> Request via WhatsApp
            </a>

            {/* Email Direct (Gmail Web) */}
            <a 
              href={getGmailWebURL()} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.emailBtn}
            >
              <span>✉️</span> Request via Gmail
            </a>
          </div>

          <div style={styles.footerNote}>
            ⚡ Clicking will instantly open WhatsApp or Gmail in a new tab.
          </div>

        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '70px 20px',
    backgroundColor: '#f8fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  },
  mainTitle: {
    fontSize: '38px',
    fontWeight: '800',
    color: '#0f172a',
    margin: '0 0 8px 0',
    letterSpacing: '-0.5px'
  },
  subTitle: {
    fontSize: '15px',
    color: '#64748b',
    marginBottom: '40px'
  },
  card: {
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderRadius: '24px',
    padding: '40px 30px',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '20px',
    backgroundColor: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    border: '1px solid #dbeafe'
  },
  lockIcon: {
    fontSize: '28px'
  },
  cardHeading: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 12px 0'
  },
  cardDescription: {
    fontSize: '14px',
    color: '#475569',
    lineHeight: '1.6',
    maxWidth: '560px',
    margin: '0 0 32px 0'
  },
  btnGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '500px'
  },
  waBtn: {
    flex: '1 1 200px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '14px',
    padding: '14px 22px',
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)'
  },
  emailBtn: {
    flex: '1 1 200px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '14px',
    padding: '14px 22px',
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
  },
  footerNote: {
    marginTop: '24px',
    fontSize: '12px',
    color: '#94a3b8',
    fontWeight: '500'
  }
};