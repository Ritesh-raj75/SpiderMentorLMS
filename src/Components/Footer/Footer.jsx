import React from "react"; // Adjust path if needed

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5 border-top">
      <div className="container text-md-left">
        <div className="row text-md-left text-center">
          {/* Brand & Description */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <img src="./Logomain.png" alt="SpiderMentor" width={150} style={{ borderRadius: "50px" }} className="mb-3" />
            <p>
              SpiderMentor is your gateway to learning. Join millions of learners globally and unlock your full potential.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Explore</h6>
            <p><a href="/courses" className="text-reset text-decoration-none">Courses</a></p>
            <p><a href="/about" className="text-reset text-decoration-none">About Us</a></p>
            <p><a href="/contact" className="text-reset text-decoration-none">Contact</a></p>
            <p><a href="/faq" className="text-reset text-decoration-none">FAQs</a></p>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="bi bi-house me-2"></i> Bengaluru, India</p>
            <p><i className="bi bi-envelope me-2"></i> support@spidermentor.com</p>
            <p><i className="bi bi-phone me-2"></i> +91 98765 43210</p>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Subscribe</h6>
            <form className="d-flex flex-column gap-2">
              <input type="email" className="form-control" placeholder="Enter email" />
              <button className="btn btn-primary">Subscribe</button>
            </form>
            <div className="mt-3">
              <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter fs-5"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin fs-5"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3 border-top mt-4" style={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} SpiderMentor. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
