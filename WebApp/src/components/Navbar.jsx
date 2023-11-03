import "../styles/components_styles/navbar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

export default function Navbar() {
  return (
    <Router>
      <div className="nav-wrapper">
        <nav className="navbar-container">
          <ul>
            <li>
              <GoHome className="home-icon" />
              <p>Home</p>
            </li>
          </ul>

          <ul>
            <li>
              <BsBookmark className="mylists-icon" />
              <p>My Lists</p>
            </li>
          </ul>

          <ul>
            <li>
              <GoSearch className="search-icon" />
              <p>Search</p>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
