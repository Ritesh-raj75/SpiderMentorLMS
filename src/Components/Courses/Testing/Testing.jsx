import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Testing/Testing.css';

import manual from '../../../assets/manual.png';
import selenium from '../../../assets/selinium.png';
import junit from '../../../assets/junit.jpeg';
import testng from '../../../assets/testing.jpg';
import bugzilla from '../../../assets/bugzilla.webp';
import heroBg from '../../../assets/testing-hero.jpg';

export default function SoftwareTestingPromo() {
  const toolNames = ["Manual", "Selenium", "JUnit", "TestNG", "Bugzilla"];
  const toolLogos = [manual, selenium, junit, testng, bugzilla];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark" style={{marginTop:"64px"}}>

      {/* 🎯 Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          height: "450px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <div className="container py-4 bg-dark bg-opacity-25 rounded" data-aos="fade-down">
            <div className="container">
          <h1 className="fw-bold display-4">Software Testing <span className="text-warning">Mastery</span></h1>
          <p className="lead">Learn Manual + Automation + Bug Tracking</p>
          <ul className="list-unstyled">
            <li>✅ 6 Months Program</li>
            <li>✅ Includes Selenium, TestNG, JUnit</li>
            <li>✅ Job Assistance & Live Projects</li>
          </ul>
          <button className="btn btn-warning px-4 mt-2 fw-bold">
            🚀 Enroll Now
          </button>
        </div>
        </div>
      </div>

      {/* 📍 City Availability Banner */}
      <div className="text-center bg-white py-4 px-2" data-aos="zoom-in">
        <p className="mb-2 text-primary fw-bold fs-4">
          📍 Now Available in 6 Cities
        </p>
        <p className="text-muted fs-5">
          Join our offline hybrid batch for <strong>Software Testing</strong> in <strong>Noida, Lucknow, Patna, Pune, Jaipur, Bengaluru</strong>
        </p>
      </div>

      {/* 🔧 Tools Section */}
      <div className="container text-center py-5" data-aos="fade-up">
        <h3 className="mb-5 fs-2 fw-bold">🧪 Master Software Testing Tools</h3>
        <div className="row justify-content-center g-5">
          {toolLogos.map((logo, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-2" data-aos="flip-left">
              <img
                src={logo}
                alt={toolNames[index]}
                className="img-fluid rounded shadow-sm"
                style={{
                  height: "80px",
                  objectFit: "contain",
                }}
              />
              <p className="mt-3 fs-5 fw-semibold">{toolNames[index]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 💡 What You’ll Learn */}
      <section className="container py-5 bg-white rounded shadow-sm" data-aos="fade-right">
        <h2 className="mb-4 text-center">📘 What You’ll Learn</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✅ Manual Testing Techniques & Test Case Writing</li>
          <li className="list-group-item">✅ Selenium WebDriver & Test Automation</li>
          <li className="list-group-item">✅ JUnit & TestNG Frameworks</li>
          <li className="list-group-item">✅ Defect Reporting with Bugzilla</li>
          <li className="list-group-item">✅ Agile Testing Practices & Project Integration</li>
        </ul>
      </section>

      {/* 🎓 Career Paths */}
      <section className="container py-5" data-aos="fade-left">
        <h2 className="mb-4 text-center">🎓 Career Opportunities</h2>
        <div className="row g-4">
          {["QA Engineer", "Automation Tester", "Manual Testing Executive", "Test Analyst", "SDET", "Bug Tracker Specialist"].map((role, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 shadow-sm p-3">
                <h5>{role}</h5>
                <p>Work with top MNCs and startups in software quality assurance and test automation.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Final CTA */}
      <section className="text-center py-5 bg-dark text-white" data-aos="zoom-in-up">
        <h2 className="mb-3">🚀 Ready to Launch Your Testing Career?</h2>
        <p>Join our expert-led software testing bootcamp with job support and live projects.</p>
        <button className="btn btn-lg btn-warning">Get Started Today</button>
      </section>

    </div>
  );
}
