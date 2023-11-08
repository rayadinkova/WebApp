import "../index.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/lists">My Lists</NavLink>
      <NavLink to="/createlist">Create list</NavLink>
    </nav>
  );
}
