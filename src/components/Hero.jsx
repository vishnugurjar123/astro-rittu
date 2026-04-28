import React, { useEffect, useState } from 'react';
import './Hero.css';

// ── Astrologer photos (3 photos, har 3 sec mein change hongi) ──
import photo1 from '../assets/mam.jpeg';  // Photo 1
import photo2 from '../assets/mam.jpeg';  // Photo 2 ← apni alag photo lagao
import photo3 from '../assets/mam.jpeg';  // Photo 3 ← apni alag photo lagao

// ── Tumhari actual SVG assets ──
import cancer      from '../assets/cancer.svg';
import capricorn   from '../assets/capricorn.svg';
import gemini      from '../assets/gemini.svg';
import leo         from '../assets/indusastro-leo.svg';
import libra       from '../assets/libra.svg';
import sagittarius from '../assets/sagittarius.svg';
import scorpio     from '../assets/scorpio.svg';
import taurus      from '../assets/taurus.svg';
import virgo       from '../assets/virgo.svg';
import pisces      from '../assets/pisces.svg';
import aquarius    from '../assets/aquarius.svg';
import aries       from '../assets/aries.svg';

const PHOTOS = [photo1, photo2, photo3];

// ── Standard zodiac order: Aries → Pisces ──
const ZODIAC = [
  { name: 'Aries',        svg: aries       },
  { name: 'Taurus',       svg: taurus      },
  { name: 'Gemini',       svg: gemini      },
  { name: 'Cancer',       svg: cancer      },
  { name: 'Leo',          svg: leo         },
  { name: 'Virgo',        svg: virgo       },
  { name: 'Libra',        svg: libra       },
  { name: 'Scorpio',      svg: scorpio     },
  { name: 'Sagittarius',  svg: sagittarius },
  { name: 'Capricorn',    svg: capricorn   },
  { name: 'Aquarius',     svg: aquarius    },
  { name: 'Pisces',       svg: pisces      },
];

