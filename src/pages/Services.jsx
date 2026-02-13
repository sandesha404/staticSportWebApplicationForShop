import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/siteData';
import { Link } from 'react-router-dom';
import './Services.css';

const categories = ['All', 'Flooring', 'Outdoor Courts', 'Specialty', 'Recreation', 'Infrastructure'];

export default function Services() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? services : services.filter((s) => s.category === active);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Services page header">
        <div className="container">
          <span className="page-hero__tag">What We Build</span>
          <h1 className="page-hero__title">OUR SERVICES</h1>
          <p className="page-hero__subtitle">
            Comprehensive sports infrastructure solutions designed and delivered to international standards.
          </p>
        </div>
      </section>

      {/* ── Services Listing ── */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          {/* Filter tabs */}
          <div className="services-filter" role="tablist" aria-label="Filter services by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`services-filter__btn ${active === cat ? 'services-filter__btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="services-grid" key={active}>
            {filtered.map((s, i) => (
              <ServiceCard key={s.id} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process section ── */}
      <section className="section section--dark process-section" aria-labelledby="process-heading">
        <div className="container">
          <SectionTitle tag="How It Works" title="Our Process" align="center"
            subtitle="A streamlined project delivery process from first call to final handover." />
          <div className="process-steps">
            {[
              { num: '01', title: 'Site Assessment', desc: 'We visit your site, take measurements, assess soil/base conditions, and understand your sport requirements.' },
              { num: '02', title: 'Design & Quote', desc: 'Our engineers prepare a detailed layout design and itemized cost estimate within 48 hours.' },
              { num: '03', title: 'Material Sourcing', desc: 'We procure certified materials from globally approved manufacturers — no compromises.' },
              { num: '04', title: 'Installation', desc: 'Our trained installation crew completes the work on schedule, with daily progress updates.' },
              { num: '05', title: 'QC & Handover', desc: 'Final quality inspection, surface testing, and documentation before formal handover.' },
              { num: '06', title: 'After-care', desc: 'Annual maintenance, surface restoration, and a dedicated helpline for all post-handover needs.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="process-step">
                <span className="process-step__num">{num}</span>
                <h4 className="process-step__title">{title}</h4>
                <p className="process-step__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section services-bottom-cta">
        <div className="container services-bottom-cta__inner">
          <h2 className="services-bottom-cta__title">Have a specific requirement?</h2>
          <p className="services-bottom-cta__sub">Tell us about your project and we'll tailor a solution for you.</p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
