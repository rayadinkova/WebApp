import "../styles/components_styles/header-404.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header404() {
  return (
    <div className="header-404-wrapper">
      <Link to="/home">
        <BiSolidLeftArrow className="create-list-header-arrow" />
      </Link>
    </div>
  );
}
