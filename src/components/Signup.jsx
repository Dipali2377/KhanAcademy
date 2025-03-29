import loginBanner from "../assets/login-banner.png";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <>
      <div className="login-container">
        {/* Left Part */}
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

        {/* Right Part (Signup) */}
        <div className="right-login">
          <h2 style={{ textAlign: "start", marginRight: "290px" }}>Sign up</h2>
          <p style={{ textAlign: "start", marginRight: "170px" }}>
            Join Khan Academy for free as a
          </p>

          <div className="signup-options">
            <button className="signup-bttn active">Learner</button>
            <button className="signup-bttn">Teacher</button>
            <button className="signup-bttn">Parent</button>
          </div>

          <p style={{ textAlign: "start", marginRight: "200px" }}>
            What is your date of birth?
          </p>
          <div className="dob-container">
            <select className="dob-select">
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>

            <select className="dob-select">
              <option>Year</option>
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i}>{2025 - i}</option>
              ))}
            </select>
          </div>

          <a href="#" className="class-code-link">
            Enter class code
          </a>

          <p className="signup-text">Already have an account?</p>
        </div>
      </div>
    </>
  );
};

export default Signup;
