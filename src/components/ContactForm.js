/* 'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    company: '',
    message: '',
    file: null,
  });

  const fsxBrands = [
    'FSX Consulting',
    'FSX Labs',
    'FSX Tech',
    'FSX Events',
    'FSX Connect',
    'FSX Academy',
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.heading}>Get In Touch</h3>
      <p className={styles.paragraph}>
        Contact Fransunisoft (FSX) today for event management, consulting, technology solutions, training, and networking opportunities in Nigeria.
      </p>

      <div className={styles.row}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.row}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="+234 Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <select
        name="serviceType"
        value={formData.serviceType}
        onChange={handleChange}
        required
      >
        <option value="">Select FSX Brand</option>
        {fsxBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="How can we be of help?"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
      />

      <input
        type="file"
        name="file"
        onChange={handleChange}
        accept=".pdf,.doc,.docx,.jpg,.png"
      />

      <button type="submit" className={styles.contactBtn}>
        Contact Us
      </button>
    </form>
  );
}
 */