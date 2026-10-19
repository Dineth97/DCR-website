import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // උඹේ Actual Contact Info මෙතනට දාන්න
  const myEmail = "dineth.rajapaksha977@gmail.com";
  const myWhatsAppNumber = "94777079176";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Direct Mailto Trigger as a seamless fall-back
    const subject = encodeURIComponent(formData.subject || `New Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.container}>
        
        {/* Title */}
        <h2 style={styles.mainTitle}>Get In Touch</h2>
        <p style={styles.subTitle}>Have a project in mind, legal-tech inquiry, or just want to say hi? Let's connect.</p>

        {/* 2-Column Split Layout */}
        <div style={styles.wrapper}>
          
          {/* Left Side: Contact Cards */}
          <div style={styles.infoColumn}>
            
            <div style={styles.statusBadge}>
              <span style={styles.statusDot}></span> Available for Freelance & Tech Collaborations
            </div>

            <h3 style={styles.infoHeading}>Let's discuss something <span style={styles.highlightText}>great</span> together.</h3>
            <p style={styles.infoDesc}>
              Feel free to reach out directly via WhatsApp, email, or by filling out the form. I typically respond within a few hours.
            </p>

            <div style={styles.contactCardsList}>
              
              {/* Card 1: Email */}
              <a href={`mailto:${myEmail}`} style={styles.infoCard}>
                <div style={styles.infoIconBg}>✉️</div>
                <div>
                  <div style={styles.infoLabel}>Direct Email</div>
                  <div style={styles.infoValue}>{myEmail}</div>
                </div>
              </a>

              {/* Card 2: WhatsApp */}
              <a 
                href={`https://api.whatsapp.com/send?phone=${myWhatsAppNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.infoCard}
              >
                <div style={{ ...styles.infoIconBg, backgroundColor: '#f0fdf4', color: '#16a34a' }}>💬</div>
                <div>
                  <div style={styles.infoLabel}>WhatsApp / Direct Call</div>
                  <div style={styles.infoValue}>+94 77 70 79 176</div>
                </div>
              </a>

              {/* Card 3: Location */}
              <div style={styles.infoCard}>
                <div style={{ ...styles.infoIconBg, backgroundColor: '#fef3c7', color: '#d97706' }}>📍</div>
                <div>
                  <div style={styles.infoLabel}>Location</div>
                  <div style={styles.infoValue}>Sabaragamuwa, Sri Lanka</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side: Elegant Form */}
          <div style={styles.formColumn}>
            <form onSubmit={handleSubmit} style={styles.formCard}>
              
              <h4 style={styles.formTitle}>Send a Message</h4>

              {isSubmitted && (
                <div style={styles.successBanner}>
                  ✓ Opening your default mail app to send the message!
                </div>
              )}

              {/* Name Input */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...styles.input,
                    borderColor: focusedField === 'name' ? '#2563eb' : '#e2e8f0',
                    boxShadow: focusedField === 'name' ? '0 0 0 4px rgba(37, 99, 235, 0.1)' : 'none'
                  }}
                />
              </div>

              {/* Email Input */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...styles.input,
                    borderColor: focusedField === 'email' ? '#2563eb' : '#e2e8f0',
                    boxShadow: focusedField === 'email' ? '0 0 0 4px rgba(37, 99, 235, 0.1)' : 'none'
                  }}
                />
              </div>

              {/* Subject Input */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Mobile App Project / Web Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...styles.input,
                    borderColor: focusedField === 'subject' ? '#2563eb' : '#e2e8f0',
                    boxShadow: focusedField === 'subject' ? '0 0 0 4px rgba(37, 99, 235, 0.1)' : 'none'
                  }}
                />
              </div>

              {/* Message Input */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me a bit about your idea or project..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...styles.textarea,
                    borderColor: focusedField === 'message' ? '#2563eb' : '#e2e8f0',
                    boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(37, 99, 235, 0.1)' : 'none'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" style={styles.submitBtn}>
                Send Message ➔
              </button>

            </form>
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
    marginBottom: '60px'
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '40px',
    alignItems: 'start'
  },
  infoColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    color: '#15803d',
    fontSize: '12px',
    fontWeight: '600',
    padding: '6px 14px',
    borderRadius: '20px',
    width: 'fit-content',
    marginBottom: '20px'
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#22c55e'
  },
  infoHeading: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: '1.3',
    margin: '0 0 14px 0'
  },
  highlightText: {
    color: '#2563eb'
  },
  infoDesc: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '32px'
  },
  contactCardsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  infoCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 20px',
    borderRadius: '16px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    textDecoration: 'none',
    transition: 'all 0.2s ease'
  },
  infoIconBg: {
    width: '46px',
    height: '46px',
    borderRadius: '12px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    flexShrink: 0
  },
  infoLabel: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  infoValue: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1e293b',
    marginTop: '2px'
  },
  formColumn: {
    width: '100%'
  },
  formCard: {
    backgroundColor: '#ffffff',
    border: '1.5px solid #e2e8f0',
    borderRadius: '24px',
    padding: '36px 30px',
    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)'
  },
  formTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 24px 0'
  },
  successBanner: {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    color: '#15803d',
    padding: '12px 16px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '20px'
  },
  inputGroup: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#334155'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    fontSize: '14px',
    color: '#0f172a',
    outline: 'none',
    backgroundColor: '#f8fafc',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    fontSize: '14px',
    color: '#0f172a',
    outline: 'none',
    backgroundColor: '#f8fafc',
    transition: 'all 0.2s ease',
    resize: 'vertical',
    boxSizing: 'border-box'
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '15px',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
    marginTop: '10px'
  }
};