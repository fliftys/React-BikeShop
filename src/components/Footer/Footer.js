import React from "react";
import "./Footer.scss";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <ul className="footer__socials">
          <li className="footer__socials-item">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <FaFacebook className="footer__icon" />
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <FaGithub className="footer__icon" />
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <FaTwitter className="footer__icon" />
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <FaYoutube className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        Wszelkie prawa zastrzeżone &copy; 2019
      </div>
    </footer>
  );
};
export default Footer;
