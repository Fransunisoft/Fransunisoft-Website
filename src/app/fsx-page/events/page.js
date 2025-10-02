'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './events.module.css';
import OurProcess from './component';

// --- DATA: Part 1 Hero Section ---
const PAGE_TITLE = "FSX Events";
const PAGE_DESCRIPTION = "We design and execute world-class events that combines cutting-edge technologies and creative storytelling. From intimate corporate gatherings to large-scale brand activations, we transform your vision into unforgettable experiences across Nigeria and Africa.";



// --- DATA: Part 2 Event Services Section ---
const ALL_CARDS = [
  // Card 1: Product Launch
  { 
    id: 1, 
    title: "Product Launch",
    description: "Create buzz and excitement around your new product with a memorable launch experience that captures media attention and drives sales.",
    linkText: "Discover Product Services",
    imageSrc: "/sec2.1.png",
    services: [
        { text: "Strategic reveal moments" },
        { text: "Media and influencer engagement" },
        { text: "Interactive product demonstrations" },
        { text: "Digital and social integration" },
    ],
  }, 
  
  { 
    id: 2, 
    title: "Coporate Mixers",
    description: "Foster connections and build relationships in a relaxed yet professional setting designed for networking and team building.",
    linkText: "View Conference Solutions",
    imageSrc: "/sec2.2.png",
    services: [
        { text: "Strategic networking activities" },
        { text: "Professional yet relaxed atmosphere" },
        { text: "Catering and entertainment options" },
        { text: "Brand-aligned theming" },
    ],
     
  }, 
  
  { 
    id: 3, 
    title: "Conferences",
    description: " Host impactful gatherings that educate, inspire, and connect industry leaders through thoughtfully curated content and experiences.",
    linkText: "Plan Your Conference ",
    imageSrc: "/sec2.3.png",
    services: [
        { text: "Content strategy and speaker management" },
        { text: "Interactive breakout sessions" },
        { text: "Networking opportunities" },
        { text: "Technology integration and live streaming" },
    ],

  },  

  { 
    id: 4, 
    title: "Award Ceremonies",
    description: "Celebrate achievements and honor excellence with a sophisticated ceremony that leaves lasting memories for honorees and attendees",
    linkText: "Book Team Retreats",
    imageSrc: "/sec2.4.jpg",
    services: [
        { text: "Red carpet reception" },
        { text: "Professional staging and lighting" },
        { text: "Custom trophy and award design" },
        { text: "Live entertainment and presentation" },
    ],
  },  
  
  { 
    id: 5, 
    title: "Team Building Events",
    description: "Strengthen collaboration and morale with engaging activities designed to improve communication and foster team unity.",
    linkText: "Digital Event Solutions",
    imageSrc: "/sec2.5.jpg",
    services: [
        { text: "Customized team challenges" },
        { text: "Professional facilitators" },
        { text: "Indoor and outdoor options" },
        { text: "Post-event assessment and feedback" },
    ],

  },  
  
  { 
    id: 6, 
    title: "Immersive Experiences",
    description: "Transport your audience to new dimensions with cutting-edge engagement and virtual reality technologies that create unforgettable brand moments.",
    linkText: "Create Your Experience",
    imageSrc: "/sec2.6.png",
    services: [
        { text: " Custom AR/VR content developments" },
        { text: " Multi-sensory experiences" },
        { text: " Interactive digital environments" },
        { text: " Social Sharing Integration" },
    ],
  },  
];


