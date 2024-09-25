import React from "react";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo ">
              <h1>Selena Tour</h1>
            </a>
          </div>

          <div className="socials flex">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaWhatsapp className="icon" />
            <FaTiktok className="icon"/>
          </div>
        </div>

        <div className="footerLinks">
          <span>Helpful Links</span>
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Tickets</a>
          </li>
          <li>
            <a href="#">Tours</a>
          </li>
        </div>

        <div className="footerLinks">
          <span>Contacts Us</span>
          <span className="phone">
            Phone: <a href="#">+994774171015</a>
          </span>
          <span className="phone">
            Phone: <a href="#">+994555111015</a>
          </span>
          <span className="phone">
            Phone: <a href="#">+994774751015</a>
          </span>
          <span className="phone">
            Email: <a href="#">info@selenatour.az</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
