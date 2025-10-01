'use client';

import styles from './about.module.css';
import Image from 'next/image';

const values = [
  {
    title: 'Innovation',
    description: 'We embrace creativity and technology to design bold solutions.',
    icon: '/Core value section Icon.png',
  },
  {
    title: 'Excellence',
    description: 'We deliver with quality, professionalism, and attention to detail.',
    icon: '/Core value section Icon (1).png',
  },
  {
    title: 'Integrity',
    description: 'We act with honesty and transparency in everything we do.',
    icon: '/Core value section Icon (2).png',
  },
  {
    title: 'Growth',
    description: 'We empower people, businesses, and communities to scale and thrive.',
    icon: '/Core value section Icon (3).png',
  },
  {
    title: 'Community',
    description: 'We invest in people and networks that create lasting change.',
    icon: '/Core value section Icon (4).png',
  },
  {
    title: 'Collaboration',
    description: 'We believe in partnerships and collective impact.',
    icon: '/Core value section Icon (5).png',
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutMain}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          <Image
            src="/About_hands.png"
            alt="FSX Hero Background"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.overlay}>
            <h1>About Fransunisoft (FSX)</h1>
            <p>Innovation and Growth in Nigeria</p>
          </div>
        </div>
      </section>

      {/* Story, Vision, Mission Section */}
      <section className={styles.svmSection}>
        <div className={styles.textColumn}>
          <div className={styles.block}>
            <h2>Our Story</h2>
            <p>
              FSX is a technology company that builds business and financial tools for African businesses. Our mission is to empower businesses with the tools they need to grow and thrive in the global digital economy.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Our Vision</h2>
            <p>
              To become the leading provider of business and financial tools for African businesses, enabling them to compete globally.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Our Mission</h2>
            <p>
              To empower African businesses with innovative, easy-to-use, and affordable business and financial tools.
            </p>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <Image
            src="/F_Vision.png"
            alt="FSX Story, Vision, Mission"
            width={800}
            height={1000}
            className={styles.responsiveImage}
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className={styles.coreSection}>
        <h2 className={styles.heading}>Our Core Values</h2>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <Image
                  src={value.icon}
                  alt={`${value.title} icon`}
                  width={80}
                  height={80}
                />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Section */}
      <section className={styles.ceoSection}>
        <h2 className={styles.heading}>Meet Our CEO</h2>
        <div className={styles.content}>
     <div className={styles.imageWrapper}>
  <Image
    src="/CEO Profile_Photo.png"
    alt="Oluwaseyi Francis Ayodele"
    width={643}
    height={613}
    className={styles.ceoImage}
  />
</div>


          <div className={styles.bio}>
            <p>
              <strong>Oluwaseyi Francis Ayodele</strong> is a software engineer, community manager, and innovation advocate passionate about building scalable solutions and empowering Africa’s next generation of tech leaders. 
              With over a decade of experience across software development, fintech solutions, IT consulting, and community growth, he has led impactful projects that bridge technology and people.
            </p> <br/>
           
            <p>
              
Seyi has trained and mentored thousands of young talents, facilitated programs that have engaged over 150,000 youths across Nigeria and Africa, and supported startups from idea to launch. 
His leadership spans community-driven initiatives, corporate collaborations, and digital transformation strategies that enable organizations to scale smarter and faster.
            </p> <br/>
            <p>
              He is the founder of Fransunisoft, the parent company behind the FSX brand family, which focuses on technology, consulting, events, training, and community building. 
              Through this ecosystem, he is driving innovation and creating sustainable impact in Africa’s tech and business landscape
            </p> <br/>
            <p>
             Beyond his work in business and technology, Seyi actively speaks at conferences, mentors aspiring founders, and champions opportunities for young Africans in the global digital economy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
