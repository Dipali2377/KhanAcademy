import React from "react";
import "../styles/Footer.css";
import appStore from "../assets/appstore.svg";
import playStore from "../assets/playstore.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div
        className="footer-top"
        style={{ float: "left", padding: "20px", color: "gray" }}
      >
        <p className="footer-mission">
          Our mission is to provide a free, world-class <br /> education to
          anyone, anywhere.
        </p>
        <p className="footer-donate">
          Khan Academy is a 501(c)(3) nonprofit <br /> organization.{" "}
          <a href="#" className="footer-link">
            Donate
          </a>{" "}
          or{" "}
          <a href="#" className="footer-link">
            volunteer
          </a>{" "}
          today!
        </p>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Impact</a>
            </li>
            <li>
              <a href="#">Our team</a>
            </li>
            <li>
              <a href="#">Our interns</a>
            </li>
            <li>
              <a href="#">Our content specialists</a>
            </li>
            <li>
              <a href="#">Our leadership</a>
            </li>
            <li>
              <a href="#">Our supporters</a>
            </li>
            <li>
              <a href="#">Our contributors</a>
            </li>
            <li>
              <a href="#">Our finances</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Internships</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Support community</a>
            </li>
            <li>
              <a href="#">Share your story</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
          <h3>Download our apps</h3>
          <div className="app-links">
            <img src={appStore} alt="App Store" />
            <img src={playStore} alt="Google Play" />
          </div>
        </div>

        <div className="footer-column">
          <h3>Courses</h3>
          <ul>
            <li>
              <a href="#">Math (NCERT)</a>
            </li>
            <li>
              <a href="#">Math (NCERT) Revision</a>
            </li>
            <li>
              <a href="#">Math foundations</a>
            </li>
            <li>
              <a href="#">Math (Maharashtra)</a>
            </li>
            <li>
              <a href="#">Science (NCERT)</a>
            </li>
            <li>
              <a href="#">All State boards</a>
            </li>
            <li>
              <a href="#">Explore more</a>
            </li>
            <li>
              <a href="#">Khan for Educators</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-options">
          <div className="footer-language">
            <label>Language:</label>
            <span>English ▼</span>
          </div>
          <div className="footer-country">
            <label>Country:</label>
            <span> 🇺🇸 U.S. 🇮🇳 India 🇲🇽 Mexico 🇧🇷 Brazil</span>
          </div>
        </div>
        <p className="footer-legal">
          © 2025 Khan Academy | <a href="#">Terms of use</a> |{" "}
          <a href="#">Privacy Policy</a> |<a href="#">Cookie Notice</a> |{" "}
          <a href="#">Accessibility Statement</a>
        </p>
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
