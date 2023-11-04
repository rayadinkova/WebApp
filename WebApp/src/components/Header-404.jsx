import "../styles/components_styles/header-404.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header404() {
  return (
    <div className="header-404-wrapper">
      <BiDotsVerticalRounded className="header-404-arrow" />
    </div>
  );
}
