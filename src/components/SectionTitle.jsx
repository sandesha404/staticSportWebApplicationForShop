import React from 'react';
import './SectionTitle.css';

/**
 * SectionTitle
 * @param {string} tag      - Small uppercase label above the title
 * @param {string} title    - Main heading
 * @param {string} subtitle - Subtext below the title
 * @param {string} align    - 'left' | 'center' (default 'left')
 */
export default function SectionTitle({ tag, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {tag && <span className="section-title__tag">{tag}</span>}
      <h2 className="section-title__heading">{title}</h2>
      <div className={`divider ${align === 'center' ? 'divider--center' : ''}`} />
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
    </div>
  );
}
