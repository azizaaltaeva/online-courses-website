import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <Link to="/" className="logo">
        Online<span>Courses</span>
      </Link>
      <div
        className={!menu ? "fas fa-bars" : "fas fa-times"}
        id="menu"
        onClick={() => setMenu(!menu)}
      ></div>
      <nav className={!menu ? "navbar" : "navbar active"}>
        <Link to="/">Home</Link>
        <Link to="/course">Course</Link>
        <Link to="/price">Price</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
