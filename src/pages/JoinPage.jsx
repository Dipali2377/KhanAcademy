import background from "../assets/background.png";
import "../styles/JoinPage.css";
import KeySupporter from "./KeySupporter";
const JoinPage = () => {
  return (
    <>
      <div className="join-container">
        <h1>Join Khan Academy today</h1>
        <div
          className="btns-list"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover", // Adjust as needed
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingTop: "0px",
          }}
        >
          <button className="join-btn">Learners</button>
          <button className="join-btn">Teachers</button>
          <button className="join-btn">Parents</button>
          <button className="join-btn">Give today</button>
        </div>
      </div>
      <KeySupporter />
    </>
  );
};

export default JoinPage;
