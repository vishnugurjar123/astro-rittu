import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-symbol">✦</span>
                <div>
                  <span className="logo-name">Rittu Sabharwal</span>
                  <span className="logo-sub">Vedic Astrology & Healing</span>
                </div>
              </div>
              <p className="footer-tagline">
                Bridging the ancient Vedic cosmos with modern healing science — guiding souls to clarity, harmony, and abundance.
              </p>
              <div className="footer-social">
                <a href="https://www.instagram.com/astrorittusabharwal/" target="_blank" rel="noreferrer" className="social-btn">
                  📷 Instagram
                </a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="social-btn wa">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {['home', 'about', 'services', 'certificates', 'videos', 'contact'].map(id => (
                  <li key={id}>
                    <button onClick={() => scrollTo(id)}>
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-services">
              <h4>Services</h4>
              <ul>
                {['Vedic Astrology', 'Numerology', 'Vastu Shastra', 'Reiki Healing', 'Chakra Healing', 'Crystal Healing'].map(s => (
                  <li key={s}><button onClick={() => scrollTo('services')}>✦ {s}</button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-divider" />
          <div className="footer-bottom-row">
            <p className="footer-copy">
              © {new Date().getFullYear()} Rittu Sabharwal. All rights reserved.
            </p>
            <p className="footer-made">
              Made with ✦ and cosmic energy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
