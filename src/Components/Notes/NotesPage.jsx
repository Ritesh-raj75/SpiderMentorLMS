import React from "react";
import { BookOpen, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

import pythonBg from "../../assets/python.webp";
import datascience from "../../assets/data-science.jpg";
import jsBg from "../../assets/js.avif";
import mobiledev from "../../assets/mobiledev.avif";
import webDevBg from "../../assets/web-development.jpg";
import notesBanner from "../../assets/NotesBanner.jpg";

const notes = [
  {
    id: 1,
    title: "Python Fundamentals Cheat Sheet",
    subject: "Python",
    description:
      "Complete reference guide covering Python basics, data types, functions, and object-oriented programming concepts.",
    pages: 12,
    downloads: 15420,
    category: "Programming",
    difficulty: "Beginner",
    downloadUrl: "/notes/python-fundamentals.pdf",
    backgroundImage: pythonBg,
  },
  {
    id: 2,
    title: "JavaScript ES6+ Features Guide",
    subject: "JavaScript",
    description:
      "Modern JavaScript features including arrow functions, destructuring, promises, async/await, and modules.",
    pages: 18,
    downloads: 12350,
    category: "Web Development",
    difficulty: "Intermediate",
    downloadUrl: "/notes/javascript-es6-features-guide.pdf",
    backgroundImage: jsBg,
  },
  {
    id: 3,
    title: "React Hooks Reference",
    subject: "React",
    description:
      "Comprehensive guide to React Hooks including useState, useEffect, useContext, and custom hooks with examples.",
    pages: 24,
    downloads: 9870,
    category: "Frontend",
    difficulty: "Intermediate",
    downloadUrl: "/notes/react-hooks-reference.pdf",
    backgroundImage: webDevBg,
  },
  {
    id: 4,
    title: "Data Science with Python",
    subject: "Data Science",
    description:
      "Essential libraries and techniques for data analysis using pandas, numpy, matplotlib, and scikit-learn.",
    pages: 32,
    downloads: 8540,
    category: "Data Science",
    difficulty: "Advanced",
    downloadUrl: "/notes/data-science-with-python.pdf",
    backgroundImage: datascience,
  },
  {
    id: 5,
    title: "AWS Services Overview",
    subject: "Cloud Computing",
    description:
      "Key AWS services for developers including EC2, S3, Lambda, RDS, and deployment strategies.",
    pages: 28,
    downloads: 7230,
    category: "Cloud",
    difficulty: "Intermediate",
    downloadUrl: "/notes/aws-services-overview.pdf",
    backgroundImage: mobiledev,
  },
  {
    id: 6,
    title: "Excel Formulas & Functions",
    subject: "Excel",
    description:
      "Most commonly used Excel formulas, functions, and shortcuts for data analysis and reporting.",
    pages: 16,
    downloads: 11200,
    category: "Productivity",
    difficulty: "Beginner",
    downloadUrl: "/notes/excel-formulas-functions.pdf",
    backgroundImage: mobiledev,
  },
  {
    id: 7,
    title: "JS Notes",
    subject: "JavaScript",
    description: "Quick reference JS notes for modern JavaScript concepts and syntax.",
    pages: 10,
    downloads: 8500,
    category: "Programming",
    difficulty: "Beginner",
    downloadUrl: "/notes/js-notes.pdf",
    backgroundImage: jsBg,
  },
];

export function NotesPage() {
  const getBadgeClass = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-success text-white";
      case "Intermediate":
        return "bg-warning text-dark";
      case "Advanced":
        return "bg-danger text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(to bottom right, #cfe2ff, #e0d4f7, #b6d4fe)",
        marginTop: "70px",
      }}
    >
      {/* Banner */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
        className="container-fluid px-0 position-relative"
        style={{
          backgroundImage: `url(${notesBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          borderRadius: "0 0 20px 20px",
        }}
      >
        {/* Optional Gradient Overlay */}
        <div className="banner-overlay"></div>

        {/* Optional Text on Banner
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center container bg-dark bg-opacity-50 p-4 rounded-3">
          <h1 className="display-5 fw-bold">Explore Study Notes</h1>
          <p className="lead">Well-structured notes curated for you</p>
        </div> */}
      </div>
      </motion.div>

      {/* Page Title */}
      <div className="container">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
           whileHover={{ scale: 1.03 }}
        >
          <h1 className="display-4 fw-bolder text-dark text-center">Study Notes</h1>
          <p className="text-muted text-center">
            Download comprehensive study materials and reference guides
          </p>
        </motion.div>

        {/* Notes Cards */}
        <div className="row g-4">
          {notes.map((note, index) => (
            <motion.div
              key={note.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
               whileHover={{ scale: 1.03 }}
            >
              <div className="card shadow-sm h-100 overflow-hidden">
                {/* Header Image */}
                <img
                  src={note.backgroundImage}
                  alt={note.title}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5 className="card-title">{note.title}</h5>
                      <div className="mb-2">
                        <span className="badge bg-primary me-2">
                          {note.category}
                        </span>
                        <span className={`badge ${getBadgeClass(note.difficulty)}`}>
                          {note.difficulty}
                        </span>
                      </div>
                    </div>
                    <BookOpen size={24} className="text-primary" />
                  </div>

                  <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                    {note.description}
                  </p>

                  <div className="d-flex justify-content-between text-muted small mb-3">
                    <span>{note.pages} pages</span>
                    <span>{note.downloads.toLocaleString()} downloads</span>
                  </div>

                  <div className="d-flex gap-2">
                    <a
                      href={note.downloadUrl}
                      download
                      className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    >
                      <Download size={16} />
                      Download
                    </a>
                    <button className="btn btn-light">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
export default NotesPage;
