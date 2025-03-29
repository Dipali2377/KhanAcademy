import child from "../assets/child.png";
import "../styles/Teachers.css";
import JoinPage from "./JoinPage";

const Childern = () => {
  return (
    <>
      <div className="teachers-container">
        <div className="left-div">
          <img src={child} alt="" className="face-img" />
        </div>

        <div className="right-div">
          <p style={{ color: "gray" }}>TOGETHER WE CAN MAKE A DIFFERENCE</p>
          <h1>
            Every child deserves <br /> the chance to learn.
          </h1>
          <p>
            Across the globe, 617 million children are missing basic math and
            reading skills. We’re a nonprofit delivering the education they
            need, and we need your help. You can change the course of a child’s
            life.
          </p>
          <button className="teacher-btn">Give them chance</button>
        </div>
      </div>

      <JoinPage />
    </>
  );
};

export default Childern;
