"use client";

import React, { useRef, useState } from "react";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion'; // Import for smooth animations and transitions
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./FSXTech.module.css";

/**
 * Main App component for the FSX Tech website.
 * Renders a responsive landing page with hero, about, services, and products sections.
 * Uses Framer Motion for animations, Swiper for product carousel.
 * @param {Object} props - Component props
 * @param {string} [props.companyName="Fransunisoft"] - Optional company name prop
 */
const App = (props) => {
  const { companyName = "Fransunisoft" } = props;
  const swiperRef = useRef(null);

  // =============================================================================
  // ANIMATION VARIANTS
  // =============================================================================
  // Define reusable Framer Motion variants for staggered animations across sections

  // Container variant: Staggers child animations for a cascading reveal effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger child elements by 0.1s for that "wave" effect
        delayChildren: 0.2,
      },
    },
  };

  // Item variant: Fades in and slides up from below for list/grid items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below and faded
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Smooth cubic-bezier curve
    },
  };

  // Hero variant: Scales and fades in the entire hero section
  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }, // Back ease for elastic feel
    },
  };

  // Card variant: Slides in from left for cards in grids/carousels
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // =============================================================================
  // SUB-COMPONENTS
  // =============================================================================

  /**
   * ImageWithFallback: Responsive image component with error handling.
   * Uses Framer Motion for entrance animation; falls back to placeholder on load error.
   * @param {Object} props - Component props
   * @param {string} props.src - Primary image source
   * @param {string} props.fallback - Fallback image source on error
   * @param {string} props.alt - Image alt text for accessibility
   * @param {string} [props.className] - Optional CSS class for styling
   */
  const ImageWithFallback = ({ src, fallback, alt, className }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
      <motion.img // Wrap image in motion for scale-in
        src={imgSrc}
        alt={alt}
        className={className}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onError={() => setImgSrc(fallback)}
      />
    );
  };

  // =============================================================================
  // EVENT HANDLERS
  // =============================================================================

  // Handle previous slide in Swiper carousel
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Handle next slide in Swiper carousel
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // =============================================================================
  // DATA ARRAYS
  // =============================================================================

  // Services data array for the services grid (extracted from inline for easier icon swap)
  const servicesData = [
    { iconSrc: "/Core value section Icon (2).png", title: "Security solution", desc: "Advanced CCTV systems, access control, and security monitoring to protect your business assets." },
    { iconSrc: "/monitor (1).png", title: "IT Equipment Supply", desc: "High end laptops, printer and scanners, smart offices automation, smart speakers, and conferences cameras" },
    { iconSrc: "/Network (2).png", title: "Network Infrastructure", desc: "Professional networking equipment including routers, switches, and wireless solutions for reliable connectivity." },
    { iconSrc: "/Settings (1).png", title: "IT Consulting", desc: "Strategic technology planning and digital transformation consulting to optimize your business operations." },
    { iconSrc: "/certification-icon.svg", title: "Technical Support", desc: "24/7 support and maintenance services to ensure your systems run smoothly." },
    { iconSrc: "/innovation-hub-icon.svg", title: "Digital Solutions", desc: "Custom software solutions and digital tools to streamline your business processes and boost productivity." },
  ];

  // Product cards data for the Swiper carousel
  const productCards = [
    {
      src: "/frame-384.png",
      alt: "Laptops & Desktops",
      title: "Laptops & Desktops",
      desc: "High-performance computing devices for modern business needs."
    },
    {
      src: "/cctv.png",
      alt: "CCTV Security Systems",
      title: "CCTV Security Systems",
      desc: "Comprehensive security camera solutions for business protection."
    },
    {
      src: "/frame-230.png",
      alt: "Network Equipment",
      title: "Network Equipment",
      desc: "Routers, switches, and networking hardware for reliable connectivity."
    },
    {
      src: "/printermain.png",
      alt: "Printers",
      title: "Printers",
      desc: "Professional printing solutions for busy office environments."
    }
  ];

  // =============================================================================
  // JSX RENDER
  // =============================================================================

  return (
    <motion.div // Wrap whole site in motion for initial load
      className={styles.website}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* =============================================================================
         HERO SECTION
         ============================================================================= */}
      {/* Full-width hero with gradient background, animated text, and call-to-action buttons */}
      <motion.section 
        className={styles.hero}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger on scroll into view
        variants={heroVariants}
      >
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            variants={containerVariants}
          >
            <motion.div className={styles.heroText} variants={itemVariants}>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                FSX Tech
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Technology should simplify, not complicate. At FSX Tech, we design
                and deliver IT and digital solutions both hardware and software
                that help businesses in Nigeria and beyond run smoother, faster,
                and smarter.
              </motion.p>
              <motion.div className={styles.heroActions} variants={itemVariants}>
                <motion.a 
                  href="/contact" // Linked to a contact page; adjust if needed
                  className={styles.accentButtonHero}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.getStartedText}>Get Started</span>
                </motion.a>
                <motion.a 
                  href="/" // Back to brand family overview
                  className={styles.variant8Button} 
                  whileHover={{ scale: 1.02 }}
                >
                  <span className={styles.variant8Text}>Explore Services</span>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div className={styles.heroImage} variants={itemVariants}>
              <ImageWithFallback 
                src="/frame-321.png" 
                fallback="/placeholder.png"
                alt="Hero — Frame 321" 
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* =============================================================================
         ABOUT SECTION
         ============================================================================= */}
      {/* Two-column layout with text, features list, and image; staggered animations */}
      <motion.section 
        className={styles.about}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className={styles.container}>
          <motion.div className={styles.aboutContent} variants={containerVariants}>
            <motion.div className={styles.aboutText} variants={itemVariants}>
              <motion.h2 variants={itemVariants}>About FSX Tech</motion.h2>
              <motion.p variants={itemVariants}>
                At FSX Tech, we are a leading provider of smart digital and IT solutions in
                Nigeria, dedicated to helping businesses transform their operations
                through innovative technology.
              </motion.p>
              <motion.p variants={itemVariants}>
                Our mission is to deliver IT and digital solutions that help businesses run smoother, faster, and smarter.
                From laptops and CCTV systems to network infrastructure and digital transformation consulting,
                we provide comprehensive technology solutions tailored to your business needs.
              </motion.p>
              <motion.h3 variants={itemVariants}>Why Choose FSX Tech?</motion.h3>
              <motion.ul className={styles.featuresList} variants={itemVariants}>
                {[
                  "Simplify technology for business growth",
                  "Delivering reliable and scalable solutions",
                  "Providing exceptional customer support",
                  "Staying ahead with latest technology trends",
                  "Building long-term partnerships with clients"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle size={16} />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div className={styles.aboutImage} variants={itemVariants}>
              <ImageWithFallback 
                src="/workstation.png" 
                fallback="/placeholder.png"
                alt="3D Workstation" 
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* =============================================================================
         SERVICES SECTION
         ============================================================================= */}
      {/* Grid of service cards with icons, titles, and descriptions; hover interactions */}
      <motion.section 
        className={styles.services}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className={styles.container}>
          <motion.h2 
            variants={itemVariants}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p className={styles.servicesLead} variants={itemVariants}>
            We provide comprehensive IT solutions and innovative technologies designed to simplify operations and drive business growth across Nigeria and beyond.
          </motion.p>

          <motion.div className={styles.servicesGrid} variants={containerVariants}>
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                className={styles.serviceCard}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }} // Hover lift
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={styles.serviceIcon}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <img 
                    src={service.iconSrc}
                    alt={service.title}
                    style={{ width: 40, height: 40, objectFit: 'contain' }}
                  />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* =============================================================================
         PRODUCTS SECTION WITH SWIPER CAROUSEL
         ============================================================================= */}
      {/* Carousel of product cards with autoplay, pagination, and navigation arrows */}
      <motion.section 
        className={styles.products}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className={styles.container}>
          <motion.h2 variants={itemVariants}>Featured Products</motion.h2>
          <motion.p className={styles.productsLead} variants={itemVariants}>
            Premium IT equipment and technology solutions tailored for Nigerian businesses.
          </motion.p>

          <div className={styles.swiperContainer}>
            <motion.button 
              className={styles.swiperButtonPrev} 
              onClick={handlePrev} 
              aria-label="Previous slide"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.1}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: '.swiper-pagination-custom',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className={styles.swiperCustom}
            >
              {productCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className={styles.productCard}
                    variants={cardVariants}
                    whileHover={{ y: -10, rotateX: 5 }} // 3D tilt on hover
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ImageWithFallback
                      src={card.src}
                      fallback="/placeholder.png"
                      alt={card.alt}
                      className={styles.productImage}
                    />
                    <motion.div className={styles.productMeta} variants={itemVariants}>
                      <div className={styles.productTitle}>{card.title}</div>
                      <motion.p 
                        className={styles.productDesc}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {card.desc}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <motion.button 
              className={styles.swiperButtonNext} 
              onClick={handleNext} 
              aria-label="Next slide"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
            <div className={styles.swiperPaginationCustom}></div>
          </div>

          <motion.div className={styles.productsFooter} variants={itemVariants}>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Need custom configurations or bulk orders?
            </motion.p>
            <motion.a 
              href="/contact" // Linked to a contact page for quotes; adjust if needed
              className={styles.accentButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Custom Quote
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default App;