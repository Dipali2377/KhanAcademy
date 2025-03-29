import laptop from "../assets/laptop_collage.png";
import "../styles/Learners.css";
import anjali from "../assets/anjali.png";
import Childern from "./Childern";
const Learners = () => {
  return (
    <>
      <div className="learners-container">
        <div className="learner-content">
          <p style={{ color: "gray" }}>LEARNERS AND STUDENTS</p>
          <h1>
            You can learn <br /> anything.
          </h1>
          <p>
            Build a deep, solid understanding in math, science, <br /> grammar,
            history, SAT®, and more.
          </p>
          <button className="teacher-btn">Learners, start here</button>
        </div>
        <div className="learner-laptop">
          <img
            src={laptop}
            alt=""
            style={{ height: "450px", width: "450px" }}
          />
        </div>
      </div>
      <div className="author">
        <div className="heading-div">
          <h1 className="author-heading">
            “When I was a child, I used to fear mathematics. But now, I am in
            love <br /> with mathematics because of Khan Academy.”
          </h1>
        </div>
        <div className="author-details">
          <p>
            ANJALI <br />{" "}
            <span style={{ color: "gray" }}>Gurugram, Haryana</span>
          </p>
          <img src={anjali} alt="" className="profile-img" />
        </div>
      </div>

      <Childern />
    </>
  );
};

export default Learners;
