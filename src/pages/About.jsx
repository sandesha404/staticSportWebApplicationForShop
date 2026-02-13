import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { team, stats } from '../data/siteData';
import './About.css';

const values = [
  { icon: '🏆', title: 'Excellence', desc: 'We never compromise on material quality or workmanship. Every surface we install meets or exceeds international standards.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent pricing, honest timelines, and no hidden costs. We earn trust through consistent delivery.' },
  { icon: '🔬', title: 'Innovation', desc: 'Continuously adopting the latest synthetic turf and court surface technologies from global leaders.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Eco-friendly materials and drainage systems that minimize environmental impact across all our projects.' },
];

const whyUs = [
  { stat: '12+', label: 'Years Experience', desc: 'A decade of hands-on expertise across every type of sports surface.' },
  { stat: '350+', label: 'Projects Delivered', desc: 'From school playgrounds to professional stadiums across India.' },
  { stat: '98%', label: 'Client Satisfaction', desc: 'Our repeat business and referral rate speaks for itself.' },
  { stat: '18+', label: 'States Covered', desc: 'A nationwide network of certified installation teams.' },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="About page header">
        <div className="container">
          <span className="page-hero__tag">Our Story</span>
          <h1 className="page-hero__title">ABOUT APEX</h1>
          <p className="page-hero__subtitle">
            Building world-class sports facilities that inspire athletes and transform communities across India.
          </p>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="section" aria-labelledby="overview-heading">
        <div className="container about-overview">
          <div className="about-overview__text">
            <SectionTitle
              tag="Company Overview"
              title="Who We Are"
              subtitle="Apex Sports Infra is India's trusted end-to-end sports infrastructure partner."
            />
            <p className="about-overview__body">
              Founded in 2012, Apex Sports Infra was born from a simple belief: every athlete deserves a world-class playing surface. We started with a single basketball court installation in Noida and have since grown into one of India's most respected sports infrastructure companies.
            </p>
            <p className="about-overview__body">
              Today, our portfolio spans 350+ projects across schools, universities, luxury resorts, corporate campuses, and professional sports academies in 18+ states. We offer turnkey solutions — from site assessment and design to installation, commissioning, and post-handover maintenance.
            </p>
          </div>
          <div className="about-overview__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1587095951604-b9d924a3fda0?w=700&q=80"
              alt="Apex Sports Infra team at work"
              className="about-overview__img"
            />
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section section--dark mv-section" aria-labelledby="mv-heading">
        <div className="container">
          <SectionTitle tag="Our Purpose" title="Mission & Vision" align="center" />
          <div className="mv-grid">
            <div className="mv-card mv-card--mission">
              <div className="mv-card__icon">🎯</div>
              <h3 className="mv-card__title">Our Mission</h3>
              <p className="mv-card__body">
                To deliver premium, durable, and performance-certified sports infrastructure across India — making high-quality playing surfaces accessible to schools, institutions, and communities, not just elite clubs.
              </p>
            </div>
            <div className="mv-card mv-card--vision">
              <div className="mv-card__icon">🔭</div>
              <h3 className="mv-card__title">Our Vision</h3>
              <p className="mv-card__body">
                To be recognized as India's most trusted sports infrastructure brand by 2030 — synonymous with quality, innovation, and athlete-first design. We envision a India where every community has access to world-standard sports facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="section values-section" aria-labelledby="values-heading">
        <div className="container">
          <SectionTitle tag="What Drives Us" title="Core Values" align="center" />
          <div className="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="value-card">
                <div className="value-card__icon">{icon}</div>
                <h4 className="value-card__title">{title}</h4>
                <p className="value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section section--dark why-section" aria-labelledby="why-heading">
        <div className="container">
          <SectionTitle tag="Why Apex" title="Why Choose Us" align="center" />
          <div className="why-grid">
            {whyUs.map(({ stat, label, desc }) => (
              <div key={label} className="why-card">
                <span className="why-card__stat">{stat}</span>
                <h4 className="why-card__label">{label}</h4>
                <p className="why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section team-section" id="team" aria-labelledby="team-heading">
        <div className="container">
          <SectionTitle
            tag="The People Behind It"
            title="Our Team"
            subtitle="Dedicated professionals who bring passion and expertise to every project."
            align="center"
          />
          <div className="team-grid">
            {team.map(({ id, name, role, bio, img }) => (
              <article key={id} className="team-card">
                <div className="team-card__img-wrap">
                  <img src={img} alt={name} className="team-card__img" loading="lazy" />
                </div>
                <div className="team-card__info">
                  <h3 className="team-card__name">{name}</h3>
                  <span className="team-card__role">{role}</span>
                  <p className="team-card__bio">{bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
