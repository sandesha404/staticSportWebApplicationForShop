import React, { useState } from 'react';
import './ContactForm.css';

const initialState = { name: '', email: '', phone: '', service: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate async submission
    setTimeout(() => {
      setStatus('success');
      setForm(initialState);
    }, 1400);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            className="contact-form__input"
            placeholder="Rajesh Kumar"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact-form__input"
            placeholder="rajesh@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="contact-form__input"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="service">Service Interest</label>
          <select
            id="service"
            name="service"
            className="contact-form__input contact-form__select"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select a service…</option>
            <option>Artificial Grass Turf</option>
            <option>Football Court</option>
            <option>Tennis Court</option>
            <option>Basketball Court</option>
            <option>Cricket Turf</option>
            <option>Gym Flooring</option>
            <option>Kids Play Area</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">Your Message *</label>
        <textarea
          id="message"
          name="message"
          className="contact-form__input contact-form__textarea"
          placeholder="Tell us about your project — location, size, timeline, budget…"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className={`btn btn-primary contact-form__submit ${status === 'loading' ? 'contact-form__submit--loading' : ''}`}
        disabled={status === 'loading' || status === 'success'}
      >
        {status === 'loading' && '⟳ Sending…'}
        {status === 'success' && '✓ Message Sent!'}
        {(status === 'idle' || status === 'error') && 'Send Message →'}
      </button>

      {status === 'success' && (
        <p className="contact-form__success">
          Thanks! We'll get back to you within 24 hours.
        </p>
      )}
    </form>
  );
}
