import React from "react";
import "./About.css";
import { FiUsers, FiBookOpen, FiAward, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      className="pt-5"
      style={{
        background:
          "linear-gradient(to bottom right, #cfe2ff, #e0d4f7, #b6d4fe)",
        marginTop: "70px",
      }}
    >
      {/* Banner Image */}
      <div className="mb-4">
        <motion.div
          className="container-fluid px-0 position-relative"
          style={{ overflow: "hidden", borderRadius: "10px" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="./AboutBanner.png"
            alt="About Banner"
            className=""
            style={{backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          borderRadius: "0 0 20px 20px", }}
          />
        </motion.div>
      </div>

      <div className="container py-5">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-4 fw-bold">Welcome to SpiderMentor</h1>
          <p className="lead text-muted">
            Empowering individuals and organizations worldwide with lifelong
            learning and skill development.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="row mb-5">
          <motion.div
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h3 fw-bold mb-3">Our Mission</h2>
            <p>
              SpiderMentor’s mission is to create opportunities by opening access to
              quality education for everyone—from individuals to enterprises and educators.
            </p>
            <p>
              Our vision: a world where learning transforms lives and organizations
              through scalable, on-demand skill development.
            </p>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-primary text-white p-4 rounded h-100">
              <h3 className="h5 fw-semibold mb-3">What We Offer</h3>
              <ul className="list-unstyled mb-0">
                <li>📚 Expert-led global online courses</li>
                <li>🎥 Free previews before enrollment</li>
                <li>🏆 Completion certificates</li>
                <li>💡 AI-driven course suggestions</li>
                <li>📱 Mobile & web learning access</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="row text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[{ icon: <FiUsers />, count: "80M+", label: "Learners", color: "primary" },
            { icon: <FiBookOpen />, count: "200K+", label: "Courses", color: "success" },
            { icon: <FiAward />, count: "56K+", label: "Instructors", color: "warning" },
            { icon: <FiGlobe />, count: "190+", label: "Countries", color: "danger" }].map((item, index) => (
            <motion.div
              key={index}
              className="col-md-3 mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="bg-white p-4 shadow rounded">
                <div className={`text-${item.color} mb-2`} style={{ fontSize: 40 }}>
                  {item.icon}
                </div>
                <h3 className="fw-bold">{item.count}</h3>
                <p>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center h3 fw-bold mb-4">Success Stories</h2>
          <div className="mx-auto" style={{ maxWidth: "700px" }}>
            <motion.blockquote
              className="blockquote bg-white p-3 rounded shadow mb-3 border-start border-primary border-4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              “SpiderMentor changed my life! I landed a job within 3 months
              after completing a certification.” – Rahul K.
            </motion.blockquote>
            <motion.blockquote
              className="blockquote bg-white p-3 rounded shadow border-start border-success border-4"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              “Teaching on SpiderMentor helped me reach thousands of learners
              globally.” – Neha S.
            </motion.blockquote>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h3 fw-bold mb-4">Our Leadership</h2>
          <div className="row">
            {[
              {
                initials: "VP",
                name: "Vikas Patel",
                role: "Founder & CEO",
                desc: "Ex-Academic turned EdTech visionary with 10+ years of leadership.",
              },
              {
                initials: "RK",
                name: "Riya Kapoor",
                role: "Head of Product",
                desc: "Passionate about UX and outcome-based learning.",
              },
              {
                initials: "AK",
                name: "Ankit Kumar",
                role: "CTO",
                desc: "Architecting scalable learning systems with AI-first approach.",
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                className="col-md-4 mb-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="bg-white p-4 rounded shadow h-100">
                  <div
                    className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80, fontSize: 24 }}
                  >
                    {person.initials}
                  </div>
                  <h4>{person.name}</h4>
                  <p className="text-muted mb-1">{person.role}</p>
                  <p className="small text-muted">{person.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* News & Press */}
        <motion.div
          className="bg-white p-4 rounded shadow mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="fw-bold mb-3">In the News</h3>
          <ul className="list-unstyled">
            <li>✔ Recognized by Fosway as “Strategic Skill Leader” – 2025</li>
            <li>🚀 Launched AI-powered personalized learning journeys</li>
            <li>🏏 Official Learning Partner for Mumbai Indians – 2025</li>
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-dark text-white p-5 rounded" style={{ background: "linear-gradient(to right, #1a1a1aff, #333)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="fw-bold mb-3">Ready to Build Your Future?</h3>
          <p className="mb-4">
            Join learners and instructors worldwide — start your journey with
            SpiderMentor today.
          </p>
          <button className="btn btn-primary me-3">Browse Courses</button>
          <button className="btn btn-outline-light">Become an Instructor</button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
