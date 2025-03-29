import personalizedLearning from "../assets/personalized_learning_icon.png";
import trustedContent from "../assets/trusted_content_icon.png";
import empowerTeachers from "../assets/empower_teachers_icon.png";
import "../styles/WorksPage.css";
const WorksPage = () => {
  return (
    <div className="works-container">
      <h1 className="why-heading">Why Khan Academy works</h1>
      <div className="cards-container">
        <div className="cards">
          <img src={personalizedLearning} alt="" className="work-logo" />
          <p className="head-para">Personalized learning</p>
          <p>
            Students practice at their own pace, first filling in gaps in their
            understanding and then accelerating their learning.
          </p>
        </div>

        <div className="cards">
          <img src={trustedContent} alt="" className="work-logo" />
          <p className="head-para">Trusted content</p>
          <p>
            Created by experts, Khan Academy’s library of trusted,
            standards-aligned practice and lessons covers math K-12 through
            early college, grammar, science, history, SAT®, and more. It’s all
            free for learners and teachers
          </p>
        </div>

        <div className="cards">
          <img src={empowerTeachers} alt="" className="work-logo" />
          <p className="head-para">Tools to empower teachers</p>
          <p>
            With Khan Academy, teachers can identify gaps in their students’
            understanding, tailor instruction, and meet the needs of every
            student.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
