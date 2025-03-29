import { IoPaperPlane } from "react-icons/io5";
import bank from "../assets/bank-of-america.png";
import collegeBoard from "../assets/college-board.png";
import ann from "../assets/ann-and-john-doerr.png";
import bill from "../assets/gates-foundation.png";
import fund from "../assets/lemann-foundation.png";
import carlos from "../assets/carlos-rodriguez-pastor.png";
import tata from "../assets/tata-trusts.png";
import valhala from "../assets/valhalla.png";
import "../styles/KeySupporter.css";

const KeySupporter = () => {
  return (
    <>
      <div className="key-supporter-container">
        <div className="key-heading">
          <h1>Key supporters</h1>
        </div>
        <div className="supporter-names">
          <div>
            <img src={bank} alt="" className="support-img" />
          </div>
          <div>
            <img src={collegeBoard} alt="" className="support-img" />
          </div>
          <div>
            <img src={ann} alt="" className="support-img" />
          </div>
          <div>
            <img src={bill} alt="" className="support-img" />
          </div>
          <div>
            <img src={fund} alt="" className="support-img" />
          </div>
          <div>
            <img src={carlos} alt="" className="support-img" />
          </div>
          <div>
            <img src={tata} alt="" className="support-img" />
          </div>
          <div>
            <img src={valhala} alt="" className="support-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KeySupporter;
