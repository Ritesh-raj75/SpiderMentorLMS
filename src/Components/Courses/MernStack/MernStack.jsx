import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mongo from "../../../assets/Mongo.png";
import react from "../../../assets/React.jpg";
import nodejs from "../../../assets/nodejs.webp";
import backendImg from "../../../assets/mern.png";

const Mern = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark" style={{ marginTop: "50px" }}>
      {/* ✅ Hero Section */}
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: `url(${backendImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px",
        }}
      >
        <div className="container py-4 bg-dark bg-opacity-25 rounded" data-aos="fade-up">
            <div className="container">
          <h1 className="display-4 fw-bold">MERN Stack Developer</h1>
          <p className="lead">
            Master MongoDB, Express.js, React, and Node.js — and become a full-stack web developer.
          </p>
          <ul className="list-unstyled">
            <li>✅ 6 Months Extensive Training</li>
            <li>✅ 100% Placement Assistance</li>
            <li>✅ Build 10+ Real Projects</li>
          </ul>
          <button className="btn btn-warning btn-lg mt-3">Join Now</button>
        </div>
        </div>
      </section>

      {/* ✅ Course Highlights */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="mb-4 text-center">🚀 Course Highlights</h2>
        <div className="row g-4">
          {[{ title: "MongoDB & Express", desc: "Understand NoSQL and build RESTful APIs with Express and MongoDB.", img: Mongo },
            { title: "Frontend with React", desc: "Build dynamic single-page apps using React, Hooks, and Redux.", img: react },
            { title: "Node.js Backend", desc: "Create powerful backend services using Node.js and Express.", img: nodejs },
          ].map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card shadow-sm h-100">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ What You’ll Learn */}
      <section className="container py-5 bg-white rounded shadow-sm" data-aos="fade-right">
        <h2 className="mb-4 text-center">📘 What You’ll Learn</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✅ Building full-stack MERN apps from scratch</li>
          <li className="list-group-item">✅ Using React Router, Context API, and Redux</li>
          <li className="list-group-item">✅ Authentication with JWT and OAuth</li>
          <li className="list-group-item">✅ Deployment on Vercel, Netlify, and Render</li>
          <li className="list-group-item">✅ CI/CD and GitHub Actions integration</li>
        </ul>
      </section>

      {/* ✅ Tools & Technologies */}
      <section className="container py-5" data-aos="zoom-in">
        <h2 className="mb-4 text-center">🛠 Tools & Technologies</h2>
        <div className="row text-center">
          {[{ name: "MongoDB", logo: "https://img.icons8.com/color/96/mongodb.png" },
            { name: "Express", logo: "https://img.icons8.com/ios/100/000000/express-js.png" },
            { name: "React", logo: "https://img.icons8.com/color/96/react-native.png" },
            { name: "Node.js", logo: "https://img.icons8.com/color/96/nodejs.png" },
            { name: "GitHub", logo: "https://img.icons8.com/material-rounded/96/github.png" },
            { name: "VS Code", logo: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
          ].map((tool, index) => (
            <div className="col-6 col-md-2 mb-3" key={index}>
              <img src={tool.logo} alt={tool.name} className="img-fluid" style={{ height: "60px" }} />
              <p className="mt-2">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Career Path Section */}
      <section className="container py-5 bg-white" data-aos="fade-left">
        <h2 className="mb-4 text-center">🎓 Career Opportunities</h2>
        <div className="row g-4">
          {["Full Stack Developer", "Frontend React Developer", "Backend Node.js Engineer", "MERN Stack Intern", "Software Engineer", "Technical Consultant"].map((role, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 shadow-sm p-3">
                <h5>{role}</h5>
                <p>Work in tech startups, product-based firms, or freelance as a skilled MERN developer.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ New: Course Schedule */}
      <section className="container py-5 bg-light" data-aos="fade-up-right">
        <h2 className="mb-4 text-center">📅 Course Schedule</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">📍 Week 1–4: HTML, CSS, JS, Git</li>
          <li className="list-group-item">📍 Week 5–8: React Basics + Project</li>
          <li className="list-group-item">📍 Week 9–12: Node.js + Express + MongoDB</li>
          <li className="list-group-item">📍 Week 13–16: Fullstack Projects</li>
          <li className="list-group-item">📍 Week 17–24: Advanced Projects & Placement</li>
        </ul>
      </section>

      {/* ✅ New: Mentors Section */}
      <section className="container py-5 bg-white" data-aos="fade-up">
        <h2 className="mb-4 text-center">👨‍🏫 Meet Your Mentors</h2>
        <div className="row text-center">
          {[{ name: "Anjali Verma", role: "React Trainer", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Ravi Kumar", role: "Backend Expert", photo: "https://randomuser.me/api/portraits/men/45.jpg" },
          ].map((mentor, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card p-3 shadow-sm">
                <img src={mentor.photo} alt={mentor.name} className="rounded-circle mx-auto" style={{ width: "100px" }} />
                <h5 className="mt-3">{mentor.name}</h5>
                <p>{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ New: Testimonials Section */}
      <section className="container py-5 bg-light" data-aos="zoom-in">
        <h2 className="mb-4 text-center">💬 What Students Say</h2>
        <div className="row">
          {[
            { name: "Nidhi", review: "The MERN course was life-changing. The instructors are very helpful!", img: "https://randomuser.me/api/portraits/women/50.jpg" },
            { name: "Aman", review: "Built real projects and got placed in a product-based company!", img: "https://randomuser.me/api/portraits/men/51.jpg" },
          ].map((student, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card p-3 shadow-sm h-100">
                <div className="d-flex align-items-center">
                  <img src={student.img} alt={student.name} className="rounded-circle" style={{ width: "60px" }} />
                  <div className="ms-3">
                    <h6>{student.name}</h6>
                    <p className="mb-0">{student.review}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ New: FAQ Section */}
      <section className="container py-5 bg-white" data-aos="fade-up">
        <h2 className="mb-4 text-center">❓ Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {[{ q: "Do I need coding experience?", a: "No prior experience needed! We start from basics." },
            { q: "Is this course beginner-friendly?", a: "Yes, it is structured for complete beginners to advanced level." },
            { q: "Will I get a certificate?", a: "Yes, you’ll receive an industry-recognized certificate." },
          ].map((faq, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header" id={`heading${idx}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`}>
                  {faq.q}
                </button>
              </h2>
              <div id={`collapse${idx}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="text-center py-5 bg-dark text-white" data-aos="zoom-in-up">
        <h2 className="mb-3">🚀 Ready to Launch Your MERN Journey?</h2>
        <p>Join our expert-led bootcamp and become job-ready in 6 months.</p>
        <button className="btn btn-lg btn-warning">Get Started Today</button>
      </section>
    </div>
  );
};

export default Mern;
