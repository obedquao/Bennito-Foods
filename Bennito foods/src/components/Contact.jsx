import React from "react";
import "../styles/contact.css";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* LEFT: CONTACT DETAILS */}
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="contact-subtitle">contact us</h4>
        <h2 className="contact-title">
          Get in touch!
        </h2>

        <p className="contact-desc">
          Have questions or want to purchase our services?
          <br />
          We're here to provide the best catering services in Ghana!
          <br/>
           Reach out to us.
        </p>

        {/* LOCATION */}
        <div className="contact-item">
          <MapPin className="contact-icon" color="#FF7F11" />
          <span>Adenta – Frafraha opposite Posam Kiddie Star School</span>
        </div>

        {/* PHONE NUMBERS */}
        <div className="contact-item">
          <Phone className="contact-icon" color="#FF7F11"/>
          <div className="contact-phone-list">
            <p>0548599308 / 0202257849</p>
            
          </div>
        </div>

        {/* EMAIL */}
        <div className="contact-item">
          <Mail className="contact-icon" color="#FF7F11"/>
          <a href="mailto:bennitofoods@gmail.com" className="contact-email">
            bennitofoods@gmail.com
          </a>
        </div>

        {/* BUTTON */}
        <button 
        className="contact-btn" 
        onClick={()=>window.location.href = 'mailto:bennitofoods@gmail.com'}
        >Get In Touch</button>
      </motion.div>

      {/* RIGHT: MAP */}
      <motion.div
        className="contact-map"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.9367335452484!2d-0.15796832590840726!3d5.722253594259775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d27bfa2a22d%3A0xf878c453716db98f!2sPosam%20Kiddie%20Star!5e0!3m2!1sen!2sgh!4v1765476366907!5m2!1sen!2sgh"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
