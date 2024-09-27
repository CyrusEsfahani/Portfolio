import React from "react";
// import { NavLink } from 'react-router-dom'
import "../styles/header.css";
import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <nav>
      <Link
        to="/"
        smooth={true}
        duration={500}
        className="link"
        activeClass="active"
      >
        About Me
      </Link>
      <Link
        to="portfolio"
        smooth={true}
        duration={500}
        className="link"
        activeClass="active"
      >
        Portfolio
      </Link>
      <Link
        to="resume"
        smooth={true}
        duration={500}
        className="link"
        activeClass="active"
      >
        Resume
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="link"
        activeClass="active"
      >
        Contact
      </Link>
    </nav>
  );
}
