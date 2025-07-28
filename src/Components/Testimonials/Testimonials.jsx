import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Rahul Kumar",
    role: "Software Developer at Infosys",
    quote:
      "SpiderMentor changed my life! I landed a job within 3 months after completing a certification.",
    image: "./random.jpg",
  },
  {
    name: "Kishan",
    role: "Educator & Course Creator",
    quote:
      "Teaching on SpiderMentor helped me reach thousands of learners globally.",
    image: "./random2.jpg",
  },
  {
    name: "Neha Sharma",
    role: "Full Stack Developer",
    quote:
      "The platform's structure and support made it easy to reskill and land my dream job.",
    image: "./random3.jpg",
  },
  {
    name: "Shivani",
    role: "UI/UX Designer",
    quote:
      "I built a complete design portfolio using SpiderMentor’s courses. Absolutely loved the experience!",
    image: "./random4.webp",
  },
  {
    name: "Nikhil",
    role: "UI/UX Designer",
    quote:
      "I got placed even before completing the full course! That's how effective their training is.",
    image: "./random5.jpg",
  },
  {
    name: "Swati",
    role: "UI/UX Designer",
    quote:
      "I had no technical background, but QSpiders made learning so practical that I now love coding!",
    image: "./random6.jpg",
  },
];

const mentors = [
  {
    name: "Shambhu Sir",
    role: "Java Developer",
    image: "./Shambhu1.png",
  },
  {
    name: "Priya Mam",
    role: "Python Developer",
    image: "./priya.png",
  },
  {
    name: "Mohmad Sir",
    role: "Advanced Java",
    image: "./momhad1.png",
  },
  {
    name: "Ravi Sir",
    role: "Excel Advanced",
    image: "./Ravi.png",
  },
];

const reviews = [
  {
    name: "Aditya Jain",
    text: "Exceptional experience! The mentors are top-notch.",
    rating: 5,
  },
  {
    name: "Priyanka S.",
    text: "Very interactive courses and real-time support!",
    rating: 4,
  },
  {
    name: "Zaid Khan",
    text: "Got hired after completing 2 certifications here!",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #cfe2ff, #e0d4f7, #b6d4fe)",
        marginTop: "70px",
      }}
    >
      {/* Banner */}
      <div
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(90deg, #4fc6dbc8, #0055a5)",
          marginBottom: "40px",
        }}
      >
        <div className="container">
          <motion.h1
            className="display-5 fw-bold"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hear from Our Community
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Learners and mentors share their success with SpiderMentor.
          </motion.p>
        </div>
      </div>

      {/* Learner Testimonials */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">What Our Learners Say</h2>
          <p className="text-muted">Real success stories from real people.</p>
        </div>

        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              className="col-md-6 col-lg-4 mb-4"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-4 shadow rounded h-100 d-flex flex-column justify-content-between hover-scale">
                <FaQuoteLeft className="text-primary mb-3" size={24} />
                <p className="mb-4 text-muted">"{testimonial.quote}"</p>
                <div className="d-flex align-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-0">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary me-3">Join SpiderMentor</button>
          <button className="btn btn-outline-secondary">Write Your Story</button>
        </div>
      </div>

      {/* Mentor Section */}
      <div className="mt-5 py-5 px-4" style={{ backgroundColor: "#5aa5f0ff", color: "white" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Meet Our Instructors</h2>
            <p className="lead text-light">
              Experienced mentors committed to your success
            </p>
          </div>

          <div className="row justify-content-center">
            {mentors.map((mentor, index) => (
              <motion.div
                className="col-md-6 col-lg-3 mb-4"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-white text-dark p-4 rounded shadow h-100 text-center hover-scale">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="mb-3"
                    width="180"
                    height="180"
                    style={{
                      objectFit: "cover",
                      borderRadius: "16px",
                      border: "4px solid #003366",
                    }}
                  />
                  <h5 className="fw-bold mb-1">{mentor.name}</h5>
                  <small className="text-muted d-block mb-2">{mentor.role}</small>
                  <div className="d-flex justify-content-center gap-2 mt-2">
                    <i className="fab fa-twitter text-primary"></i>
                    <i className="fab fa-linkedin text-primary"></i>
                    <i className="fab fa-facebook text-primary"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section with Stars */}
      <div className="container py-5">
        <div className="text-center mb-4">
          <h3 className="fw-bold">More Words from Our Users</h3>
          <p className="text-muted">People who trust SpiderMentor</p>
        </div>

        <div className="row justify-content-center">
          {reviews.map((review, index) => (
            <motion.div
              className="col-md-6 col-lg-4 mb-4"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-4 shadow rounded h-100 hover-scale">
                <p className="text-muted">"{review.text}"</p>
                <div className="mt-3 d-flex align-items-center justify-content-between">
                  <h6 className="fw-bold mb-0">- {review.name}</h6>
                  <div className="text-warning">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
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

export default Testimonials;
