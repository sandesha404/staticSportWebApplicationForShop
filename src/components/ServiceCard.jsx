import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, features = [], index = 0 }) {
  return (
    <div
      className="service-card"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="service-card__icon-wrap">
        <span className="service-card__icon" role="img" aria-label={title}>{icon}</span>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      {features.length > 0 && (
        <ul className="service-card__features">
          {features.map((f) => (
            <li key={f} className="service-card__feature">
              <span className="service-card__feature-dot" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <div className="service-card__hover-line" />
    </div>
  );
}
