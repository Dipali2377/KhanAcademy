import heroStudent from "../assets/hero_student.png";
import Courses from "../pages/Courses";
import "../styles/HeroSection.css";
const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div>
          <img src={heroStudent} alt="" className="hero-student" />
        </div>
        <div className="hero-content">
          <h1>
            For every student,
            <br /> every classroom. <br />
            Real results.
          </h1>
          <p className="para">
            We’re a nonprofit with the mission to provide a free, world-class
            education for anyone, anywhere.
          </p>
          <div className="hero-btns">
            <button className="hero-btn">Lerners</button>
            <button className="hero-btn">Teachers</button>
            <button className="hero-btn">Parents</button>
          </div>
        </div>
      </div>

      <Courses />
    </>
  );
};

export default HeroSection;
