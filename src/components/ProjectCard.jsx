import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, location, category, img, index = 0 }) {
  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="project-card__img-wrap">
        <img
          src={img}
          alt={`${title} - ${category}`}
          className="project-card__img"
          loading="lazy"
        />
        <div className="project-card__overlay">
          <span className="project-card__category">{category}</span>
          <div className="project-card__info">
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__location">📍 {location}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
