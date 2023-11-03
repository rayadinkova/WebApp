import "../styles/components_styles/header-home.css";
import { FaRegBell } from "react-icons/fa";

export default function HeaderHome() {
  return (
    <>
      <div className="home-header-wrapper">
        <div className="home-header-row-1">
          <img src="./images/profile-icon-small.svg" alt="" />
          <h1 className="home-page-title">Home</h1>
        </div>

        <div className="home-header-row-2">
          <FaRegBell className="my-lists-bell-icon" />
        </div>
      </div>
    </>
  );
}
