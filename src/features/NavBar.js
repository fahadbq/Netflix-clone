import React, { useState, useEffect } from "react";
import "./NavBar.css";

//importing images
import netflixLogo from "../assets/Logonetflix.png";
import netflixAvatar from "../assets/Netflix-avatar.png";

const NavBar = (props) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflixLogo} alt="Netflix logo" />

      <img className="nav__avatar" src={netflixAvatar} alt="Netflix avatar" />
    </div>
  );
};

export default NavBar;
