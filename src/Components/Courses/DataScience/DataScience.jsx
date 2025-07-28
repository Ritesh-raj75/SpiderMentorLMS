import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../DataScience/DataScience.css';
import databaseprocess from '../../../assets/databaseprocess.png';
import datamining from '../../../assets/datamining.png';
import machinelearning from '../../../assets/machinelearning.jpg';
import datavisualization from '../../../assets/datavisualization.png';
import datastatics from '../../../assets/dataStatics.jpg';
import heroBg from '../../../assets/hero-bg.jpg';
import mentorImg from '../../../assets/mentor.jpg';

export default function FullStackPromo() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* 🎯 Hero Banner Section */}
      <div
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          height: "450px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop:"64px"
        }}
      >
        <div className="container bg-dark bg-opacity-50 p-4 rounded-3" data-aos="fade-up">
          <h1 className="fw-bold">Data Scientist <span className="text-info">with AI</span></h1>
          <p className="lead">Build, Deploy & Scale Data Scientist Applications</p>
          <ul className="list-unstyled">
            <li>✅ 8 Months Program</li>
            <li>✅ Job Assistance Program</li>
            <li>✅ Certification from PW Skills & PwC</li>
          </ul>
          <button className="btn btn-info px-4 mt-2 fw-bold">🚀 Enroll Now</button>
        </div>
      </div>

      {/* 📍 City Banner */}
      <div className="text-center bg-light py-4 px-2" style={{ fontSize: "1.25rem" }} data-aos="zoom-in">
        <p className="mb-2 text-primary fw-bold fs-4">
          📍 Now Available in 6 Cities
        </p>
        <p className="text-muted fs-5">
          Join our offline hybrid batch in <strong>Noida, Lucknow, Patna, Pune, Jaipur, Bengaluru</strong>
        </p>
      </div>

      {/* 🔧 Tools Grid */}
      <div className="container text-center py-5">
        <h2 className="mb-5 fs-3 fw-bold" data-aos="fade-right">🔧 Learn Industry-Relevant Tools</h2>
        <div className="row justify-content-center g-4">
          {[databaseprocess, datamining, machinelearning, datavisualization, datastatics].map((logo, index) => (
            <div key={index} className="col-6 col-md-2" data-aos="flip-left">
              <img
                src={logo}
                alt="tool"
                className="img-fluid rounded shadow"
                style={{
                  height: "220px",
                  width: "200%",
                  objectFit: "cover"
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 📘 What You'll Learn */}
      <div className="container py-5" data-aos="fade-up">
        <h2 className="fw-bold mb-4 text-center">📘 What You'll Learn</h2>
        <div className="row text-center g-4">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="bg-light p-4 rounded shadow">
              <h5>Data Analysis with Python</h5>
              <p>Master data handling, wrangling, and preprocessing using NumPy and Pandas.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-light p-4 rounded shadow">
              <h5>Machine Learning & AI</h5>
              <p>Train, evaluate, and deploy intelligent models using Scikit-learn, TensorFlow & more.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-light p-4 rounded shadow">
              <h5>Data Visualization</h5>
              <p>Communicate data stories through beautiful dashboards using Power BI & Tableau.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 👨‍🏫 Mentor Section */}
      <div className="container py-5" data-aos="fade-up">
        <h2 className="fw-bold text-center mb-4">👨‍🏫 Meet Your Mentor</h2>
        <div className="row align-items-center">
          <div className="col-md-5" data-aos="fade-right">
            {/* <img src={mentorImg} alt="Mentor" className="img-fluid rounded shadow" /> */}
          </div>
          <div className="col-md-7" data-aos="fade-left">
            <h4>Dr. Akshay Verma</h4>
            <p className="text-muted">Ex-Data Scientist at Amazon, Mentor for over 10,000+ students globally</p>
            <ul className="list-unstyled">
              <li>🎓 PhD in AI & Machine Learning</li>
              <li>💼 10+ Years Industry Experience</li>
              <li>🌍 Delivered sessions across 5 countries</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 📣 Final CTA */}
      <div className="bg-info text-white py-5 text-center" data-aos="zoom-in">
        <h3 className="fw-bold">Ready to become a Data Scientist?</h3>
        <p className="lead">Join India’s most structured Data Scientist Program with Placement Assistance</p>
        <button className="btn btn-light fw-bold px-4 py-2 mt-3">🚀 Book Your Seat</button>
      </div>
    </div>
  );
}
