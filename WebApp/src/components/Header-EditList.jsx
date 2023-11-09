import "../styles/components_styles/header-editlist.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

//Raya - creating the page layout and functionality

export default function HeaderEditList() {
  return (
    <>
      <div className="edit-list-header-wrapper">
        <Link to="/listpage">
          <BiSolidLeftArrow className="edit-list-header-arrow" />
        </Link>

        <h1>Edit list</h1>
      </div>
    </>
  );
}
