// src/app/page.js
import styles from './page.module.css';
import Link from 'next/link';


export default function HomePage() {
  return (
    <main>
       
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Building Smarter, Scaling Faster in Nigeria</h1>
        <p className={styles.description}>
         Fransunisoft (FSX) is a Nigeria-based ecosystem designed to fuel innovation, 
         empower brands, and connect communities. With six dynamic branches — FSX Events, FSX Consulting,
          FSX Tech, FSX Academy, FSX Labs, and FSX Connect. We provide solutions that help businesses and 
          individuals thrive in today’s fast-changing world.
        </p>
        <div className={styles.buttons}>
          <Link href="/fsx page" className={styles.discoverBtn}>Discover FSX Brand Family</Link>
          <Link href="/start" className={styles.startBtn}>Start Your Journey Today</Link>
        </div>
      </div>
    </section>



 <section className={styles.differenceSection}>
  <div className={styles.intro}>
    <h1 className={styles.mainHeading}>What Makes Fransunisoft Different?</h1>
    <p className={styles.subText}>
      Beyond traditional boundaries — we integrate, execute, and transform
    </p>
  </div>
<div className={styles.contentRow}>
  <div className={styles.contentBlock}>
    <h2 className={styles.heading}>The FSX Advantage</h2>
    <p className={styles.text}>
   Unlike traditional consulting firms or tech companies that focus on only one area, Fransunisoft integrates strategy,
    technology, learning, community, and experiences under one ecosystem (FSX).
We deliver holistic solutions that dont just consult, but execute, train, and connect -
 creating scalable impact that transforms businesses, communities, and industries.
    </p>
   
  </div>

  <div className={styles.contentBlock}>
    <h2 className={styles.heading}>How We Deliver Different Results</h2>
    <ul className={styles.list}>
      <li>Integrated ecosystem — strategy, tech, training, and community working together</li>
      <li>End-to-end execution with hands-on implementation</li>
      <li>Long-term partnerships with continuous support</li>
      <li>Community-driven solutions with local adaptation</li>
      <li>Deep African market expertise with global standards</li>
    </ul>
  </div>
  </div>
   <div className={styles.buttonWrapper}>
      <Link href="/about" className={styles.learnMoreBtn}>Learn More About Our Journey</Link>
    </div>
</section>



<section className={styles.brandFamily}>
  <div className={styles.intro}>
    <h2 className={styles.heading}>The FSX Brand Family</h2>
    <p className={styles.subText}>
     Fransunisoft is more than one company <br></br>
it’s a family of solutions tailored to help businesses and individuals succeed
    </p>
  </div>

  <div className={styles.grid}>
    {[
      {
        title: 'FSX Consulting',
        tagline: '"Build Smarter. Scale Faster."',
        description: 'Business consulting, digital transformation, and community programs that bridge strategy with real tech execution and community impact.',
     
      },
      {
        title: 'FSX Labs',
        description: 'Platforms, automation, and innovative programs for building scalable solutions from scratch to solve real-world problems.',
        tagline: '"Empowering innovators today, not tomorrow."',
      },
      {
        title: 'FSX Tech',
        description: 'Comprehensive, affordable, and scalable technology solutions.',
        tagline: '"Smart Tech. Simplified."',
      },
      {
        title: 'FSX Events',
        description: 'Brand activations, corporate events, and community programs to create global-standard events with local relevance.',
        tagline: '"Where brands come to life"',
      },
      {
        title: 'FSX Connect',
        description: 'Connecting communities and brands through digital platforms and strategic partnerships.',
        tagline: '"Connecting Ideas, Empowering Impact."',
      },
      {
        title: 'FSX Academy',
        description: 'Training and learning programs designed to empower individuals and teams with future-ready skills.',
        tagline: '"From Learning to Leading."',
      },
    ].map((branch, index) => (
      <div key={index} className={styles.card}>
        <h3 className={styles.cardTitle}>{branch.title}</h3>
        {branch.tagline && <p className={styles.cardTagline}><em>{branch.tagline}</em></p>}
        <p className={styles.cardDescription}>{branch.description}</p>
        
        <Link href={`/fsx page/${branch.title.toLowerCase().split(' ')[1]}`} className={styles.learnMoreBtn}>
          Learn more
        </Link>
      </div>
    ))}
  </div>
</section>


      

      
    </main>
  );
}
