import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import p from '../assets/mam1.jpeg'
const stats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '5000+', label: 'Lives Transformed' },
  { number: '6', label: 'Healing Modalities' },
  { number: '∞', label: 'Cosmic Wisdom' },
];

const About = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className={`about section-pad ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Image side */}
          <div className="about-visual">
            <div className="about-photo-frame">
              <div className="frame-corner tl" /><div className="frame-corner tr" />
              <div className="frame-corner bl" /><div className="frame-corner br" />
              <div className="about-photo">
                <div className="about-photo-placeholder">
                  <img src={p} alt="" srcset="" />
                </div>
                {/* <img src="/images/rittu.jpg" alt="Rittu Sabharwal" /> */}
              </div>
            </div>
            <div className="about-badge-float">
              <div className="badge-symbol">✦</div>
              <div className="badge-text">
                <strong>Reiki Grandmaster</strong>
                <span>Certified Practitioner</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <div className="section-label">
              <span className="ornament">About Me</span>
            </div>

            <h2 className="about-title">
              A Journey Through<br />
              <em>Stars & Healing</em>
            </h2>

            <div className="gold-divider" style={{ margin: '20px 0' }} />

            <p className="about-text">
              Welcome to a sacred space where ancient Vedic wisdom meets the transformative power of holistic healing. I am <strong>Rittu Sabharwal</strong>, a dedicated practitioner of Vedic Astrology, Numerology, Vastu Shastra, and various healing sciences.
            </p>
            <p className="about-text">
              As a <strong>Reiki Grandmaster</strong>, my journey has been guided by a deep calling to help souls navigate life's challenges through the lens of cosmic understanding. I believe every person carries within them the blueprint of the universe, and it is my honour to help you decode yours.
            </p>
            <p className="about-text">
              Through Chakra balancing, Crystal healing, and precise Vedic chart readings, I guide individuals and families toward clarity, harmony, and abundance — in their homes, businesses, and relationships.
            </p>

            <div className="about-stats">
              {stats.map(s => (
                <div className="stat-item" key={s.label}>
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
