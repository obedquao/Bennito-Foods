import { motion } from "framer-motion";
import "../styles/services.css";

export default function Services() {
  const services = [
    {
      title: "Customized Lunch Menu for Corporate Organizations",
      desc: "Tailored meals designed to fuel productivity and delight employees.",
      icon: "/images/corporatemenu.webp",
    },
    {
      title: "Food Catering for Conference Meetings",
      desc: "Professional catering that keeps your meetings running smoothly.",
      icon: "/images/conference.webp",
    },
    {
      title: "Large Food Orders",
      desc: "Bulk orders delivered with freshness and precision.",
      icon: "/images/large.webp",
    },
    {
      title: "Buffet Setup for Corporate Functions",
      desc: "Elegant buffet arrangements to impress your guests.",
      icon: "/images/buffet.webp",
    },
    {
      title: "Food Projects in Rural and Urban Areas",
      desc: "Community-focused initiatives bringing nourishment to all.",
      icon: "/images/rural.webp",
    },
    {
      title: "Personal Food Orders",
      desc: "Special meals prepared just for you, on demand.",
      icon: "/images/personal.webp",
    },
  ];

  return (
    <section id="services" className="services">
      {/* SECTION TITLE */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      {/* SERVICES GRID */}
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.12,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={service.icon} alt="" className="service-icon" />

            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
