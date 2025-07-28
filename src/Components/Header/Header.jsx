import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cart/action";
import { motion } from "framer-motion";
import { logoutFunction } from "../../Redux/login/action";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, duration: 0.8 }}
      className="mx-auto my-2 my-lg-0"
      style={{ width: "100%", maxWidth: "300px", position: "relative" }}
    >
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="form-control"
        placeholder="Search courses, topics"
        style={{ paddingRight: "40px" }}
      />
      <button
        type="button"
        onClick={handleSearch}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <SearchIcon />
      </button>
    </motion.div>
  );
};

const navItems = [
  {
    name: "Courses",
    href: "#",
    dropdown: true,
    items: [
      { name: "Full Stack Development", href: "/courses/fullstack" },
      { name: "MERN Stack Development", href: "/courses/mern" },
      { name: "Software Testing", href: "/courses/testing" },
      { name: "Data Analyst", href: "/courses/datascience" },
    ],
  },
  { name: "Notes", href: "/notes" },
  { name: "Category", href: "#", dropdown: true, items: [
      { name: "All Courses", href: "/categories" },
      { name: "Testimonials", href: "/testimonials" }
    ] },
  { name: "About", href: "/about" },
  { name: "Chat", href: "/chat" },
];

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.auth);
  const { cart } = useSelector((store) => store.cart);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("spider-user"));
    if (!user?.user && storedUser?.user) {
      // Optionally re-authenticate user here
    }

    if (storedUser?.user?._id) {
      axios
        .get(`http://localhost:5000/cart?userId=${storedUser.user._id}`)
        .then(({ data }) => dispatch(addToCart(data.length)))
        .catch((err) => console.error("Cart fetch error", err));
    }
  }, [dispatch, user?.user]);

  const handleLogout = () => {
    localStorage.removeItem("spider-user");
    dispatch(logoutFunction());
    navigate("/");
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg shadow-sm sticky-top"
        style={{
          padding: "5px 20px",
          color: "white",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1030,
          backgroundColor: "transparent",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/Logomain.png"
              alt="Logo"
              width="180"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>

          <button
            className="navbar-toggler bg-light text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <motion.ul
              className="navbar-nav me-auto mb-2 mb-lg-0 text-center text-lg-start"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, i) => (
                <motion.li
                  className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
                  key={i}
                  variants={itemVariants}
                >
                  <a
                    className={`nav-link ${item.dropdown ? "dropdown-toggle" : ""}`}
                    href={item.href}
                    {...(item.dropdown && {
                      role: "button",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                    })}
                    style={{
                      fontWeight: 650,
                      fontSize: "1.1rem",
                      padding: "10px 15px",
                      color: "#333",
                    }}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <ul className="dropdown-menu">
                      {item.items.map((subItem, idx) => (
                        <li key={idx}>
                          <a className="dropdown-item" href={subItem.href}>
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </motion.ul>

            <SearchBar />

            <motion.div
              className="d-flex align-items-center gap-2 mt-3 mt-lg-0 ms-lg-3"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {user?.user && (
                <motion.div variants={itemVariants}>
                  <Link className="nav-link" to="#">
                    My Learning
                  </Link>
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <Link to="/cart">
                  <button className="btn btn-transparent position-relative">
                    <Badge color="secondary" badgeContent={cart}>
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </button>
                </Link>
              </motion.div>

              {user?.user && (
                <>
                  <motion.div variants={itemVariants}>
                    <Link to="#">
                      <button className="btn btn-light">
                        <Badge color="secondary" badgeContent={0}>
                          <NotificationsNoneOutlinedIcon />
                        </Badge>
                      </button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button className="btn btn-light">
                      <Badge
                        color="secondary"
                        overlap="circular"
                        badgeContent=" "
                        variant="dot"
                      >
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>
                          {user.user.name[0].toUpperCase()}
                        </Avatar>
                      </Badge>
                    </button>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      className="btn btn-danger"
                      onClick={handleLogout}
                      style={{ borderRadius: "20px" }}
                    >
                      Logout
                    </button>
                  </motion.div>
                </>
              )}

              {!user?.user && (
                <>
                  <motion.div variants={itemVariants}>
                    <Link to="/join/login-popup">
                      <button className="btn btn-outline-primary" style={{ borderRadius: "20px" }}>
                        Log in
                      </button>
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link to="/join/signup-popup">
                      <button className="btn btn-outline-primary" style={{ borderRadius: "20px" }}>
                        Sign up
                      </button>
                    </Link>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
};