/* ─────────────────────────────────────────
   ZodiacWheel — rotating outer wheel SVG
───────────────────────────────────────── */
const ZodiacWheel = () => {
  const cx = 300, cy = 300;
  const R_outer = 275;
  const R_name  = 248;
  const R_sym   = 190;
  const R_inner = 122;

  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className="zodiac-svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="softglow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        <clipPath id="photoClip">
          <circle cx={cx} cy={cy} r={116}/>
        </clipPath>

        <radialGradient id="wheelBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#2A0D00" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#0D0520" stopOpacity="0.60"/>
        </radialGradient>

        <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFB840" stopOpacity="0.30"/>
          <stop offset="70%"  stopColor="#FF8800" stopOpacity="0.10"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>

        {/* Arc text paths for name labels */}
        {ZODIAC.map((_, i) => {
          const angleDeg = i * 30 - 90 + 15;
          const a = angleDeg * (Math.PI / 180);
          const r = R_name;
          const span = 0.20;
          const sa = a - span, ea = a + span;
          return (
            <path
              key={`tp${i}`}
              id={`tp${i}`}
              d={`M ${cx + r * Math.cos(sa)} ${cy + r * Math.sin(sa)}
                  A ${r} ${r} 0 0 1
                  ${cx + r * Math.cos(ea)} ${cy + r * Math.sin(ea)}`}
              fill="none"
            />
          );
        })}
      </defs>

      {/* Background fill */}
      <circle cx={cx} cy={cy} r={R_outer} fill="url(#wheelBg)"/>

      {/* Concentric rings */}
      <circle cx={cx} cy={cy} r={R_outer}      fill="none" stroke="#E8A84A" strokeWidth="2"   strokeOpacity="0.7"  filter="url(#softglow)"/>
      <circle cx={cx} cy={cy} r={R_outer - 6}  fill="none" stroke="#E8A84A" strokeWidth="0.5" strokeOpacity="0.25"/>
      <circle cx={cx} cy={cy} r={R_name  - 16} fill="none" stroke="#E8A84A" strokeWidth="0.8" strokeOpacity="0.35"/>
      <circle cx={cx} cy={cy} r={R_sym   + 22} fill="none" stroke="#E8A84A" strokeWidth="1"   strokeOpacity="0.4"/>
      <circle cx={cx} cy={cy} r={R_sym   - 22} fill="none" stroke="#E8A84A" strokeWidth="0.6" strokeOpacity="0.2"  strokeDasharray="3 5"/>

      {/* 12 sector spokes */}
      {ZODIAC.map((_, i) => {
        const a = (i * 30 - 90) * (Math.PI / 180);
        return (
          <line key={`sp${i}`}
            x1={cx + (R_sym - 22) * Math.cos(a)} y1={cy + (R_sym - 22) * Math.sin(a)}
            x2={cx + R_outer      * Math.cos(a)} y2={cy + R_outer      * Math.sin(a)}
            stroke="#E8A84A" strokeWidth="1" strokeOpacity="0.45"
          />
        );
      })}

      {/* Fine ticks on outer rim */}
      {Array.from({ length: 72 }).map((_, i) => {
        const a     = (i * 5 - 90) * (Math.PI / 180);
        const major = i % 6 === 0;
        const r1    = R_outer - (major ? 14 : 6);
        return (
          <line key={`tk${i}`}
            x1={cx + r1            * Math.cos(a)} y1={cy + r1            * Math.sin(a)}
            x2={cx + (R_outer - 1) * Math.cos(a)} y2={cy + (R_outer - 1) * Math.sin(a)}
            stroke="#E8A84A"
            strokeWidth={major ? 1.4 : 0.5}
            strokeOpacity={major ? 0.65 : 0.22}
          />
        );
      })}

      {/* Per-sector: your SVG icon + arc name */}
      {ZODIAC.map((z, i) => {
        const sectorMidDeg = i * 30 - 90 + 15;
        const a        = sectorMidDeg * (Math.PI / 180);
        const sx       = cx + R_sym * Math.cos(a);
        const sy       = cy + R_sym * Math.sin(a);
        const iconSize = 36; // icon box in SVG units

        return (
          <g key={z.name}>
            {/* Circle behind icon */}
            <circle cx={sx} cy={sy} r="20"
              fill="#3A1000" fillOpacity="0.88"
              stroke="#E8A84A" strokeWidth="1.2" strokeOpacity="0.75"/>
            <circle cx={sx} cy={sy} r="15"
              fill="none" stroke="#E8A84A" strokeWidth="0.4" strokeOpacity="0.3"/>

            {/* Your actual SVG file — tinted golden */}
            <image
              href={z.svg}
              x={sx - iconSize / 2}
              y={sy - iconSize / 2}
              width={iconSize}
              height={iconSize}
              style={{
                filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg)',
                opacity: 0.92,
              }}
            />

            {/* Arc name label */}
            <text
              fontSize="12.5"
              fill="#E8A84A"
              fillOpacity="0.95"
              letterSpacing="2.2"
              fontFamily="'Jost','Montserrat',sans-serif"
              fontWeight="300"
            >
              <textPath href={`#tp${i}`} startOffset="50%" textAnchor="middle">
                {z.name.toUpperCase()}
              </textPath>
            </text>

            {/* Dot at sector boundary on symbol ring */}
            <circle
              cx={cx + (R_sym + 22) * Math.cos((i * 30 - 90) * Math.PI / 180)}
              cy={cy + (R_sym + 22) * Math.sin((i * 30 - 90) * Math.PI / 180)}
              r="2.9" fill="#E8A84A" fillOpacity="0.5"
            />
          </g>
        );
      })}

      {/* Inner glow halo */}
      <circle cx={cx} cy={cy} r={R_inner + 10} fill="url(#innerGlow)"/>

      {/* Inner boundary ring */}
      <circle cx={cx} cy={cy} r={R_inner}
        fill="none" stroke="#E8A84A" strokeWidth="2" strokeOpacity="0.6"
        filter="url(#softglow)"/>

      {/* Dashed inner decorative rings */}
      <circle cx={cx} cy={cy} r="95" fill="none" stroke="#E8A84A" strokeWidth="0.5" strokeOpacity="0.2"  strokeDasharray="4 7"/>
      <circle cx={cx} cy={cy} r="68" fill="none" stroke="#E8A84A" strokeWidth="0.4" strokeOpacity="0.15" strokeDasharray="2 5"/>

      {/* Moon watermark */}
      <text x={cx} y={cy - 24} textAnchor="middle" fontSize="48"
        fill="#E8A84A" fillOpacity="0.12" fontFamily="serif">☽</text>

      {/* Astrologer name + title */}
      <text x={cx} y={cy + 14} textAnchor="middle"
        fontSize="10" fill="#F0D090" fillOpacity="0.8"
        fontFamily="'Jost','Montserrat',sans-serif"
        letterSpacing="3.5" fontWeight="300">
        RITTU SABHARWAL
      </text>
      <text x={cx} y={cy + 32} textAnchor="middle"
        fontSize="7" fill="#E8A84A" fillOpacity="0.5"
        fontFamily="'Jost','Montserrat',sans-serif"
        letterSpacing="2" fontWeight="300">
        VEDIC ASTROLOGER
      </text>

      <circle cx={cx} cy={cy} r="3" fill="#E8A84A" fillOpacity="0.6" filter="url(#softglow)"/>
    </svg>
  );
};

