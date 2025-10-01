'use client';

import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Paperclip, X, Send } from 'lucide-react';
import styles from './contact.module.css'; // fixed filename

function Page() {
  const [selectedFile, setSelectedFile] = useState(null); // store File object
  const [message, setMessage] = useState('');
  const [countryCode, setCountryCode] = useState('+234'); // Default
  const [phoneNumber, setPhoneNumber] = useState(''); // Local number only
  const fileInputRef = useRef(null);
  const countrySelectRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  // Flag URL mapping (using Wikimedia SVGs for free, scalable icons)
  const countryFlags = {
    '+234': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg', // Nigeria
    '+1': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', // USA
    // Add more as needed, e.g., '+44': 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  };

  const flagSrc = countryFlags[countryCode] || countryFlags['+234'];

  const handleCountryChange = (e) => {
    const newCode = e.target.value;
    setCountryCode(newCode);
    // Prepend new code to existing number if any, or update placeholder
    if (phoneNumber) {
      const localNum = phoneNumber.replace(/^\+\d+\s*/, ''); // Strip old code
      setPhoneNumber(`${newCode} ${localNum}`);
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Ensure code is prepended if user clears it
    if (value.startsWith(' ')) {
      value = `${countryCode}${value}`;
    } else if (!value.startsWith(countryCode)) {
      value = `${countryCode} ${value}`;
    }
    setPhoneNumber(value);
  };

  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) setSelectedFile(f);
    else setSelectedFile(null);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setUploadError(null);
  };

  const formatBytes = (bytes) => {
    if (!bytes) return '';
    const sizes = ['B','KB','MB','GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setUploadError(null);
    try {
      const formData = new FormData();
      formData.append('message', message);
      if (selectedFile) formData.append('file', selectedFile);
      formData.append('phone', phoneNumber); // Full phone with code
      // change endpoint as needed
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Upload failed');
      // success: reset
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setMessage('');
      setPhoneNumber('');
    } catch (err) {
      setUploadError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Top Full-Width: Heading and Paragraph - White on blue, centered */}
        <div className={styles.topContent}>
          <h2 className={styles.contactHeading}>Let’s Build Smarter, Together.</h2>
          <p className={styles.contactLead}>
            Whether you&#39;re looking to host an unforgettable event, scale your business,
            simplify your technology, or expand your network, FSX is here for you.
          </p>
        </div>

        {/* Grid: Left - Contact Info Icons, Right - Get In Touch Form Card */}
        <div className={styles.contactGrid}>
          {/* Left Column: Contact Information with Icons */}
          <div className={styles.leftColumn}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoLead}>
              We’d love to hear from you. Please fill out the contact form and we’ll reply soon
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.infoIconCircle}>
                  <Mail size={20} color="blue" />
                </div>
                <div className={styles.infoText}>
                  <h6 className={styles.infoLabel}>Email</h6>
                  <span className={styles.infoValue}>Contact us by email, and we’ll respond shortly</span>
                  <span className={styles.infoSubValue}>hello@fransunisoft.com</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIconCircle}>
                  <Phone size={20} color="blue" />
                </div>
                <div className={styles.infoText}>
                  <h6 className={styles.infoLabel}>Phone</h6>
                  <span className={styles.infoValue}>Call us on weekdays from 9AM - 5PM</span>
                  <span className={styles.infoSubValue}>08130706942</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIconCircle}>
                  <MapPin size={20} color="blue" />
                </div>
                <div className={styles.infoText}>
                  <h6 className={styles.infoLabel}>Location</h6>
                  <span className={styles.infoValue}>Where we are located</span>
                  <span className={styles.infoSubValue}>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Get In Touch White Card with Intro and Form */}
          <aside className={styles.rightColumn}>
            <h3 className={styles.cardTitle}>Get In Touch</h3>
            <p className={styles.cardIntro}>
              Contact Fransunisoft (FSX) today for event management, consulting,
              technology solutions, training, and networking opportunities in Nigeria.
            </p>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <input className={styles.input} placeholder="First Name" type="text" />
              <input className={styles.input} placeholder="Last Name" type="text" />
              <input className={styles.input} placeholder="Email Address" type="email" />
              <div className={styles.phoneRow}>
                <div className={styles.flagSelectWrapper}>
                  <img src={flagSrc} alt="Country Flag" className={styles.flag} />
                  <select 
                    ref={countrySelectRef}
                    className={styles.countryArrow}
                    value={countryCode} 
                    onChange={handleCountryChange}
                  >
                    <option value="+234">NG</option>
                    <option value="+1">US</option>
                  </select>
                </div>
                <input 
                  className={styles.phoneInput} 
                  placeholder={`${countryCode} 1234567890`} 
                  type="tel" 
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
              </div>
              <select className={`${styles.input} ${styles.select}`}>
                <option>Service Type</option>
                <option>Event Management</option>
                <option>IT Consulting</option>
                <option>Security</option>
                <option>Training</option>
                <option>Networking</option>
              </select>
              <input className={styles.input} placeholder="Company" type="text" />

              {/* textarea with attach UI */}
              <div className={styles.textareaWrapper}>
                <textarea
                  className={styles.textarea}
                  placeholder="How can we be of help?"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {!selectedFile && (
                  <label
                    htmlFor="fileUpload"
                    className={styles.attachLabel}
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') fileInputRef.current?.click(); }}
                  >
                    <Paperclip size={16} />
                    <span><strong>Attach a file</strong></span>
                  </label>  
                )}
                <input
                  id="fileUpload"
                  ref={fileInputRef}
                  type="file"
                  className={styles.fileInputHidden}
                  onChange={handleFileChange}
                />
              </div>

              {selectedFile && (
                <div className={styles.attachedFile}>
                  <div className={styles.filePreviewIcon}>
                    <Paperclip size={16} />
                  </div>
                  <div className={styles.filePreviewMeta}>
                    <div className={styles.filePreviewName} title={selectedFile.name}>
                      {selectedFile.name}
                    </div>
                    <div className={styles.filePreviewSize}>{formatBytes(selectedFile.size)}</div>
                    {uploadError && <div className={styles.fileError}>{uploadError}</div>}
                  </div>

                  <div className={styles.fileActions}>
                    <button
                      type="button"
                      className={styles.removeButton}
                      onClick={removeFile}
                      aria-label="Remove attached file"
                    >
                      <X size={14} />
                    </button>

                    <button
                      type="submit"
                      className={styles.sendButton}
                      disabled={uploading}
                      aria-disabled={uploading}
                    >
                      {uploading ? 'Sending…' : <><Send size={14} /> Send</>}
                    </button>
                  </div>
                </div>
              )}

              {!selectedFile && (
                <button className={styles.submitButton} type="submit">Contact Us</button>
              )}
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Page;