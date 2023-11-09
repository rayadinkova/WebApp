import "../styles/components_styles/header-mylists.css";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";

//Raya - creating the page layout and functionality
export default function HeaderMyLists() {
  return (
    <>
      <div className="lists-header-wrapper">
        <img src="./profile_img.svg" alt="" className="profile-img" />

        <h1 className="lists-header-title">My Lists</h1>

        <div className="header-icons">
          <FiSearch className="lists-header-search-icon" />
          <GoBell className="bell-icon" />
        </div>
      </div>
    </>
  );
}
