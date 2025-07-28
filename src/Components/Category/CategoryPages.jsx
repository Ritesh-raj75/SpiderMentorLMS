"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { BookOpen, Users, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

import pythonBg from "../../assets/python.webp"
import datascience from "../../assets/data-science.jpg"
import jsBg from "../../assets/js.avif"
import mobiledev from "../../assets/mobiledev.avif"
import webDevBg from "../../assets/web-development.jpg"

const categories = [
  {
    id: 1,
    name: "Python",
    description: "Learn Python programming from basics to advanced concepts",
    courses: 1250,
    students: 485000,
    icon: "🐍",
    trending: true,
    backgroundImage: pythonBg,
  },
  {
    id: 2,
    name: "JavaScript",
    description: "Master modern JavaScript and web development",
    courses: 980,
    students: 324000,
    icon: "⚡",
    trending: true,
    backgroundImage: jsBg,
  },
  {
    id: 3,
    name: "Web Development",
    description: "Build responsive websites and web applications",
    courses: 1450,
    students: 612000,
    icon: "🌐",
    trending: true,
    backgroundImage: webDevBg,
  },
  {
    id: 4,
    name: "Data Science",
    description: "Analyze data and build machine learning models",
    courses: 750,
    students: 289000,
    icon: "📊",
    trending: true,
    backgroundImage: datascience,
  },
  {
    id: 5,
    name: "AWS Certification",
    description: "Get certified in Amazon Web Services",
    courses: 320,
    students: 156000,
    icon: "☁",
    trending: false,
    backgroundImage: datascience, // updated to avoid image repeat
  },
  {
    id: 6,
    name: "Mobile Development",
    description: "Build iOS and Android applications",
    courses: 520,
    students: 178000,
    icon: "📱",
    trending: true,
    backgroundImage: mobiledev,
  },
]

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
}

export function CategoryPage() {
  const [filteredCategories, setFilteredCategories] = useState(categories)
  const location = useLocation()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const filter = urlParams.get("filter")

    if (filter) {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(filter.toLowerCase())
      )
      setFilteredCategories(filtered)
    } else {
      setFilteredCategories(categories)
    }
  }, [location.search])

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(to bottom right, #e0ecff, #e6ccff, #a5c9ff)",
        marginTop: "70px",
      }}
    >
      <section className="position-relative">
  <motion.div
    className="container-fluid px-0"
          style={{ overflow: "hidden", borderRadius: "10px" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
  
    <img
      src="./section-2.jpg"
      alt="Learning Banner"
      className="w-100"
      style={{ maxHeight: "400px", objectFit: "cover", objectPosition: "center" }}
    />
    <div
      className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
      style={{ textShadow: "0 0 10px rgba(0,0,0,0.6)" }}
    >
      <h1 className="display-4 fw-bolder text-dark">Level Up Your Skills</h1>
      <p className="fs-5 text-dark">
        Learn from top instructors and take your career to the next level
      </p>
      <Link to="/courses" className="btn btn-warning btn-lg mt-2 fw-semibold shadow">
        Browse Courses
      </Link>
    </div>
  </motion.div>
</section>
      <div className="container">
        <div className="mb-5 text-center">
          <motion.h1
            className="display-5 fw-bold text-dark"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Course Categories
          </motion.h1>
          <p className="text-muted fs-5">
            Explore courses by category and find your perfect learning path
          </p>
        </div>

        {/* Trending Categories */}
        <section className="mb-5">
          <h2 className="h4 fw-semibold mb-4 d-flex align-items-center gap-2 text-dark">
            <TrendingUp className="text-warning" /> Trending Categories
          </h2>
          <div className="row g-4">
            {categories
              .filter((cat) => cat.trending)
              .map((category, i) => (
                <div key={category.id} className="col-sm-6 col-lg-3">
                  <Link
                    to={`/courses?category=${category.name.toLowerCase()}`}
                    className="text-decoration-none"
                  >
                    <motion.div
                      className="card h-100 shadow-sm border-0 category-card"
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <img
                        src={category.backgroundImage}
                        className="card-img-top"
                        alt={category.name}
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-2 gap-2">
                          <span className="fs-4">{category.icon}</span>
                          <h5 className="card-title mb-0 text-dark">{category.name}</h5>
                          {category.trending && (
                            <span className="badge bg-warning text-dark ms-auto">
                              Trending
                            </span>
                          )}
                        </div>
                        <p className="card-text text-muted small">{category.description}</p>
                        <div className="d-flex justify-content-between text-muted small">
                          <span className="d-flex align-items-center gap-1">
                            <BookOpen size={14} /> {category.courses} courses
                          </span>
                          <span className="d-flex align-items-center gap-1">
                            <Users size={14} /> {category.students.toLocaleString()} students
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
          </div>
        </section>

        {/* All Categories */}
        <section>
          <h2 className="h4 fw-semibold mb-4 text-dark">All Categories</h2>
          <div className="row g-4">
            {filteredCategories.map((category, i) => (
              <div key={category.id} className="col-md-6 col-lg-4">
                <Link
                  to={`/courses?category=${category.name.toLowerCase()}`}
                  className="text-decoration-none"
                >
                  <motion.div
                    className="card h-100 shadow-sm border-0 category-card"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={category.backgroundImage}
                      className="card-img-top"
                      alt={category.name}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2 gap-2">
                        <span className="fs-4">{category.icon}</span>
                        <h5 className="card-title mb-0 text-dark">{category.name}</h5>
                        {category.trending && (
                          <span className="badge bg-warning text-dark ms-auto">
                            Trending
                          </span>
                        )}
                      </div>
                      <p className="card-text text-muted small">{category.description}</p>
                      <div className="d-flex justify-content-between text-muted small">
                        <span className="d-flex align-items-center gap-1">
                          <BookOpen size={14} /> {category.courses} courses
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <Users size={14} /> {category.students.toLocaleString()} students
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted fs-5">No categories found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
