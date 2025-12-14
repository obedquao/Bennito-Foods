import { motion } from "framer-motion";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        {/* BRAND */}
        <div className="footer-brand">
          <h3>Bennito Foods & Bakery</h3>
          <p>Chorkish, Sporkish, Taste</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SOCIALS */}
        <div className="followus">
            <h4>Follow Us</h4>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <img src="/icons/facebook.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/icons/instagram.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <img src="/icons/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
        </div>
        

      </motion.div>

      {/* COPYRIGHT */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        © 2025 Bennito Foods & Bakery. All rights reserved.
      </motion.div>

    </footer>
  );
}
