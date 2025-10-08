'use client';

import styles from './button.module.css';

const buttons = [
  { key: 'discover', text: 'Discover FSX Brand Family', href: '#brand-family', style: 'discover', group: 'primary' },
  { key: 'start', text: 'Start Your Journey Today', href: '#contact', style: 'start', group: 'primary' },

  { key: 'fsx-events', text: 'Book Your Events', href: '#fsx-events', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreEvents', text: 'Explore Events', href: '#fsx-events', style: 'Explore', group: 'secondary' },

  { key: 'fsx-labs1', text: 'Tell Us Your Idea', href: '#fsx-labs', style: 'fsxLabs', group: 'secondary' },
  { key: 'ExploreLabs', text: 'Explore Labs', href: '#fsx-labs', style: 'Explore', group: 'secondary' },

  { key: 'fsx-tech1', text: 'Get Started', href: '#fsx-tech', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreTech', text: 'Explore Tech', href: '#fsx-tech', style: 'Explore', group: 'secondary' },

  { key: 'fsx-academy1', text: 'Join Us', href: '#fsx-academy', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreAcademy', text: 'Explore Academy', href: '#fsx-academy', style: 'Explore', group: 'secondary' },

  { key: 'fsx-connect1', text: 'Join Community', href: '#fsx-connect', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreConnect', text: 'Explor eConnect', href: '#fsx-connect', style: 'Explore', group: 'secondary' },

  { key: 'fsx-consulting1', text: 'Book Consultation', href: '#consulting', style: 'fsxBranch', group: 'secondary' },
  { key: 'ExploreConsulting', text: 'Explore Consulting', href: '#consulting', style: 'Explore', group: 'secondary' },
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
