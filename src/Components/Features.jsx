import React from 'react';

const features = [
  { icon: '⚡', title: 'Blazing Fast Speed', desc: 'Optimized for sub-second loading speeds and perfect 100 Lighthouse scores.' },
  { icon: '🎨', title: 'World-Class Design', desc: 'Bespoke UI/UX designed specifically to engage visitors and turn them into customers.' },
  { icon: '🔒', title: 'Bank-Grade Security', desc: 'Built-in SSL, DDoS protection, and secure data encryption standards.' }
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '6rem 8%', background: '#0f172a', color: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Why Choose Us</h2>
        <p style={{ color: '#94a3b8' }}>Built with precision, engineered for performance.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {features.map((item, idx) => (
          <div key={idx} style={{
            background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '2.5rem', borderRadius: '20px', transition: 'all 0.3s ease', cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>{item.icon}</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: '700' }}>{item.title}</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}