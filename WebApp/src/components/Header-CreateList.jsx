import "../styles/components_styles/header-createlist.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HeaderCreateList() {
  return (
    <>
      <div className="create-list-header-wrapper">
        <Link to="/home">
          <BiSolidLeftArrow className="create-list-header-arrow" />
        </Link>

        <h1>Create a new list</h1>
      </div>
    </>
  );
}
