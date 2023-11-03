import "../styles/components_styles/navbar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

{
  /* Importing all the pages required for the navigation */
}
import MyLists from "../pages/MyLists";
import ToWatch from "../pages/ToWatch";

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
            <Link to="/mylists" className="navbar-link-styles">
              <li>
                <BsBookmark className="mylists-icon" />
                <p>My Lists</p>
              </li>
            </Link>
          </ul>

          <ul>
            <li>
              <GoSearch className="search-icon" />
              <p>Search</p>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/mylists" element={<MyLists />} />
        <Route path="/towatch" element={<ToWatch />} />
      </Routes>
    </Router>
  );
}
