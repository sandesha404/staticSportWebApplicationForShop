import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const contactInfo = [
  { icon: '📍', label: 'Visit Us', value: 'Plot 14, Sector 63, Noida\nUttar Pradesh – 201301', link: null },
  { icon: '📞', label: 'Call Us', value: '+91 90046 94244', link: 'tel:+919004694244' },
  { icon: '✉️', label: 'Email Us', value: 'info@apexsportsinfra.com', link: 'mailto:info@apexsportsinfra.com' },
  { icon: '🕐', label: 'Business Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM', link: null },
];

export default function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Contact page header">
        <div className="container">
          <span className="page-hero__tag">Reach Out</span>
          <h1 className="page-hero__title">CONTACT US</h1>
          <p className="page-hero__subtitle">
            Ready to start your project? Get in touch and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main contact section ── */}
      <section className="section contact-section" aria-labelledby="contact-heading">
        <div className="container contact-layout">

          {/* Left: Info */}
          <aside className="contact-info" aria-label="Contact information">
            <h2 className="contact-info__title">Get In Touch</h2>
            <p className="contact-info__body">
              Whether you have a fully planned project or just an idea, we'd love to hear from you. Our team will help you figure out the best solution for your space and budget.
            </p>

            <div className="contact-info__cards">
              {contactInfo.map(({ icon, label, value, link }) => (
                <div key={label} className="contact-info__card">
                  <span className="contact-info__icon">{icon}</span>
                  <div>
                    <span className="contact-info__label">{label}</span>
                    {link ? (
                      <a href={link} className="contact-info__value contact-info__value--link">
                        {value}
                      </a>
                    ) : (
                      <span className="contact-info__value">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="contact-map" aria-label="Location map">
              <div className="contact-map__placeholder">
                <div className="contact-map__overlay">
                  <span className="contact-map__pin" aria-hidden="true">📍</span>
                  <span className="contact-map__text">Sector 63, Noida, UP</span>
                  <a
                    href="https://maps.google.com/?q=Sector+63+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary contact-map__btn"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              {/* Embed: replace src with real Google Maps embed URL */}
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3068853745136!2d77.37274281508303!3d28.626734082423003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a8c3b27fef%3A0xca7a93c24f22d3e5!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="contact-map__iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>

          {/* Right: Form */}
          <div className="contact-form-wrap" aria-label="Contact form">
            <h2 className="contact-form-title">Send Us a Message</h2>
            <p className="contact-form-sub">
              Fill out the form below and a member of our team will reach out to you shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FAQ strip ── */}
      <section className="section section--dark faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <h2 id="faq-heading" className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              { q: 'How long does a typical project take?', a: 'Most projects are completed within 7–21 working days depending on size and surface type. We provide a detailed timeline at the time of quotation.' },
              { q: 'Do you offer a warranty?', a: 'Yes. All our installations come with a 3–5 year material warranty and a 1-year workmanship warranty, depending on the product.' },
              { q: 'Do you work outside Uttar Pradesh?', a: 'Absolutely. We have active project teams in 18+ states across India. Contact us with your location and we will assign a regional team.' },
              { q: 'Whats the minimum project size?', a: 'We take on projects of all sizes — from a single badminton court to full multi-sport complexes. No project is too small.' },
            ].map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3 className="faq-item__q">{q}</h3>
                <p className="faq-item__a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
