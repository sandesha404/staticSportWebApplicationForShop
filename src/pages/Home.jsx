import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { services, projects, stats, clients } from '../data/siteData';
import './Home.css';

// ── Simple intersection observer hook ──
function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

export default function Home() {
  const aboutRef = useRef(null);
  const statsRef = useRef(null);

  useReveal(aboutRef);
  useReveal(statsRef);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero banner">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1600&q=80"
            alt="Sports infrastructure background"
            className="hero__bg-img"
          />
          <div className="hero__bg-overlay" />
        </div>

        <div className="container hero__content">
          <span className="hero__eyebrow">India's Premier Sports Infrastructure Company</span>
          <h1 className="hero__title">
            BUILD FIELDS<br />
            <span className="hero__title-accent">THAT INSPIRE</span>
          </h1>
          <p className="hero__subtitle">
            From artificial grass to world-class courts — we engineer premium sports facilities across India that perform at the highest level.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
            <Link to="/projects" className="btn btn-outline">View Our Work</Link>
          </div>

          <div className="hero__stats">
            {stats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span className="hero__scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="section about-strip" ref={aboutRef} aria-labelledby="about-heading">
        <div className="container about-strip__inner">
          <div className="about-strip__text">
            <SectionTitle
              tag="Who We Are"
              title="Sports Infrastructure Excellence"
              subtitle="Apex Sports Infra has been transforming spaces across 18+ states for over 12 years. We deliver end-to-end solutions — from design to handover — for schools, hotels, academies, and corporate campuses."
            />
            <ul className="about-strip__points">
              {[
                'Turnkey project delivery from concept to completion',
                'Certified materials meeting FIFA, ITF & BWF standards',
                'Dedicated project managers for every site',
                'Post-installation warranty & maintenance support',
              ].map((p) => (
                <li key={p} className="about-strip__point">
                  <span className="about-strip__check">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: '32px' }}>
              Learn More About Us
            </Link>
          </div>
          <div className="about-strip__visual">
            <div className="about-strip__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80"
                alt="Completed sports facility"
                className="about-strip__img"
              />
              <div className="about-strip__badge">
                <span className="about-strip__badge-number">12+</span>
                <span className="about-strip__badge-text">Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar" ref={statsRef} aria-label="Company statistics">
        <div className="container stats-bar__grid">
          {stats.map(({ value, label }) => (
            <div key={label} className="stats-bar__item">
              <span className="stats-bar__value">{value}</span>
              <span className="stats-bar__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <SectionTitle
            tag="What We Offer"
            title="Our Services"
            subtitle="Complete sports infrastructure solutions — from synthetic turf to turnkey court construction."
            align="center"
          />
          <div className="grid-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.id} {...s} index={i} />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section section--dark" id="projects" aria-labelledby="projects-heading">
        <div className="container">
          <SectionTitle
            tag="Our Portfolio"
            title="Featured Projects"
            subtitle="A selection of our most impactful installations across India."
            align="center"
          />
          <div className="grid-3">
            {projects.slice(0, 6).map((p, i) => (
              <ProjectCard key={p.id} {...p} index={i} />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── CLIENTS MARQUEE ── */}
      <section className="clients-section section--sm" aria-label="Our clients">
        <div className="container">
          <p className="clients-label">Trusted by leading organizations across India</p>
        </div>
        <div className="clients-track-wrap" aria-hidden="true">
          <div className="clients-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="clients-item">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="cta-section section" aria-labelledby="cta-heading">
        <div className="container cta-section__inner">
          <div className="cta-section__text">
            <h2 id="cta-heading" className="cta-section__title">
              Ready to Build Your Dream Facility?
            </h2>
            <p className="cta-section__sub">
              Get a free, no-obligation quote. Our team will visit your site and provide a complete project estimate within 48 hours.
            </p>
          </div>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
            <a href="tel:+919004694244" className="btn btn-outline">📞 Call Us Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
