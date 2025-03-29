import logo from "../assets/Khan_Academy-Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="select-div">
          <select name="" id="" className="explore">
            <option value="">Explore</option>
          </select>

          <button className="search-btn">
            <span>
              <IoSearchOutline />
            </span>
            <p>Search</p>
          </button>
        </div>

        <div>
          <img src={logo} alt="" className="logo-style" />
        </div>

        <div className="btns-div">
          <button className="nav-btns">Donate</button>
          <button className="nav-btns">Login</button>
          <button className="nav-btns signup-btn">SignUp</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
