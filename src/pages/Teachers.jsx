import faces from "../assets/faces_collage.png";
import "../styles/Teachers.css";
import Learners from "./Learners";
const Teachers = () => {
  return (
    <>
      <div className="teachers-container">
        <div className="left-div">
          <img src={faces} alt="" className="face-img" />
        </div>

        <div className="right-div">
          <p style={{ color: "gray" }}>TEACHERS</p>
          <h1>
            “I’m finally able to truly <br /> differentiate my <br /> classroom.
            This has <br /> been priceless for my <br /> students’ engagement.”
          </h1>
          <p>
            We empower teachers to support their entire classroom. <br /> 90% of
            US teachers who have <br /> used Khan Academy have found us
            effective.
          </p>
          <button className="teacher-btn">Teachers, start here</button>
        </div>
      </div>
      <Learners />
    </>
  );
};

export default Teachers;
