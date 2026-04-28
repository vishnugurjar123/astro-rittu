import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Certificates.css';
import Navbar from './Navbar';

import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpeg';
import c4 from '../assets/c4.jpeg';
import c5 from '../assets/c5.jpeg';

const certs = [
  { id: 1, title: 'Crystal Reiki Master/Teacher',      issuer: 'Lisa Powers',      year: '2020', img: c3 },
  { id: 2, title: 'Reiki Distance Healing Specialist', issuer: 'Natural Healer',   year: '2020', img: c4 },
  { id: 3, title: 'Usui Reiki Level I (Shoden)',       issuer: 'Usui Ryoho Reiki', year: '2020', img: c1 },
  { id: 4, title: 'Usui Reiki Level II (Okuden)',      issuer: 'Usui Ryoho Reiki', year: '2020', img: c2 },
  { id: 5, title: 'Pendulum Dowsing Course',           issuer: 'ASTRRO PARIVAAR',  year: '2021', img: c5 },
];

const Certificates = () => {
  const [visible, setVisible]     = useState(false);
  const [selected, setSelected]   = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const timerRef   = useRef(null);
  const pausedRef  = useRef(false);

  /* ── Scroll-in animation ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* ── ESC closes lightbox ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null); };
    if (selected) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  /* ── Auto-scroll logic ── */
  const scrollToCard = useCallback((idx) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx];
    if (!card) return;
    const cardLeft   = card.offsetLeft;
    const cardWidth  = card.offsetWidth;
    const trackWidth = track.offsetWidth;
    track.scrollTo({
      left: cardLeft - (trackWidth / 2) + (cardWidth / 2),
      behavior: 'smooth',
    });
    setActiveIdx(idx);
  }, []);

  const advance = useCallback(() => {
    if (pausedRef.current) return;
    setActiveIdx((prev) => {
      const next = (prev + 1) % certs.length;
      scrollToCard(next);
      return next;
    });
  }, [scrollToCard]);

  useEffect(() => {
    timerRef.current = setInterval(advance, 2800);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  const pauseAuto  = () => { pausedRef.current = true; };
  const resumeAuto = () => { pausedRef.current = false; };

  /* ── Lightbox portal ── */
  const lightboxPortal = createPortal(
    <div
      className={`cert-lightbox-wrap ${selected ? 'open' : ''}`}
      onClick={() => setSelected(null)}
    >
      <div className="lightbox-navbar" onClick={(e) => e.stopPropagation()}>
        <Navbar />
      </div>

      <div className="lightbox-body">
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            ✕
          </button>

          {selected && (
            <>
              <div className="lightbox-img">
                {selected.img ? (
                  <img src={selected.img} alt={selected.title} className="full-cert-img" />
                ) : (
                  <div className="cert-placeholder large">
                    <div className="cert-seal large-seal">✦</div>
                    <p>{selected.title}</p>
                  </div>
                )}
              </div>
              <div className="lightbox-info">
                <h3>{selected.title}</h3>
                <p>{selected.issuer}</p>
                <span className="cert-year">{selected.year}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <section
        id="certificates"
        className={`certificates section-pad ${visible ? 'visible' : ''}`}
        ref={sectionRef}
      >
        <div className="container">
          <div className="section-header">
            <p className="section-label"><span className="ornament">Credentials</span></p>
            <h2 className="section-title">Certifications &<br /><em>Achievements</em></h2>
            <div className="gold-divider" style={{ marginTop: 20 }} />
            <p className="section-sub">
              Years of dedicated study, practice, and certification from renowned institutions worldwide.
            </p>
          </div>

          {/* ── Scroller track ── */}
          <div
            className="cert-scroller"
            onMouseEnter={pauseAuto}
            onMouseLeave={resumeAuto}
            onTouchStart={pauseAuto}
            onTouchEnd={resumeAuto}
          >
            <div className="cert-track" ref={trackRef}>
              {certs.map((cert, i) => (
                <div
                  key={cert.id}
                  className={`cert-card ${activeIdx === i ? 'active-card' : ''}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  onClick={() => setSelected(cert)}
                >
                  <div className="cert-image-wrap">
                    {cert.img ? (
                      <img src={cert.img} alt={cert.title} className="cert-actual-img" />
                    ) : (
                      <div className="cert-placeholder">
                        <div className="cert-seal">✦</div>
                        <p className="cert-placeholder-text">Certificate {cert.id}</p>
                      </div>
                    )}
                    <div className="cert-overlay">
                      <span>View Certificate</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ── Dot indicators ── */}
          <div className="cert-dots">
            {certs.map((_, i) => (
              <button
                key={i}
                className={`cert-dot ${activeIdx === i ? 'active' : ''}`}
                onClick={() => { pauseAuto(); scrollToCard(i); }}
                aria-label={`Go to certificate ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {lightboxPortal}
    </>
  );
};

export default Certificates;