// --- INTERNAL COMPONENT: Service Card ---
function ServiceCard({ card, delay }) {
    const servicesList = card.services; 

    return (
        // Add animated class and inline style for delayed animation
        <div 
            className={`${styles.serviceCard} ${styles.animated}`}
            style={{ animationDelay: `${delay * 0.15}s` }}
        >
            <Image 
                src={card.imageSrc} 
                alt={card.title}
                width={320}
                height={163}
                className={styles.cardImage}
            />
            
            <div className={styles.cardContentVertical}>
                {/* Section 1: Title and Description */}
                <div className={styles.cardSection1}>
                    <div className={styles.cardTextLayout1}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                    </div>
                    <div className={styles.cardTextLayout2}>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </div>
                </div>

                {/* Section 2: Checkmark List - Uses flex-grow for spacing */}
                <div className={styles.cardSection2}>
                    {servicesList.map((service, index) => (
                        <div key={index} className={styles.serviceListItem}>
                            {/* Checkmark Symbol */}
                            <span className={styles.checkmarkIcon}>
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.55005 17.5L4.55005 12.5L5.97505 11.075L9.55005 14.65L18.025 6.175L19.45 7.6L9.55005 17.5Z" fill="white"/>
                                </svg>
                            </span>
                            {/* Service Text */}
                            <p className={styles.serviceText}>{service.text}</p>
                        </div>
                    ))}
                </div>

                {/* Section 3 & 4: Link and Arrow - Aligned at the bottom */}
                <div className={styles.cardSection34}>
                    <div className={styles.cardSection3}>
                        <p className={styles.cardLinkText}>{card.linkText}</p>
                    </div>
                    {/* Arrow-Right Symbol */}
                    <span className={styles.arrowIcon}>→</span>
                </div>
            </div>
        </div>
    );
}


// --- Main Page Component ---
export default function EventHeroPage() {
  return (
    <div className={styles.mainContainer}> 
      
      {/* 1. HERO SECTION (Part 1) */}
      <section className={`${styles.heroSection} ${styles.animated}`}>
        <div className={styles.innerBox1}>
            <div className={styles.innerBox2}>
                <div className={styles.innerBox3}>
                    <div className={styles.horizontalLayout1}>
                        <h1 className={styles.eventTitle}>{PAGE_TITLE}</h1>
                    </div>
                    <div className={styles.horizontalLayout2}>
                        <p className={styles.eventDescription}>{PAGE_DESCRIPTION}</p>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link href="/events/booking" className={styles.bookEventBtn}>Book Your Events</Link>
                    <Link href="/fsx-page" className={styles.backBtn}>Back To Brand Family</Link>
                </div>
            </div>
            {/* Hero Image */}
            <div className={styles.imageWrapper}>
                <Image src="/event1.png" alt="Fransunisoft Events" width={600} height={450} className={styles.heroImage}/>
            </div>
        </div>
      </section>

      
      {/* 2. EVENT SERVICES SECTION (Part 2) */}
      <section className={styles.servicesSection}>
        <div className={`${styles.servicesInnerVertical} ${styles.animated}`} style={{ animationDelay: '0.1s' }}>
          
          {/* Layout 2: Title and Subtitle */}
          <div className={styles.layout2}>
            <div className={styles.titleTextLayout}>
              <h2 className={styles.sectionTitle}>Our Event Services</h2>
            </div>
            <div className={styles.subtitleTextLayout}>
              <p className={styles.sectionSubtitle}> <b>
                Comprehensive event solutions designed to elevate your brand and engage your audience. </b>
              </p> 
            </div>
          </div>
          
          {/* Layout 3: Cards Container */}
          <div className={styles.layout3}>
            
            {/* Horizontal Layout 1 (Cards 1, 2, 3) */}
            <div className={styles.cardHorizontalLayout}>
              <ServiceCard card={ALL_CARDS[0]} delay={1} />
              <ServiceCard card={ALL_CARDS[1]} delay={2} />
              <ServiceCard card={ALL_CARDS[2]} delay={3} />
            </div>

            {/* Horizontal Layout 2 (Cards 4, 5, 6) */}
            <div className={styles.cardHorizontalLayout}>
              <ServiceCard card={ALL_CARDS[3]} delay={4} />
              <ServiceCard card={ALL_CARDS[4]} delay={5} />
              <ServiceCard card={ALL_CARDS[5]} delay={6} />
            </div>
          </div>
          
        </div>
      </section>
      
      {/* 3. THIRD SECTION will go here below Component for the slidng cards comes in here */}
      <OurProcess/> 
    </div>
  );
}