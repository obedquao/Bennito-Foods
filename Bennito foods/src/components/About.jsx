import { motion } from "framer-motion";
import "../styles/about.css";

const images = [
 "/images/about/about1.webp",
  "/images/about/about2.jfif",
  "/images/about/food1.webp",
  "/images/about/food2.jfif",
  "/images/about/food3.jfif",
  "/images/about/food4.jfif",
];

export default function About() {
  return (
    <section id="about" className="about">
      
      {/* TEXT CONTENT */}
      <motion.div
        className="about-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2>About Bennito Foods & Bakery</h2>
        <div className="divider"></div>
        <p>
          Located in Adenta – Frafraha opposite Posam Kiddie Star School,
          Bennito Foods & Bakery is your trusted partner for corporate
          catering, personal meals, large orders, and community food
          projects. We deliver fresh, tasty, and customized meals with
          professionalism and care.
        </p>
      </motion.div>

      {/* IMAGES GRID */}
      <div className="about-images">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt="Bennito Foods meals"
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.12,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        ))}
      </div>

    </section>
  );
}
