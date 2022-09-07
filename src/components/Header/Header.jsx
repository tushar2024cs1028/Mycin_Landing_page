import React, { useRef } from "react";
import logo from "../../assests/logo.png"

import "./Header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About us",
    url: "#",
  },

  {
    display: "Achievements",
    url: "#",
  },
  {
    display: "Events",
    url: "#",
  },
  {
    display: "Team",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      
        <div className="navigation ">
          <div className="logo">
            <img src={logo} alt="none" />
          </div>

          <div className="nav">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="heading__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
            
          </div>

         
        </div>
      
    </header>
  );
};

export default Header;