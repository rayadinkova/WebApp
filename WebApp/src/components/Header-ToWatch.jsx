import "../styles/components_styles/header-towatch.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HeaderToWatch() {
  return (
    <>
      <div className="to-watch-header-wrapper">
        <Link to="/home" className="to-watch-arrow-link-style">
          <BiSolidLeftArrow className="to-watch-header-arrow" />
        </Link>
        <h1 className="to-watch-page-title">To Watch</h1>

        <div className="to-watch-header-icons">
          <GoSearch className="to-watch-search-icon" />
          <BiDotsVerticalRounded />
        </div>
      </div>
    </>
  );
}
