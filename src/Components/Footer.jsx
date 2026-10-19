import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Designed with Heart & Gremlins Note */}
        <p style={styles.creditText}>
          Designed with <span style={styles.heart}>❤️</span> by Dineth Rajapaksha.
          <span style={styles.gremlinsText}> NO GREMLINS WERE HARMED IN THE MAKING OF THIS SITE.</span>
        </p>

        {/* Copyright Notice */}
        <p style={styles.copyrightText}>
          © {new Date().getFullYear()} SL Dynamics. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '30px 20px 40px 20px',
    backgroundColor: '#ffffff', // හෝ ඔයාගේ footer background color එක
    borderTop: '1px solid #f1f5f9',
    textAlign: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  container: {
    maxWidth: '1150px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  },
  creditText: {
   fontSize: '13px',
    color: '#64748b',
    fontWeight: '500',
    margin: 0,
    letterSpacing: '0.2px',
    display: 'inline-flex', // inline-flex 
    alignItems: 'center',    // අකුරු සහ Icon එක Vertical Center
    justifyContent: 'center',
    gap: '7px',             //  Heart එක දෙපැත්තට Space
    flexWrap: 'wrap'
  },
  heart: {
   color: '#ef4444',
    fontSize: '14px',
    display: 'inline-block',
    transform: 'translateY(4px)', //  අවශ්‍ය නම් pixel 1ක් හෝ 2ක් පහළට ගන්න translateY(1px) හෝ (2px) භාවිත කරන්න
    lineHeight: '1'
  },
  gremlinsText: {
    color: '#94a3b8',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    marginLeft: '4px'
  },
  copyrightText: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: 0,
    fontWeight: '400'
  }
};