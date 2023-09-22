import React from "react";
import "./navbar.css";
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
            <a href="#wgpt3">What is GPT3?</a>
            <a href="#possibility">Open AI</a>
            <a href="#features">Case Studies</a>
            <a href="#blog">Libary</a>
          </p>
        </div>

      </div>
      Navbar
    </div>
  );
};

export default Navbar;
