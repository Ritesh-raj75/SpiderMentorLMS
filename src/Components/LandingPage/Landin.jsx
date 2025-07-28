import { Header } from "../Header/Header";
import "../Header/header.css";
import banner from "../../assets/middle.jpg";
import { Link } from "react-router-dom";
import { ProdCard, SuggestionCard, TechCard } from "../ProdCard/ProdCard";
import { PopperCard } from "../ProdCard/popperprodcard";
import { styled } from "@mui/material/styles";
import { nanoid } from "nanoid";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import { motion } from "framer-motion";
import "../LandingPage/landing.css";
import { useNavigate } from "react-router-dom";


export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    padding: "0",
  },
}));

export const Landigpage = () => {
  return (
    <>
      <Banner />
    </>
  );
};

const HeroCarousel = () => {
  return (
    <div id="spiderMentorCarousel" className="carousel slide " data-bs-ride="carousel" >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#spiderMentorCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#spiderMentorCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#spiderMentorCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner rounded shadow-lg">
        <div className="carousel-item active">
          <img
            src="./home-img2.png"
            className="d-block w-110"
            alt="Learn anytime"
            style={{
              objectFit: "contain",
              height: "690px",
              width: "100%",
              objectPosition: "center",
            }}
          />
          {/* <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
            <h5>Welcome to SpiderMentor</h5>
            <p>Unlock skills with world-class mentors and premium content.</p>
          </div> */}
        </div>

        <div className="carousel-item">
          <img src="./carousel-2.jpg" className="d-block w-100" alt="Tech learning" style={{ objectFit: "cover", height: "690px" }} />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
            <h5>Personalized Learning</h5>
            <p>Learn at your own pace with personalized course suggestions.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./carousel-03.jpg" className="d-block w-100" alt="Live classes" style={{ objectFit: "cover", height: "690px", objectPosition: "center" }} />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
            <h5>Interactive Mentorship</h5>
            <p>Join live sessions and 1-on-1 mentorship from top educators.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#spiderMentorCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#spiderMentorCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

// HeadlineSection moved OUTSIDE of Banner
const HeadlineSection = () => {
  return (
    <section className="headline-section " style={{paddingTop: "50px"}}>
      <motion.div
        className="course-section py-5 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #074f86ff, #797981ff)',
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // animate once, when 30% is visible
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          A Broad Selection Of Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Choose from 183,000 online video courses with new additions published every month
        </motion.p>
      </motion.div>
    </section>
  );
};

const FeaturedTopics = () => {
  return (
    <section className="featured-topic py-5 bg-light">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="display-5 fw-bold text-primary">
            Featured Topics by Category
          </h2>
          <p className="text-muted">
            Explore trending subjects and grow your skills
          </p>
        </motion.div>

        {/* Add more content here with motion if needed */}
      </div>
    </section>
  );
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const programs = [
  {
    title: "Full Stack Development",
    image: "/fullStack.jpg",  
    price: 40000,
    topics: [
      { name: "HTML & CSS", students: 1200 },
      { name: "React", students: 800 },
    ],
  },
  {
    title: "Data Science",
    image: "/datascience.jpg",
    price: 30000,
    topics: [
      { name: "Python", students: 1500 },
      { name: "Machine Learning", students: 1100 },
    ],
  },
  {
    title: "MERN Stack",
    image: "MERNstack.jpg",
    price: 35000,
    topics: [
      { name: "MongoDB", students: 1000 },
      { name: "Node.js", students: 700 },
    ],
  },
  {
    title: "Software Testing",
    image: "./testing.jpg",
    price: 30000,
    topics: [
      { name: "Java", students: 900 },
      { name: "Spring Boot", students: 600 },
    ],
  },
];

const FeaturedCards = () => {
  const navigate = useNavigate();

  const handleAddToCart = (program) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Optional: Prevent duplicates
    const exists = cart.find((item) => item.title === program.title);
    if (!exists) {
      cart.push(program);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    navigate("/cart");
  };

  return (
    <div className="row g-4 px-5" style={{ paddingTop: "40px" }}>
      {programs.map((program, i) => (
        <motion.div
          key={i}
          className="col-md-6 col-lg-3"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="card h-100 shadow-sm card-hover">
            <img
              src={program.image}
              className="card-img-top"
              alt={`${program.title} thumbnail`}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-dark fw-semibold">
                {program.title}
              </h5>

              {program.topics.map((topic, j) => (
                <div
                  key={j}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <Link
                    className="text-decoration-none text-primary fw-medium trendlink"
                    to="#"
                  >
                    {topic.name}
                  </Link>
                  <span className="text-muted small">
                    {topic.students} students
                  </span>
                </div>
              ))}

              <p className="mt-2 mb-3 text-success fw-bold">
                ₹{program.price ? program.price.toLocaleString() : "N/A"}
              </p>

              <button
                className="btn btn-outline-primary mt-auto"
                onClick={() => handleAddToCart(program)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


const Poster = ({ img, title, des, btn, from }) => {
  const isLeft = from === "left";

  return (
    <div className="poster1 d-flex justify-content-center">
      <div
        className={`poster-cont d-flex ${
          isLeft ? "flex-row-reverse" : "flex-row"
        } align-items-center flex-wrap gap-4`}
      >
        <motion.img
          className="banner-2"
          src={img}
          alt="poster"
          initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PitchCard title={title} des={des} btn={btn} />
        </motion.div>
      </div>
    </div>
  );
};


const Poster2 = () => (
  <motion.div
    className="poster1 d-flex justify-content-center"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <div className="poster-cont d-flex flex-row-reverse align-items-center flex-wrap gap-4">
      <img
        className="banner-2"
        src="./girlImage.jpg"
        alt="SpiderMentor Business"
        style={{ maxWidth: "400px", width: "100%", borderRadius: "10px" }}
      />
      <PitchCard2 />
    </div>
  </motion.div>
);


// Only keep this Patner component (animated, with motion)
const Patner = () => (
  <motion.div
    className="text-center partner my-5"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h3 className="partner-title mb-4">Trusted by companies of all sizes</h3>
    <div className="parner-logo-cont d-flex justify-content-center flex-wrap gap-3">
      {["nasdaq", "volkswagen", "box", "netapp", "eventbrite"].map((name) => (
        <motion.img
          key={name}
          src={`https://s.udemycdn.com/partner-logos/v4/${name}-dark.svg`}
          alt={name}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ width: "120px", height: "auto" }}
        />
      ))}
    </div>
  </motion.div>
);

const Banner = () => {
  const loading = useRef(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://udemy-vr4p.onrender.com/courses")
      .then(({ data }) => {
        loading.current = false;
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const programs = [
    {
      title: 'Java Full Stack',
      image: './fullstack.jpg',
      topics: [
        { name: 'Java', students: '12,400,000' },
        { name: 'Spring Boot', students: '7,100,000' },
      ],
    },
    {
      title: 'MERN Stack',
      image: './MERNstack.jpg',
      topics: [
        { name: 'MongoDB', students: '6,300,000' },
        { name: 'React.js', students: '9,800,000' },
      ],
    },
    {
      title: 'Software Testing',
      image: './testing.jpg',
      topics: [
        { name: 'Selenium', students: '4,500,000' },
        { name: 'Manual Testing', students: '3,700,000' },
      ],
    },
    {
      title: 'Data Scientist',
      image: './datascience.jpg',
      topics: [
        { name: 'Python', students: '14,200,000' },
        { name: 'Machine Learning', students: '11,000,000' },
      ],
    },
  ];

  return (
    <div className="banner-wrapper">
      <section className="carousel-section">
        <HeroCarousel />
      </section>

      {loading.current ? (
        <div className="loading-wrapper">
          <SkeltonLoading />
          <SkeltonLoading />
        </div>
      ) : (
        <>
          <HeadlineSection />

          <section className="featured-topic py-5 bg-light" style={{ backgroundImage: "url('./background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <FeaturedTopics />
            <FeaturedCards programs={programs} />

            <button className="btn btn-dark btn-lg btn-block w-25" href="/courses" style={{ margin: '0 auto', display: 'block', padding: '10px 20px' , marginTop: '25px' }}>
              <span>Explore more topics</span>
            </button>
          </section>

          <section className="poster-section" style={{ padding: "50px 0", backgroundImage: "url('./background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Poster
              img="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
              title="Become an instructor"
              des="Instructors from around the world teach millions of students on SpiderMentor..."
              btn="Start teaching today"
              from="left"
            />

            <Patner />

            <Poster2 />

            <Poster
              img="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg"
              title="Transform your life through education"
              des="Learners around the world are launching new careers..."
              btn="Find out how"
              from="right"
            />
          </section>
        </>
      )}
    </div>
  );
};

const PitchCard = ({ title, des, btn }) => (
  <div className="pitch-cont">
    <h1 className="pitchHead">{title}</h1>
    <p className="pitchdec">{des}</p>
    <UdemyBtn btn={btn} />
  </div>
);

const PitchCard2 = () => (
  <motion.div
    className="pitch-cont"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <img className="spiderMentorLogo" src="./logomain.png" alt="" />
    <p className="pitchdec">
      Get unlimited access to 6,000+ of SpiderMentor’s top courses for your team...
    </p>
    <UdemyBtn btn="Get SpiderMentor Business" />
  </motion.div>
);

const UdemyBtn = ({ btn }) => (
  <div>
    <Link to="#" className="udemylinkbtn">{btn}</Link>
  </div>
);

const SkeltonLoading = () => (
  <div className="skelton">
    <Skeleton className="line" variant="text" animation="wave" />
    <div className="midskel">
      <Skeleton className="rectangel" variant="rectangular" width={50} height={50} />
      <div><Part /></div>
    </div>
  </div>
);

const Part = () => (
  <>
    {Array.from({ length: 4 }).map((_, i) => (
      <Skeleton key={i} variant="text" className="wave" animation="wave" />
    ))}
  </>
);

export default Landigpage;
// ...existing c