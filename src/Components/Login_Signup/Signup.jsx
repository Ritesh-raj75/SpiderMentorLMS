import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { ColorButton } from "../ProdCard/popperprodcard"; // Or use a regular button
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./signup.css";

const Signup = () => {
  const [userdata, setUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userdata, [name]: value });
  };

  const handleSignup = () => {
    setLoading(true);
    setError("");

    const URL = "http://localhost:3000/users"; // 👈 Your JSON Server on port 3000

    fetch(`${URL}?email=${userdata.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setLoading(false);
          setError("User already exists");
        } else {
          return fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userdata)
          });
        }
      })
      .then((res) => {
        if (!res) return;
        if (!res.ok) throw new Error("Signup failed");
        return res.json();
      })
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong");
      });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (success) {
      navigate("/join/login-popup");
    }
  }, [success, navigate]);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh",
         backgroundImage: "url('../section-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
       }}
      data-aos="fade-up"
    >
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
        data-aos="zoom-in"
      >
        <h4 className="text-center mb-3" data-aos="fade-down">
          Sign up & Start Learning!
        </h4>
        <hr />
        {error && <Alert severity="error" data-aos="fade-in">{error}</Alert>}

        <input
          className="form-control mb-2"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={userdata.name}
          data-aos="fade-up"
        />
        <input
          className="form-control mb-2"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={userdata.email}
          data-aos="fade-up"
        />
        <input
          className="form-control mb-3"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={userdata.password}
          data-aos="fade-up"
        />

        <div className="d-flex justify-content-center" data-aos="zoom-in">
          <ColorButton onClick={handleSignup}>
            {loading ? (
              <CircularProgress size={24} style={{ color: "white" }} />
            ) : (
              "Sign up"
            )}
          </ColorButton>
        </div>

        <hr />
        <div className="text-center" data-aos="fade-up">
          Already have an account? <Link to="/join/login-popup">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
