'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './events.module.css';

// --- DATA: Part 1 Hero Section ---
const PAGE_TITLE = "FSX Events";
const PAGE_DESCRIPTION = "We design and execute world-class events that combines cutting-edge technologies and creative storytelling. From intimate corporate gatherings to large-scale brand activations, we transform your vision into unforgettable experiences across Nigeria and Africa.";


// --- DATA: Part 2 Event Services Section ---
const ALL_CARDS = [
  // Card 1: Product Launch
  { 
    id: 1, 
    title: "Card 1: Product Launch",
    description: "Description for Card 1. This is a shorter summary for the first product launch event.",
    linkText: "Discover Product Services",
    imageSrc: "/images/card1_product_launch.jpg",
    services: [
        { text: "C1: Concept development and ideation." },
        { text: "C1: Full event production and management." },
        { text: "C1: Strategic marketing and media outreach." },
        { text: "C1: Comprehensive post-event analysis." },
    ],
  }, 
  // Card 2: Conference Planning
  { 
    id: 2, 
    title: "Card 2: Conference Planning",
    description: "Description for Card 2. This focuses on large-scale conference and exhibition planning.",
    linkText: "View Conference Solutions",
    imageSrc: "/images/card2_conference.jpg",
    services: [
        { text: "C2: Delegate registration management system." },
        { text: "C2: Venue sourcing and contract negotiation." },
        { text: "C2: Speaker and content management process." },
        { text: "C2: On-site logistics and support staff." },
    ],
  }, 
  // Card 3: Gala Dinners & Awards
  { 
    id: 3, 
    title: "Card 3: Gala Dinners & Awards",
    description: "Description for Card 3. Detail on high-end gala dinners, award ceremonies, and formal events.",
    linkText: "Explore Gala Packages",
    imageSrc: "/images/card3_gala.jpg",
    services: [
        { text: "C3: Custom decor, lighting design, and stage setup." },
        { text: "C3: Multi-course catering and beverage service." },
        { text: "C3: VIP management, seating charts, and guest design." },
        { text: "C3: Entertainment booking and high-quality production." },
    ],
  },  
  // Card 4: Team Building Retreats
  { 
    id: 4, 
    title: "Card 4: Team Building Retreats",
    description: "Description for Card 4. Focused on corporate retreats and engaging team-building activities.",
    linkText: "Book Team Retreats",
    imageSrc: "/images/card4_retreats.jpg",
    services: [
        { text: "C4: Destination research and activity planning." },
        { text: "C4: Full travel, accommodation, and transportation." },
        { text: "C4: Facilitation of workshops and development sessions." },
        { text: "C4: Post-event feedback and analysis report preparation." },
    ],
  },  
  // Card 5: Digital & Hybrid Events
  { 
    id: 5, 
    title: "Card 5: Digital & Hybrid Events",
    description: "Description for Card 5. Expertise in blending physical and virtual event components.",
    linkText: "Digital Event Solutions",
    imageSrc: "/images/card5_hybrid.jpg",
    services: [
        { text: "C5: Selection and setup of virtual platforms." },
        { text: "C5: Management of remote speakers and virtual booths." },
        { text: "C5: Seamless integration of audience experience." },
        { text: "C5: Detailed digital metrics and participant analytics." },
    ],
  },  
  // Card 6: Exhibition Management
  { 
    id: 6, 
    title: "Immersive Experiences",
    description: "",
    linkText: "Create Your Experience",
    imageSrc: "/images/card6_exhibition.jpg",
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
              <p className={styles.sectionSubtitle}>
                Comprehensive event solutions designed to elevate your brand and engage your audience.
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
      
      {/* 3. THIRD SECTION will go here */}
      <section className={`${styles.placeholderSection} ${styles.animated}`} style={{ animationDelay: '1s' }}>
        <h2 className={styles.placeholderTitle}>Our Process</h2>
      </section>
      
    </div>
  );
}