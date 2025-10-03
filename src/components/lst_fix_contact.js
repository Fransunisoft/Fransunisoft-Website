// src/components/Contact.js
'use client';
import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachedFile(file);
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const form = e.target;
      const formData = new FormData(form);

      // Add file if selected
      if (attachedFile) {
        formData.set('file', attachedFile);
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || 'Failed to send email');
      } else {
        setSuccessMessage('Message sent successfully!');
        form.reset();
        setAttachedFile(null);
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Top Heading & Lead */}
        <div className={styles.topContent}>
          <h2 className={styles.contactHeading}>Get in Touch</h2>
          <p className={styles.contactLead}>
            Fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>

        {/* Grid: Left + Right */}
        <div className={styles.contactGrid}>
          {/* Left Column: Contact Info */}
          <div className={styles.leftColumn}>
            <h3 className={styles.infoTitle}>Contact Info</h3>
            <p className={styles.infoLead}>We are here to help you 24/7</p>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.infoIconCircle}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2z"
                      stroke="#0D519A"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>support@fsxtech.com</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIconCircle}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2z"
                      stroke="#0D519A"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Phone</span>
                  <span className={styles.infoValue}>+1 234 567 890</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIconCircle}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2z"
                      stroke="#0D519A"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Address</span>
                  <span className={styles.infoValue}>123 FSX Street, NY, USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.rightColumn}>
            <h3 className={styles.cardTitle}>Send Us a Message</h3>
            <p className={styles.cardIntro}>We would love to hear from you!</p>

            <form className={styles.contactForm} onSubmit={handleSubmit} encType="multipart/form-data">
              <div className={styles.formRow}>
                <input type="text" name="firstName" className={styles.input} placeholder="First Name" required />
              </div>
              <div className={styles.formRow}>
                <input type="text" name="lastName" className={styles.input} placeholder="Last Name" required />
              </div>
              <div className={styles.formRow}>
                <input type="email" name="email" className={styles.input} placeholder="Email" required />
              </div>
              <div className={styles.formRow}>
                <input type="text" name="phone" className={styles.input} placeholder="Phone" required />
              </div>
              <div className={styles.formRow}>
                <input type="text" name="company" className={styles.input} placeholder="Company" required />
              </div>
              <div className={styles.formRow}>
                <select name="serviceType" className={styles.select} required>
                  <option value="">Select Service Type</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Support">Support</option>
                  <option value="Development">Development</option>
                </select>
              </div>

              {/* Textarea + File */}
              <div className={styles.formRow}>
                <div className={styles.textareaWrapper}>
                  <textarea
                    name="message"
                    className={styles.textarea}
                    placeholder="Your Message"
                    required
                  ></textarea>

                  <label className={styles.attachLabel}>
                    Attach File
                    <input
                      type="file"
                      name="file"
                      className={styles.fileInputHidden}
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>

              {/* Attached file preview */}
              {attachedFile && (
                <div className={styles.attachedFile}>
                  <div className={styles.filePreviewMeta}>
                    <span className={styles.filePreviewName}>{attachedFile.name}</span>
                    <span className={styles.filePreviewSize}>{(attachedFile.size / 1024).toFixed(2)} KB</span>
                  </div>
                  <div className={styles.fileActions}>
                    <button type="button" className={styles.removeButton} onClick={handleRemoveFile}>
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Feedback */}
              {successMessage && <p style={{ color: '#16a34a', marginTop: '8px' }}>{successMessage}</p>}
              {errorMessage && <p style={{ color: '#b91c1c', marginTop: '8px' }}>{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
