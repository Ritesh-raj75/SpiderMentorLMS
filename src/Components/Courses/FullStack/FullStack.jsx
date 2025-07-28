import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../FullStack/FullStack.css";
import javaLogo from "../../../assets/javalogo.jpg";
import javamam from "../../../assets/javafront.png";
import backendImg from "../../../assets/BackendImg.jpg";
import DataScience from "../../../assets/Devops.jpg";
import CyberSecurity from "../../../assets/CyberSecurity.jpg";
import CloudCom from "../../../assets/Cloud Computing.jpg";
import Devops from "../../../assets/Devops.jpg";
import { Cloud } from "lucide-react";


const courseSections = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and build real-world apps.",
    image: javaLogo,
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description:
      "Master Python, pandas, scikit-learn, TensorFlow, and build ML models with real datasets.",
    image: DataScience,
  },
  {
    id: 3,
    title: "Cybersecurity & Ethical Hacking",
    description:
      "Learn penetration testing, networking, Linux, Kali tools, and secure systems.",
    image: CyberSecurity,
  },
  {
    id: 4,
    title: "Cloud Computing with AWS",
    description:
      "Get hands-on with AWS, EC2, S3, Lambda, and prepare for AWS Certified exams.",
    image: CloudCom,
  },
  {
    id: 5,
    title: "DevOps & CI/CD",
    description:
      "Understand Docker, Kubernetes, Jenkins, GitHub Actions, and automate deployments.",
    image: Devops,
  },
];

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="courses-container" style={{marginTop:"64px"}}>

      {/* Hero Section */}
      <div
        className="text-white py-5"
        style={{
          backgroundImage: `url(${javaLogo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-4 bg-dark bg-opacity-25 rounded" data-aos="fade-up">
          <div className="container">
            <h1 className="display-4">
              Full Stack Development <br />
              <span className="text-warning">with AI</span>{" "}
              <span className="badge bg-success">Offline batch</span>
            </h1>
            <p className="lead">Build, Deploy & Scale Full-Stack Applications</p>
            <ul className="list-unstyled">
              <li>✅ 8 Months Program</li>
              <li>✅ Job Assistance Program</li>
              <li>✅ Certification from PW Skills & PwC</li>
            </ul>
            <button className="btn btn-primary mt-3">Enroll Now</button>
          </div>
        </div>
      </div>

      {/* Availability Section */}
      <div className="container text-center my-5" data-aos="fade-down">
        <h2>📍 Now Available in 6 Cities</h2>
        <p>Join our offline hybrid batch in Noida, Lucknow, Patna, Pune, Jaipur, Bengaluru</p>
      </div>

      {/* Industry Tools Section */}
      <div className="container my-5" data-aos="zoom-in">
        <h2 className="text-center mb-4">🔧 Learn Industry-Relevant Tools</h2>
        <div className="row justify-content-center g-4">
          {[
            "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
            "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
            "https://cdn.worldvectorlogo.com/logos/docker.svg",
            "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg",
          ].map((src, index) => (
            <div className="col-2" key={index}>
              <img src={src} alt="Tool" className="img-fluid" />
            </div>
          ))}
          <div className="col-2">
            <img src={javamam} alt="Java Mentor" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={backendImg} alt="Backend" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Courses Cards Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">📚 Our Courses</h2>
        <div className="row">
          {courseSections.map((course) => (
            <div className="col-md-4 mb-4" key={course.id} data-aos="flip-left">
              <div className="card h-100 shadow">
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gain Section */}
      <div className="container my-5" data-aos="fade-right">
        <h2 style={{backgroundColor:""}}>
          Equipping you with essential full-stack development skills through a{" "}
          <span className="text-primary">hands-on, industry-aligned curriculum.</span>
        </h2>
        <p>
          Built by <strong>PW Skills</strong>. In collaboration with <strong>PwC</strong>
        </p>
        <div className="alert alert-info" role="alert">
          🎓 Earn a certificate co-branded with <strong>PricewaterhouseCoopers</strong>, designed to
          add credibility to your resume and visibility to your skills.
        </div>
        <div className="bg-light p-3 rounded shadow-sm mt-3">
          <h4>🚀 What You’ll Gain:</h4>
          <p>Learn the skills for <strong>2025 and beyond</strong>.</p>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="container my-5 text-center" data-aos="fade-up">
        <h2>🚀 Career Paths You Can Explore</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
          {["Front-End Developer", "Back-End Developer", "Full Stack Developer", "Software Developer"].map((role) => (
            <button className="btn btn-outline-secondary" key={role}>
              {role}
            </button>
          ))}
        </div>

        <div className="card mt-5 mx-auto" style={{ maxWidth: "800px" }} data-aos="zoom-in">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={javamam} alt="Mentor" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body text-start">
                <h5 className="card-title">Priya Mathur</h5>
                <h6 className="card-subtitle mb-2 text-muted">Senior Software Developer</h6>
                <p className="card-text">
                  7 Years Working Experience | 4 Years Teaching Experience. A structured mentoring
                  approach designed to support learners at every stage of their professional journey.
                  It focuses on goal setting, skill development, and practical guidance, covering
                  resume building, interview preparation, career planning, and upskilling to enable
                  meaningful career progression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Courses;