import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import chakras from '../assets/chakras.webp'
import Crystal from '../assets/Crystal.webp'
import Numerology from '../assets/Numerology.jpg'
import reikilevel from '../assets/reiki-level.jpg'
import vastushastra from '../assets/vastushastra.jpg'
import Vedic from '../assets/Vedic.avif'

const AstrologyIcon = () => (
  <svg viewBox="0 0 100 100" className="service-icon">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <circle cx="50" cy="20" r="6" fill="currentColor" className="icon-dot icon-dot-1"/>
    <circle cx="75" cy="35" r="6" fill="currentColor" className="icon-dot icon-dot-2"/>
    <circle cx="75" cy="65" r="6" fill="currentColor" className="icon-dot icon-dot-3"/>
    <circle cx="50" cy="80" r="6" fill="currentColor" className="icon-dot icon-dot-4"/>
    <circle cx="25" cy="65" r="6" fill="currentColor" className="icon-dot icon-dot-5"/>
    <circle cx="25" cy="35" r="6" fill="currentColor" className="icon-dot icon-dot-6"/>
    <circle cx="50" cy="50" r="4" fill="currentColor" className="icon-center"/>
  </svg>
);

const NumerologyIcon = () => (
  <svg viewBox="0 0 100 100" className="service-icon">
    <path d="M50 15 L85 35 L85 65 L50 85 L15 65 L15 35 Z" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon-shape"/>
    <text x="50" y="55" fontSize="28" fontWeight="bold" textAnchor="middle" fill="currentColor" opacity="0.7" className="icon-number">9</text>
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2" className="icon-orbit"/>
  </svg>
);

const VastuIcon = () => (
  <svg viewBox="0 0 100 100" className="service-icon">
    <rect x="20" y="30" width="60" height="50" fill="none" stroke="currentColor" strokeWidth="2" className="icon-house"/>
    <polygon points="50,15 80,30 20,30" fill="none" stroke="currentColor" strokeWidth="2" className="icon-roof"/>
    <rect x="35" y="40" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon-window"/>
    <rect x="53" y="40" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon-window"/>
    <rect x="40" y="58" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon-door"/>
    <line x1="50" y1="58" x2="50" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
);

const ReikiIcon = () => (
  <svg viewBox="0 0 100 100" className="service-icon">
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon-outer"/>
    <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon-middle" opacity="0.7"/>
    <circle cx="50" cy="50" r="16" fill="currentColor" opacity="0.8" className="icon-center-glow"/>
    <g className="icon-rays">
      <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="82" y1="50" x2="72" y2="50" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="50" y1="90" x2="50" y2="80" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="18" y1="50" x2="28" y2="50" stroke="currentColor" strokeWidth="1.5"/>
    </g>
  </svg>
);

const ChakraIcon = () => (
  <svg viewBox="0 0 100 100" className="service-icon">
    <circle cx="50" cy="25" r="8" fill="currentColor" className="chakra chakra-1"/>
    <circle cx="50" cy="40" r="8" fill="currentColor" className="chakra chakra-2"/>
    <circle cx="50" cy="55" r="8" fill="currentColor" className="chakra chakra-3"/>
    <circle cx="50" cy="70" r="8" fill="currentColor" className="chakra chakra-4"/>
    <line x1="20" y1="25" x2="40" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <line x1="60" y1="25" x2="80" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <line x1="20" y1="55" x2="40" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <line x1="60" y1="55" x2="80" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <line x1="50" y1="10" x2="50" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.3" className="chakra-spine"/>
  </svg>
);

const CrystalIcon = () => (
  <svg viewBox="0 0 100 100" className="service-icon">
    <polygon points="50,10 70,35 65,75 35,75 30,35" fill="none" stroke="currentColor" strokeWidth="1.8" className="icon-crystal"/>
    <polygon points="50,10 70,35 65,75 35,75 30,35" fill="currentColor" opacity="0.15"/>
    <line x1="35" y1="75" x2="65" y2="75" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
    <circle cx="50" cy="45" r="3" fill="currentColor" opacity="0.8" className="icon-highlight"/>
  </svg>
);

