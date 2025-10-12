'use client';

import styles from './button.module.css';

const buttons = [
  { key: 'discover', text: 'Discover FSX Brand Family', href: '#brand-family', style: 'discover', group: 'primary' },
  { key: 'start', text: 'Start Your Journey Today', href: '#contact', style: 'start', group: 'primary' },

  { key: 'fsxevents', text: 'Book Your Events', href: '#contact', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreEvents', text: 'Explore Events', href: '#fsx-events', style: 'Explore', group: 'secondary' },

  { key: 'fsxlabs1', text: 'Tell Us Your Idea', href: '#contact', style: 'fsxLabs', group: 'secondary' },
  { key: 'ExploreLabs', text: 'Explore Labs', href: '#what-we-do', style: 'Explore', group: 'secondary' },

  { key: 'fsxtech1', text: 'Get Started', href: '#contact', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreTech', text: 'Explore Tech', href: '#fsx-tech', style: 'Explore', group: 'secondary' },

  { key: 'fsxacademy1', text: 'Join Us', href: '#contact', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreAcademy', text: 'Explore Academy', href: '#fsx-academy', style: 'Explore', group: 'secondary' },

  { key: 'fsxconnect1', text: 'Join Community', href: '#contact', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreConnect', text: 'Explore eConnect', href: '#fsx-connect', style: 'Explore', group: 'secondary' },

  { key: 'fsxConsulting1', text: 'Book Consultation', href: '#contact', style: 'discover', group: 'primary' },
  { key: 'ExploreConsulting', text: 'Explore Services', href: '#consulting-service', style: 'start', group: 'primary' },
];

export default function ButtonGroup({ filterKeys = [], onClickHandlers = {} }) {
  const filteredButtons = filterKeys.length
    ? buttons.filter((btn) => filterKeys.includes(btn.key))
    : buttons;

  const primaryButtons = filteredButtons.filter((btn) => btn.group === 'primary');
  const secondaryButtons = filteredButtons.filter((btn) => btn.group === 'secondary');

  return (
    <div className={styles.buttons}>
      <div className={styles.primaryButtons}>
        {primaryButtons.map((btn, index) => (
          <a
            key={index}
            href={btn.href}
            onClick={onClickHandlers[btn.key] || undefined}
            className={`${styles.btn} ${styles[btn.style]}`}
          >
            {btn.text}
          </a>
        ))}
      </div>
      <div className={styles.secondaryButtons}>
        {secondaryButtons.map((btn, index) => (
          <a
            key={index}
            href={btn.href}
            onClick={onClickHandlers[btn.key] || undefined}
            className={`${styles.btn} ${styles[btn.style]}`}
          >
            {btn.text}
          </a>
        ))}
      </div>
    </div>
  );
}
