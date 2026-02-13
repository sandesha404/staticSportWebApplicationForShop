import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../data/siteData';
import './Projects.css';

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Projects page header">
        <div className="container">
          <span className="page-hero__tag">Our Portfolio</span>
          <h1 className="page-hero__title">PROJECTS</h1>
          <p className="page-hero__subtitle">
            350+ completed installations across India — from schools to professional academies.
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section" aria-labelledby="projects-gallery-heading">
        <div className="container">
          {/* Filter bar */}
          <div className="projects-filter" role="tablist" aria-label="Filter projects by type">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`projects-filter__btn ${active === cat ? 'projects-filter__btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="projects-meta">
            <span className="projects-count">
              Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
              {active !== 'All' && ` in "${active}"`}
            </span>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="projects-gallery" key={active}>
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} {...p} index={i} />
              ))}
            </div>
          ) : (
            <div className="projects-empty">
              <span>No projects found in this category.</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Stats banner ── */}
      <section className="projects-stats section--sm">
        <div className="container projects-stats__inner">
          {[
            { value: '350+', label: 'Projects Nationwide' },
            { value: '18+', label: 'States Covered' },
            { value: '40+', label: 'Active Projects' },
            { value: '12', label: 'Years of Work' },
          ].map(({ value, label }) => (
            <div key={label} className="projects-stats__item">
              <span className="projects-stats__value">{value}</span>
              <span className="projects-stats__label">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
