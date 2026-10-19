import React from 'react';

export default function BusinessSocialSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.mainTitle}>Business & Social</h2>
        <p style={styles.subTitle}>Connect with me professionally or explore my creative personal ventures</p>

        <div style={styles.bentoGrid}>
          
          {/* Card 1: Professional Profiles */}
          <div style={styles.bentoCard}>
            <div style={styles.cardHeader}>
              <span style={styles.icon}>💼</span>
              <h3 style={styles.cardTitle}>Professional Profiles</h3>
            </div>
            <p style={styles.cardDesc}>Check out my professional repositories, contributions, and career profile.</p>
            <div style={styles.btnGroup}>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={styles.actionBtn}>
                GitHub ↗
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{...styles.actionBtn, backgroundColor: '#0a66c2', color: '#fff'}}>
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Card 2: Direct Communication */}
          <div style={styles.bentoCard}>
            <div style={styles.cardHeader}>
              <span style={styles.icon}>📬</span>
              <h3 style={styles.cardTitle}>Direct Communication</h3>
            </div>
            <p style={styles.cardDesc}>Feel free to reach out directly for collaborations or inquiries.</p>
            <div style={styles.btnGroup}>
              <a href="mailto:your-email@example.com" style={styles.actionBtnOutline}>
                ✉ Email Me
              </a>
            </div>
          </div>

          {/* Card 3: Creative & Personal */}
          <div style={styles.bentoCard}>
            <div style={styles.cardHeader}>
              <span style={styles.icon}>📷</span>
              <h3 style={styles.cardTitle}>Creative & Personal</h3>
            </div>
            <p style={styles.cardDesc}>Photography, music, night sky stargazing & personal hobbies.</p>
            <div style={styles.btnGroup}>
              <span style={styles.hobbyBadge}>🎸 Music</span>
              <span style={styles.hobbyBadge}>🌌 Stargazing</span>
              <span style={styles.hobbyBadge}>🏍️ Traveling</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '80px 20px', backgroundColor: '#f8fafc' },
  container: { maxWidth: '1150px', margin: '0 auto' },
  mainTitle: { textAlign: 'center', fontSize: '38px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' },
  subTitle: { textAlign: 'center', fontSize: '15px', color: '#64748b', marginBottom: '50px' },
  bentoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px'
  },
  bentoCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' },
  icon: { fontSize: '24px' },
  cardTitle: { fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: 0 },
  cardDesc: { fontSize: '14px', color: '#64748b', lineHeight: '1.5', marginBottom: '24px' },
  btnGroup: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  actionBtn: {
    padding: '8px 16px',
    borderRadius: '10px',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '600'
  },
  actionBtnOutline: {
    padding: '8px 16px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    color: '#334155',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '600'
  },
  hobbyBadge: {
    padding: '6px 12px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600'
  }
};