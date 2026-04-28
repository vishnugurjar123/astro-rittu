import React, { useState } from 'react';
import './Contact.css';

const services = ['Vedic Astrology', 'Numerology', 'Vastu Shastra', 'Reiki Healing', 'Chakra Healing', 'Crystal Healing', 'Other'];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp integration
    const msg = `Hello Rittu Ji,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919999999999?text=${msg}`, '_blank'); // Replace with Rittu's number
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="section-header">
          <p className="section-label"><span className="ornament">Get In Touch</span></p>
          <h2 className="section-title">Begin Your<br /><em>Healing Journey</em></h2>
          <div className="gold-divider" style={{ marginTop: 20 }} />
          <p className="section-sub">
            Ready to unlock the cosmic wisdom that guides your life? Reach out to schedule your personal consultation.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-symbol">✦</span>
                <h3>Connect With Me</h3>
              </div>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="ci-icon">📱</div>
                  <div className="ci-content">
                    <span className="ci-label">WhatsApp / Call</span>
                    {/* Replace with your number */}
                    <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="ci-value">+91 99999 99999</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon">📷</div>
                  <div className="ci-content">
                    <span className="ci-label">Instagram</span>
                    <a href="https://www.instagram.com/astrorittusabharwal/" target="_blank" rel="noreferrer" className="ci-value">@astrorittusabharwal</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon">✉️</div>
                  <div className="ci-content">
                    <span className="ci-label">Email</span>
                    {/* Replace with your email */}
                    <a href="mailto:rittu@example.com" className="ci-value">rittu@example.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="ci-icon">📍</div>
                  <div className="ci-content">
                    <span className="ci-label">Consultations</span>
                    <span className="ci-value">In-Person & Online</span>
                  </div>
                </div>
              </div>

              <div className="wa-btn-wrap">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="wa-btn"
                >
                  <span>💬</span> Chat on WhatsApp
                </a>
              </div>

              <div className="availability-note">
                <span className="avail-dot" />
                <span>Available Mon – Sat, 10 AM – 7 PM IST</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="success-symbol">✦</div>
                <h3>Message Sent!</h3>
                <p>Your consultation request has been forwarded to WhatsApp. Rittu Ji will contact you soon.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: 24 }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service of Interest *</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about what you're seeking guidance on..." value={form.message} onChange={handleChange} rows={4} />
                </div>

                <button type="submit" className="form-submit">
                  <span>✦</span> Book Consultation via WhatsApp
                </button>

                <p className="form-note">
                  This form will redirect to WhatsApp with your details pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
