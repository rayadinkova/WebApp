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
import CreateList from "../pages/CreateList";
import Home from "../pages/Home";
import ErrorPage from "../pages/404";
import ListPage from "../pages/ListPage";

export default function Navbar() {
  return (
    <Router>
      <div className="nav-wrapper">
        <nav className="navbar-container">
          <ul>
            <Link to="/home" className="navbar-link-styles">
              <li>
                <GoHome className="home-icon" />
                <p>Home</p>
              </li>
            </Link>
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
        <Route path="/home" element={<Home />} />
        <Route path="/mylists" element={<MyLists />} />
        <Route path="/createlist" element={<CreateList />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="/listpage" element={<ListPage />} />
      </Routes>
    </Router>
  );
}
