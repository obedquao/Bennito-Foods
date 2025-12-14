import React, { useState, useEffect } from 'react';
import '../styles/hero.css';
import { motion } from 'framer-motion';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    '/images/hero1.webp',
    '/images/hero4.webp',
    '/images/hero3.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id='home' className="training-hero">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="traininghero-overlay"></div>

      {/* Content */}
      <motion.div className="traininghero-content"
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}>

        <motion.h1
        initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}>
          Chorkish, Sporkish, Taste <br />
           Experience Food Like Never Before!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}>
           Customized meals, corporate catering, personal orders, and food projects – we bring taste to your table.</motion.p>
        <motion.button  className="btn-join" onClick={() => {
                     document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" });
                  }}
           initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}>
           Place Your Order
        </motion.button>
      </motion.div>

      
    </section>
  );
}