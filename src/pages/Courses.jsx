import WorksPage from "./WorksPage";
import Teachers from "./Teachers";
const Courses = () => {
  return (
    <>
      <div className="courses-container">
        <div className="left-courses"></div>

        <div className="right-courses"></div>
      </div>

      <WorksPage />
      <Teachers />
    </>
  );
};

export default Courses;
