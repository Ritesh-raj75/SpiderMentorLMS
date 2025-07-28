// src/pages/SearchResults.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { BookOpen, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import pythonBg from "../assets/python.webp";
import datascience from "../assets/data-science.jpg";
import jsBg from "../assets/js.avif";
import mobiledev from "../assets/mobiledev.avif";
import webDevBg from "../assets/web-development.jpg";
import FullStack from "../assets/fullStack.jpg";

const notes = [
  {
    id: 1,
    title: "Python Fundamentals Cheat Sheet",
    subject: "Python",
    description: "Complete reference guide covering Python basics…",
    pages: 12,
    downloads: 15420,
    category: "Programming",
    difficulty: "Beginner",
    downloadUrl: "/notes/python-fundamentals.pdf",
    backgroundImage: pythonBg,
  },
  {
    id: 2,
    title: "Data Science Handbook",
    subject: "Data Science",
    description: "A comprehensive guide to data science concepts and techniques.",
    pages: 250,
    downloads: 10230,
    category: "Data Science",
    difficulty: "Intermediate",
    downloadUrl: "/notes/data-science-handbook.pdf",
    backgroundImage: datascience,
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    subject: "JavaScript",
    description: "Learn the fundamentals of JavaScript programming.",
    pages: 180,
    downloads: 8740,
    category: "Programming",
    difficulty: "Beginner",
    downloadUrl: "/notes/javascript-essentials.pdf",
    backgroundImage: jsBg,
  },
  {
    id: 4,
    title: "Mobile Development Guide",
    subject: "Mobile Development",
    description: "Everything you need to know about mobile app development.",
    pages: 300,
    downloads: 6540,
    category: "Mobile Development",
    difficulty: "Advanced",
    downloadUrl: "/notes/mobile-development-guide.pdf",
    backgroundImage: mobiledev,
  },
  {
    id: 5,
    title: "Web Development Best Practices",
    subject: "Web Development",
    description: "Best practices for building modern web applications.",
    pages: 220,
    downloads: 12340,
    category: "Web Development",
    difficulty: "Intermediate",
    downloadUrl: "/notes/web-development-best-practices.pdf",
    backgroundImage: webDevBg,
  },
  {
    id: 6,
    title: "Full Stack Development Guide",
    subject: "Full Stack Development",
    description: "A complete guide to becoming a full stack developer.",
    category: "Web Development",
    difficulty: "Advanced",
    downloadUrl: "/notes/full-stack-development-guide.pdf",
    backgroundImage: FullStack,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const filtered = notes.filter((note) =>
    [note.title, note.subject, note.description]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div
      className="container py-5"
      style={{
        marginTop: "90px",
        background: "linear-gradient(to bottom right, #f4f6fd, #e0d4f7)",
        borderRadius: "10px",
      }}
    >
      <div className="mb-4">
        <h2 className="fw-bold text-dark">
          Results for: <span className="text-primary">{query}</span>{" "}
          <span className="text-muted fs-5">({filtered.length})</span>
        </h2>
      </div>

      {filtered.length ? (
        <div className="row g-4">
          {filtered.map((note, idx) => (
            <motion.div
              key={note.id}
              className="col-md-6 col-lg-4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={note.backgroundImage}
                  alt={note.title}
                  className="card-img-top"
                  style={{ height: 180, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="text-muted small mb-1">{note.subject}</p>
                  <p className="card-text text-muted">{note.description}</p>

                  <div className="d-flex justify-content-between text-muted small my-2">
                    <span>{note.pages} pages</span>
                    <span>{note.downloads.toLocaleString()} downloads</span>
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <a
                      href={note.downloadUrl}
                      download
                      className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    >
                      <Download size={16} />
                      Download
                    </a>
                    <button className="btn btn-outline-secondary">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <h5 className="text-muted">No notes found for "{query}".</h5>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
