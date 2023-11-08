import "../styles/components_styles/navbar.css";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { GoHome } from "react-icons/go";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-home">
        <GoHome className="home-icon" />
        <NavLink to="/" className="nav-links">
          Home
        </NavLink>
      </div>

      <div className="nav-lists">
        <FiBookmark className="lists-icon" />
        <NavLink to="/lists" className="nav-links">
          My Lists
        </NavLink>
      </div>

      <div className="nav-search">
        <FiSearch className="search-icon" />
        <NavLink to="/" className="nav-links">
          Search
        </NavLink>
      </div>
    </nav>
  );
}
