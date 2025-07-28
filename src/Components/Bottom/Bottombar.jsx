import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "emailjs-com";

export const Bottombar = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    try {
      // Store in Firestore
      await addDoc(collection(db, "newsletter_subscribers"), {
        email,
        timestamp: serverTimestamp(),
      });

      // Send confirmation email to user
      await emailjs.send(
        "service_u7g3c4w",
        "template_d7d8aml",
        {
          to_email: email,
          user_message: "Thanks for subscribing! We'll send you updates soon.",
        },
        "IKqwHtOifIG2f6kix"
      );

      // Notify admin
      await emailjs.send(
        "service_u7g3c4w",
        "template_tvq1fkr",
        {
          user_email: email,
          admin_message: `A new user subscribed with email: ${email}`,
        },
        "IKqwHtOifIG2f6kix"
      );

      alert("✅ Subscribed and both emails sent!");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Failed to subscribe or send emails.");
    }
  };

  return (
    <footer className="bg-light text-dark pt-5 mt-5 border-top" style={{backgroundImage:"URL('../section-2.jpg')",  backgroundSize: "cover",
        backgroundPosition: "center",backgroundColor:""}}>
      <div className="container">
        {/* Main Grid */}
        <div className="row text-center text-md-start">
          {/* Brand & Social */}
          <div className="col-md-3 mb-4">
            <img
              src="./Logomain.png"
              alt="SpiderMentor"
              className="mb-3"
              width={150}
            />
            <p>
              SpiderMentor is your gateway to learning. Join millions of
              learners globally and unlock your full potential.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#" className="text-dark">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* About Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">About SpiderMentor</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-decoration-none text-reset">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/register-instructor"
                  className="text-decoration-none text-reset"
                >
                  Instructor Registration
                </a>
              </li>
              <li>
                <a
                  href="/become-teacher"
                  className="text-decoration-none text-reset"
                >
                  Become a Teacher
                </a>
              </li>
              <li>
                <a
                  href="/instructors"
                  className="text-decoration-none text-reset"
                >
                  All Instructors
                </a>
              </li>
              <li>
                <a href="/faq" className="text-decoration-none text-reset">
                  Asked Question
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-reset">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Popular Courses</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/courses/development"
                  className="text-decoration-none text-reset"
                >
                  Development
                </a>
              </li>
              <li>
                <a
                  href="/courses/design"
                  className="text-decoration-none text-reset"
                >
                  Arts & Design
                </a>
              </li>
              <li>
                <a
                  href="/courses/visual"
                  className="text-decoration-none text-reset"
                >
                  Visual Design
                </a>
              </li>
              <li>
                <a
                  href="/courses/graphic"
                  className="text-decoration-none text-reset"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="/courses/code"
                  className="text-decoration-none text-reset"
                >
                  Code Inspection
                </a>
              </li>
              <li>
                <a
                  href="/courses/marketing"
                  className="text-decoration-none text-reset"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact Info</h6>
            <p>
              <i className="bi bi-geo-alt me-2"></i> Sector 15, Noida, India
            </p>
            <p>
              <i className="bi bi-telephone me-2"></i> +91 98765 43210
            </p>
            <p>
              <i className="bi bi-whatsapp me-2"></i>
              <a
                href="https://wa.me/919876543210"
                className="text-decoration-none"
              >
                Contact WhatsApp
              </a>
            </p>
            <p>
              <i className="bi bi-envelope me-2"></i> support@spidermentor.com
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row my-4">
          <div className="col text-center">
            <h6 className="text-uppercase fw-bold mb-3">Stay Updated!</h6>
            <p>Subscribe to our newsletter for latest updates and offers.</p>
            <form
              className="row justify-content-center g-2 mt-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
            >
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* App Download Section */}
        <div className="row my-4">
          <div className="col text-center">
            <h6 className="text-uppercase fw-bold mb-3">Download App</h6>
            <p>Download our app from App Store and Google Play Store.</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  width="150"
                />
              </a>
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  width="140"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center py-3 border-top small">
          © {new Date().getFullYear()} <strong>SpiderMentor</strong>. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};
