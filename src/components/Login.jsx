import loginBanner from "../assets/login-banner.png";
import google from "../assets/login-icons/google.png";
import clever from "../assets/login-icons/clever.png";
import facebook from "../assets/login-icons/facebook.jpeg";
import apple from "../assets/login-icons/apple.png";
import "../styles/Login.css";

import { FaGraduationCap } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="left-login">
          <img src={loginBanner} alt="" className="loginBanner" />
          <h1>
            Join Khan Academy and <br /> learn with us
          </h1>
          <p>Log in to Khan Academy to get started!</p>
          <p style={{ marginTop: "30px" }}>
            By logging in to Khan Academy, you agree to our <br /> Terms of use
            and Privacy Policy.
          </p>
        </div>
        <div className="right-login">
          <h2 style={{ textAlign: "start", marginRight: "200px" }}>Log in</h2>
          <div className="social-login">
            <div className="login-ops-container">
              <img src={google} alt="" className="icon-img" />
              <button className="google-login">Continue with Google</button>
            </div>

            <div className="login-ops-container">
              <img src={clever} alt="" className="icon-img" />
              <button className="clever-login">Continue with Clever</button>
            </div>

            <div className="login-ops-container">
              <img src={facebook} alt="" className="icon-img" />
              <button className="facebook-login">Continue with Facebook</button>
            </div>

            <div className="login-ops-container">
              <img src={apple} alt="" className="icon-img" />
              <button className="apple-login">Continue with Apple</button>
            </div>
          </div>
          <form className="login-form">
            <label>
              Email or username <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" placeholder="Enter your email or username" />

            <label>
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input type="password" placeholder="Enter your password" />

            <a href="#" className="forgot-password">
              Forgot password?
            </a>

            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>
          <p className="signup-text">
            Need a Khan Academy account?{" "}
            <a href="#" style={{ color: "color: #1865f2" }}>
              Create an account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