/* ─────────────────────────────────────────
   PhotoSlideshow — 3 photos, crossfade 3s
───────────────────────────────────────── */
const PhotoSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (current + 1) % PHOTOS.length;
      setPrev(current);
      setCurrent(next);
      setTimeout(() => setPrev(null), 700);
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="photo-slideshow">
      <img
        key={`cur-${current}`}
        src={PHOTOS[current]}
        alt="Rittu Sabharwal"
        className="slide-img slide-enter"
      />
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={PHOTOS[prev]}
          alt=""
          className="slide-img slide-exit"
        />
      )}
    </div>
  );
};

/* ─────────────────────────────────────────
   Hero Section
───────────────────────────────────────── */
const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero-grain"/>
      <div className="hero-stars"/>

      <div className="hero-inner container">

        {/* LEFT: Text */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-star">✦</span>
            <span>Vedic Astrology &amp; Spiritual Guidance</span>
          </div>

          <h1 className="hero-title">
            Ancient Wisdom,<br/>
            <em>Modern Healing</em>
          </h1>

          <p className="hero-tagline">
            Unlock the cosmic blueprint of your life — through Vedic Astrology,
            Reiki, Chakra &amp; Crystal Healing, guided by a certified Reiki Grandmaster.
          </p>

          <div className="hero-tags">
            {['Vedic Astrology','Numerology','Vastu','Reiki','Chakra Healing','Crystal Healing'].map(s => (
              <span key={s} className="hero-tag">{s}</span>
            ))}
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Book Consultation
            </button>
            <button className="btn-outline" onClick={() => scrollTo('services')}>
              Know More
            </button>
          </div>

         
        </div>

        {/* RIGHT: Zodiac Wheel */}
        <div className="hero-right">
          <div className="wheel-glow-ring"/>

          <div className="wheel-static-wrapper">
            {/* ROTATING outer wheel */}
            <div className="wheel-spin-outer">
              <ZodiacWheel/>
            </div>

            {/* STATIC center photo slideshow — does NOT rotate */}
            <div className="wheel-center-photo">
              <PhotoSlideshow/>
            </div>
          </div>

          {/* WhatsApp FAB */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hero-wa-fab"
            title="Chat on WhatsApp"
          >
            💬
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;