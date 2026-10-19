import React from 'react';

const servicesData = [
  {
    id: 'web',
    title: 'Web Development',
    icon: '💻',
    description: 'Building modern, responsive, and high-performance web applications with clean architecture.',
    tags: ['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'REST APIs']
  },
  {
    id: 'mobile',
    title: 'Mobile App Dev',
    icon: '📱',
    description: 'Crafting cross-platform mobile experiences for iOS & Android with intuitive user interfaces.',
    tags: ['Flutter', 'Dart', 'State Management', 'Mobile UI']
  },
  {
    id: 'creative',
    title: 'UI/UX & Creative',
    icon: '🎨',
    description: 'Digital retouching, photo editing, and aesthetic interface designs that highlight user experience.',
    tags: ['Photoshop', 'Darktable', 'UI Design', 'Branding']
  }
];

export default function ServicesSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.mainTitle}>Services</h2>
        <p style={styles.subTitle}>What I offer to bring your ideas and digital products to life</p>

        <div style={styles.grid}>
          {servicesData.map((item) => (
            <div key={item.id} className="service-card" style={styles.card}>
              <div style={styles.iconWrapper}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.description}</p>
              
              <div style={styles.tagsContainer}>
                {item.tags.map((tag, idx) => (
                  <span key={idx} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '80px 20px', backgroundColor: '#ffffff' },
  container: { maxWidth: '1150px', margin: '0 auto' },
  mainTitle: { textAlign: 'center', fontSize: '38px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' },
  subTitle: { textAlign: 'center', fontSize: '15px', color: '#64748b', marginBottom: '50px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' },
  card: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '20px',
    padding: '32px 24px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  iconWrapper: {
    fontSize: '32px',
    backgroundColor: '#eff6ff',
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  cardTitle: { fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' },
  cardDesc: { fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '20px' },
  tagsContainer: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  tag: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#2563eb',
    backgroundColor: '#ffffff',
    border: '1px solid #dbeafe',
    padding: '5px 12px',
    borderRadius: '30px'
  }
};