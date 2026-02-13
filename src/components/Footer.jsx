import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/about#team' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Artificial Grass', to: '/services' },
    { label: 'Tennis Courts', to: '/services' },
    { label: 'Gym Flooring', to: '/services' },
    { label: 'Football Turfs', to: '/services' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-mark">⬡</span>
              <span className="footer__logo-text">
                <strong>APEX</strong> SPORTS INFRA
              </span>
            </Link>
            <p className="footer__tagline">
              Transforming spaces into world-class sports facilities across India. Premium infrastructure, built to last.
            </p>
            <div className="footer__socials">
              {['in', 'tw', 'yt', 'ig'].map((s) => (
                <a key={s} href="#!" className="footer__social" aria-label={s}>
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer__col">
              <h4 className="footer__heading">{group}</h4>
              <ul className="footer__list">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Get In Touch</h4>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-icon">📍</span>
                Plot 14, Sector 63, Noida, UP – 201301
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+919004694244">+91 90046 94244</a>
              </li>
              <li>
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:info@apexsportsinfra.com">info@apexsportsinfra.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Apex Sports Infra. All rights reserved.</p>
          <p>Crafted with care for sports infrastructure excellence.</p>
        </div>
      </div>
    </footer>
  );
}
