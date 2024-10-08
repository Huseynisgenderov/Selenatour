import React from "react";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="/home" className="logo ">
              <h1>Selena Tour</h1>
            </a>
          </div>

          <div className="socials flex">
            <a href="https://www.facebook.com/selenatour.az/">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/selenatour_baku/">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.tiktok.com/@selenatour_baku">
              <FaTiktok className="icon" />
            </a>
          </div>
        </div>

        <div className="footerLinks">
          <span>Helpful Links</span>
          <li>
            <a href="/home">Destinations</a>
          </li>
          <li>
            <a href="/home">Support</a>
          </li>
          <li>
            <a href="/home">Tickets</a>
          </li>
          <li>
            <a href="/home">Tours</a>
          </li>
        </div>

        <div className="footerLinks">
          <span>Contacts Us</span>
          <span className="phone">
            Phone: <a href="https://wa.me/+994774171015">+994774171015</a>
          </span>
          <span className="phone">
            Phone: <a href="https://wa.me/+994555111015">+994555111015</a>
          </span>
          <span className="phone">
            Phone: <a href="https://wa.me/+994774751015">+994774751015</a>
          </span>
          <span className="phone">
            Email: <a href="mailto:info@selenatour.az">info@selenatour.az</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
