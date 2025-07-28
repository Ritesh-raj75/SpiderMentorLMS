import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authFunction } from "../../Redux/login/action";
import { Navigate, Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { ColorButton } from "../ProdCard/popperprodcard"; // Or replace with a normal <button>
import AOS from "aos";
import "aos/dist/aos.css";
import "./login.css";

const Login = () => {
  const [userdata, setUser] = useState({ email: "", password: "" });
  const { user, loading, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userdata, [name]: value });
  };

  const handleLogin = () => {
    const URL = "http://localhost:3000/users"; // JSON Server
    dispatch(authFunction(userdata, URL));
  };

  // Redirect after login
  if (user?.token) {
    return <Navigate to="/" />;
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('../section-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-in"
    >
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
        data-aos="zoom-in"
      >
        <h4 className="text-center mb-3" data-aos="fade-down">
          Log In to SpiderMentor
        </h4>
        <hr />

        {error && (
          <Alert severity="error" data-aos="fade-in">
            {error}
          </Alert>
        )}

        <input
          type="email"
          name="email"
          className="form-control mb-2"
          placeholder="Email"
          onChange={handleChange}
          value={userdata.email}
          data-aos="fade-up"
        />
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={handleChange}
          value={userdata.password}
          data-aos="fade-up"
        />

        <div className="d-flex justify-content-center" data-aos="zoom-in">
          <ColorButton onClick={handleLogin} className="w-100">
            {loading ? (
              <CircularProgress size={24} style={{ color: "white" }} />
            ) : (
              "Log in"
            )}
          </ColorButton>
        </div>

        <hr />
        <div className="text-center" data-aos="fade-up">
          Don’t have an account? <Link to="/join/signup-popup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
