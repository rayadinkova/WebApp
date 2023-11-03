import "../styles/components_styles/header-mylists.css";
import { GoSearch } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";

export default function HeaderMyLists() {
  return (
    <>
      <div className="my-lists-header-wrapper">
        <div className="row-1">
          <img src="./images/profile-icon-small.svg" alt="" />
          <h1 className="my-lists-page-title">My lists</h1>
        </div>

        <div className="row-2">
          <GoSearch className="my-lists-search-icon" />
          <FaRegBell className="my-lists-bell-icon" />
        </div>
      </div>
    </>
  );
}
