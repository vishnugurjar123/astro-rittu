import React, { useEffect, useRef, useState } from 'react';
import './Videos.css';

// Add your video data here:
const videos = [
  {
    id: 1,
    title: 'Understanding Your Birth Chart',
    topic: 'Vedic Astrology',
    duration: '15:42',
    // For YouTube: youtube: 'YOUR_VIDEO_ID'
    // For local: src: '/videos/video1.mp4'
    thumbnail: null, // Add: thumbnail: '/images/thumb1.jpg'
    youtube: '', // Add your YouTube video ID here
  },
  {
    id: 2,
    title: 'Reiki Healing — An Introduction',
    topic: 'Reiki Healing',
    duration: '12:18',
    thumbnail: null,
    youtube: '',
  },
  {
    id: 3,
    title: 'Chakra Balancing Meditation',
    topic: 'Chakra Healing',
    duration: '22:05',
    thumbnail: null,
    youtube: '',
  },
  {
    id: 4,
    title: 'Vastu Tips for Your Home',
    topic: 'Vastu Shastra',
    duration: '18:30',
    thumbnail: null,
    youtube: '',
  },
  {
    id: 5,
    title: 'Crystals for Beginners',
    topic: 'Crystal Healing',
    duration: '14:22',
    thumbnail: null,
    youtube: '',
  },
  {
    id: 6,
    title: 'Numerology — Decode Your Life',
    topic: 'Numerology',
    duration: '19:14',
    thumbnail: null,
    youtube: '',
  },
];

const Videos = () => {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="videos" className={`videos section-pad ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label"><span className="ornament">Learn & Explore</span></p>
          <h2 className="section-title">Wisdom Videos &<br /><em>Healing Sessions</em></h2>
          <div className="gold-divider" style={{ marginTop: 20 }} />
          <p className="section-sub">
            Explore my collection of educational videos on Vedic wisdom, healing practices, and spiritual guidance.
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((vid, i) => (
            <div
              key={vid.id}
              className="video-card"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setPlaying(vid)}
            >
              <div className="video-thumb">
                {vid.thumbnail ? (
                  <img src={vid.thumbnail} alt={vid.title} />
                ) : (
                  <div className="video-placeholder">
                    <div className="video-symbol">▶</div>
                    <p>Video {vid.id}</p>
                    <small>Add thumbnail</small>
                  </div>
                )}
                <div className="play-overlay">
                  <div className="play-btn">▶</div>
                </div>
                <span className="video-duration">{vid.duration}</span>
              </div>
              <div className="video-meta">
                <span className="video-topic">{vid.topic}</span>
                <h4 className="video-title">{vid.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Add instructions */}
        <div className="cert-instructions" style={{ marginTop: 32 }}>
          <div className="inst-icon">🎬</div>
          <p>
            <strong>To add your videos:</strong> Add your YouTube video IDs to the <code>youtube</code> field, 
            or place local video files in <code>public/videos/</code> and update the <code>src</code> field. 
            Add thumbnails in <code>public/images/</code>.
          </p>
        </div>

        {/* Video Modal */}
        {playing && (
          <div className="video-modal" onClick={() => setPlaying(null)}>
            <div className="video-modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setPlaying(null)}>✕</button>
              <div className="video-player">
                {playing.youtube ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${playing.youtube}?autoplay=1`}
                    title={playing.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div className="video-placeholder modal-placeholder">
                    <div className="video-symbol large-play">▶</div>
                    <p>{playing.title}</p>
                    <small>Add your YouTube ID or video source to play this video</small>
                  </div>
                )}
              </div>
              <div className="modal-info">
                <span className="video-topic">{playing.topic}</span>
                <h3>{playing.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Videos;