const services = [
  {
    icon: <AstrologyIcon />,
    img: Vedic,
    title: 'Vedic Astrology',
    subtitle: 'Jyotish Vidya',
    description: 'Unlock the cosmic blueprint of your life through precise Vedic chart readings. Understand your destiny, karma, relationships, career, and life path.',
    offerings: ['Birth Chart Analysis', 'Transit Predictions', 'Relationship Compatibility', 'Career & Finance Guidance', 'Muhurat Selection'],
    tags: ['Birth Chart', 'Transits', 'Muhurat'],
  },
  {
    icon: <NumerologyIcon />,
    img: Numerology,
    title: 'Numerology',
    subtitle: 'Numbers of Destiny',
    description: 'Your birth date and name carry a unique vibrational frequency. Decode the hidden patterns shaping your personality, relationships, and life cycles.',
    offerings: ['Life Path Number', 'Name Numerology', 'Personal Year Forecast', 'Business Name Analysis', 'Lucky Numbers & Dates'],
    tags: ['Life Path', 'Name Analysis', 'Forecast'],
  },
  {
    icon: <VastuIcon />,
    img: vastushastra,
    title: 'Vastu Shastra',
    subtitle: 'Residential & Commercial',
    description: 'Transform your living and working spaces into powerhouses of positive energy aligned with cosmic principles for harmony and prosperity.',
    offerings: ['Home Vastu Analysis', 'Commercial Vastu', 'Office Layout Guidance', 'Plot Evaluation', 'Remedies & Corrections'],
    tags: ['Home', 'Office', 'Remedies'],
  },
  {
    icon: <ReikiIcon />,
    img: reikilevel,
    title: 'Reiki Healing',
    subtitle: 'Reiki Grandmaster',
    description: 'As a certified Reiki Grandmaster, I channel universal life force energy to remove energetic blockages and restore your body\'s natural balance.',
    offerings: ['Distance Reiki Healing', 'Chakra Balancing', 'Aura Cleansing', 'Emotional Healing', 'Reiki Attunements'],
    tags: ['Distance', 'Chakra', 'Aura'],
  },
  {
    icon: <ChakraIcon />,
    img: chakras,
    title: 'Chakra Healing',
    subtitle: 'Energy Center Activation',
    description: 'Blockages in your 7 chakras manifest as physical, emotional, and spiritual imbalances. Restore harmony through targeted chakra healing.',
    offerings: ['Chakra Assessment', 'Root to Crown Healing', 'Meditation Guidance', 'Chakra Activation', 'Energy Cord Cutting'],
    tags: ['Assessment', 'Activation', 'Meditation'],
  },
  {
    icon: <CrystalIcon />,
    img: Crystal,
    title: 'Crystal Healing',
    subtitle: 'Vibrational Medicine',
    description: 'Harness the precise vibrational properties of gemstones to support healing, protection, and manifestation through intentional crystal sessions.',
    offerings: ['Crystal Grid Design', 'Personal Crystal Selection', 'Healing Sessions', 'Space Clearing', 'Crystal Meditation'],
    tags: ['Crystal Grid', 'Selection', 'Sessions'],
  },
];

const Services = () => {
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="services"
      className={`services section-pad ${visible ? 'visible' : ''}`}
      ref={ref}
    >
      <div className="services-bg-effect" />
      <div className="container">
        <div className="section-header">
          <p className="section-label"><span className="ornament">✨ Our Services</span></p>
          <h2 className="section-title">Sacred Healing<br /><em>Modalities</em></h2>
          <div className="gold-divider" style={{ marginTop: 20 }} />
          <p className="section-sub">
            Six pathways to transformation — each a doorway to deeper understanding,<br />healing, and cosmic alignment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card ${flipped === i ? 'flipped' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div className="card-inner">

                {/* ── FRONT ── */}
                <div className="card-front">
                  {/* Top image area */}
                  <div className="card-img-wrap">
                    <img src={s.img} alt={s.title} className="card-img" />
                    <div className="card-img-overlay" />
                    {/* Icon floated bottom-left of image */}
                    <div className="card-img-icon">
                      {s.icon}
                    </div>
                    {/* Badge top-right */}
                    <span className="card-img-badge">{s.subtitle}</span>
                  </div>

                  {/* Bottom text area */}
                  <div className="card-front-body">
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-desc">{s.description}</p>
                    <div className="card-tags">
                      {s.tags.map(t => (
                        <span key={t} className="card-tag">{t}</span>
                      ))}
                    </div>
                    <div className="card-flip-hint">
                      <span>Tap to explore</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v6m0 0l-2.5-2.5M7 7l2.5-2.5M2 10.5h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* ── BACK ── */}
                <div className="card-back">
                  <div className="card-back-header">
                    <div className="card-back-icon">{s.icon}</div>
                    <div>
                      <h3 className="card-back-title">{s.title}</h3>
                      <p className="card-back-sub">{s.subtitle}</p>
                    </div>
                  </div>
                  <p className="card-back-label">What's included</p>
                  <ul className="offerings-list">
                    {s.offerings.map((o, idx) => (
                      <li key={o} style={{ animationDelay: `${idx * 0.07}s` }}>
                        <span className="offering-dot" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="card-book-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    ✨ Book Session
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;