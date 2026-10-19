import React, { useState } from 'react';

// Pure Inline SVG for Batakola Achchi Flying (Cross-browser compatible asset)
const FlyingWitchSVG = () => (
  <svg 
    width="150px" 
    height="100px" 
    viewBox="0 0 120 80" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
  >
    {/* Broom (කොස්ස) */}
    <path d="M10,65 L110,35" stroke="#8B4513" strokeWidth="5" strokeLinecap="round"/>
    <path d="M95,30 L115,25 L118,35 L100,45" fill="#DAA520" stroke="#CD853F" strokeWidth="1"/>
    
    {/* Witch Body (බටකොළ ආච්චී) */}
    <circle cx="60" cy="40" r="10" fill="#FFE4C4"/> {/* Head */}
    <polygon points="50,45 70,45 75,70 45,70" fill="#2F4F4F"/> {/* Hat Base */}
    <polygon points="60,20 75,45 45,45" fill="#2F4F4F"/> {/* Hat Point */}
    
    {/* Batakola Wattiya (බටකොළ වට්ටිය) */}
    <ellipse cx="60" cy="55" rx="15" ry="5" fill="#DEB887" stroke="#8B4513" strokeWidth="1"/>
    <ellipse cx="60" cy="53" rx="12" ry="3" fill="#228B22"/> {/* బటකොළ */}
    
    {/* Leg & Foot */}
    <path d="M55,60 L50,75 L60,75" fill="#8B4513"/> 
  </svg>
);

// Pure Inline SVG for Batakola Badge Icon (for the popup/modal)
const BatakolaBadgeSVG = () => (
  <svg 
    width="60px" 
    height="60px" 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
  >
    {/* Hat (බටකොළ තොප්පිය) */}
    <path d="M10,60 Q50,20 90,60" fill="none" stroke="#2F4F4F" strokeWidth="6" strokeLinecap="round"/>
    <path d="M50,10 L90,60" fill="none" stroke="#2F4F4F" strokeWidth="4"/>
    <path d="M10,60 L50,10" fill="none" stroke="#2F4F4F" strokeWidth="4"/>

    {/* Batakola Wattiya (බටකොළ වට්ටිය) */}
    <ellipse cx="50" cy="70" rx="40" ry="15" fill="#DEB887" stroke="#8B4513" strokeWidth="2"/>
    <ellipse cx="50" cy="68" rx="35" ry="12" fill="#228B22"/> {/* బటකොළ */}
  </svg>
);

export default function BatakolaAchchiAd() {
  const [isFlying, setIsFlying] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  const triggerFly = () => {
    if (isFlying) return;
    setIsFlying(true);
    setShowOffer(false);

    // Animation timing - matches CSS flyAcross keyframes
    setTimeout(() => {
      setShowOffer(true);
    }, 2500); // Wait for flight to end
  };

  const closeOffer = () => {
    setShowOffer(false);
    setIsFlying(false);
  };

  return (
    <div style={styles.container}>
      {/* Easter Egg Trigger Section */}
      <div style={styles.adBox}>
        <div style={styles.contentWrapper}>
          <div style={styles.badge}>
            <span role="img" aria-label="gift">🎁</span> SECRET EASTER EGG
          </div>
          <h3 style={styles.title}>Looking for Special Discounts & Offers?</h3>
          <p style={styles.desc}>Click the magic button below to summon Witch on her flying broom!</p>
          <button 
            onClick={triggerFly} 
            style={{
              ...styles.clickBtn,
              transform: isFlying ? 'scale(0.95)' : 'scale(1)',
              opacity: isFlying ? 0.7 : 1
            }}
            disabled={isFlying}
          >
            {isFlying ? 'Broomstick Witch is flying...' : '✨ Click Me! (Surprise Offer)'}
          </button>
        </div>
      </div>

      {/* Batakola Achchi Flying Area */}
      {isFlying && (
        <div style={styles.flyingArea}>
          <div style={{
            ...styles.witchContainer,
            animation: 'flyAcross 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards'
          }}>
            <FlyingWitchSVG />
          </div>
        </div>
      )}

      {/* Offer Popup Modal */}
      {showOffer && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              {/* මෙතන Glitch වුණ Emojis වෙනුවට Pure Inline SVG Icon එකක් දැම්මා */}
              <BatakolaBadgeSVG />
              <h2 style={styles.modalTitle}>Special annoucement from Azkaban Witch</h2>
            </div>
            <p style={styles.modalText}>
              "Special offer broh! <b>Please don't tell to Harry!</b>"
            </p>
            <button onClick={closeOffer} style={styles.closeBtn}>
              Thanks Witch! (Close)
            </button>
          </div>
        </div>
      )}

      {/* CSS Keyframe Animations (Cross-browser supported) */}
      <style>
        {`
          @keyframes flyAcross {
            0% {
              transform: translateX(-200px) translateY(50px) rotate(-15deg) scale(0.8);
              opacity: 0;
            }
            15% {
              opacity: 1;
              transform: translateX(-50px) translateY(30px) rotate(-10deg) scale(1);
            }
            50% {
              transform: translateX(50vw) translateY(-60px) rotate(15deg) scale(1.1);
            }
            85% {
              opacity: 1;
              transform: translateX(calc(100vw - 150px)) translateY(30px) rotate(-10deg) scale(1);
            }
            100% {
              transform: translateX(120vw) translateY(50px) rotate(-15deg) scale(0.8);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    padding: '25px 0',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 10,
  },
  adBox: {
    maxWidth: '1110px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
    border: '2px dashed #34d399',
    borderRadius: '24px',
    padding: '30px',
    textAlign: 'center',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02), 0 10px 30px rgba(52, 211, 153, 0.1)',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  badge: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#059669',
    backgroundColor: '#d1fae5',
    padding: '5px 14px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#065f46',
    margin: 0,
  },
  desc: {
    fontSize: '14px',
    color: '#047857',
    margin: '0 0 12px 0',
    lineHeight: '1.5',
  },
  clickBtn: {
    backgroundColor: '#059669',
    color: '#ffffff',
    border: 'none',
    padding: '12px 28px',
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '14px',
    cursor: 'pointer',
    boxShadow: '0 6px 15px rgba(5, 150, 105, 0.3)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  flyingArea: {
    position: 'absolute',
    top: '30px',
    left: 0,
    width: '100vw',
    height: '150px',
    pointerEvents: 'none',
    zIndex: 999,
    overflow: 'hidden',
  },
  witchContainer: {
    position: 'absolute',
    transformOrigin: 'center center',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(7px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '28px',
    maxWidth: '450px',
    width: '90%',
    textAlign: 'center',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    animation: 'popIn 0.35s cubic-bezier(0.17, 0.67, 0.43, 1.2)',
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#065f46',
    margin: 0,
    lineHeight: '1.3',
  },
  modalText: {
    fontSize: '15px',
    color: '#334155',
    lineHeight: '1.65',
    marginBottom: '30px',
  },
  closeBtn: {
    backgroundColor: '#059669',
    color: '#ffffff',
    border: 'none',
    padding: '12px 28px',
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '14px',
    cursor: 'pointer',
    boxShadow: '0 6px 15px rgba(5, 150, 105, 0.2)',
  },
};