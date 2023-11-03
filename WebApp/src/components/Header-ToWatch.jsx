import "../styles/components_styles/header-towatch.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function HeaderToWatch() {
  return (
    <>
      <div className="to-watch-header-wrapper">
        <BiSolidLeftArrow className="to-watch-header-arrow" />

        <h1 className="to-watch-page-title">To Watch</h1>

        <div className="to-watch-header-icons">
          <GoSearch className="to-watch-search-icon" />
          <BiDotsVerticalRounded />
        </div>
      </div>
    </>
  );
}
