import "../styles/components_styles/header-listpage.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function HeaderListPage() {
  return (
    <>
      <div className="list-page-header-wrapper">
        <Link to="/mylists">
          <BiSolidLeftArrow className="list-page-header-arrow" />
        </Link>

        <h1>List page</h1>

        <Link to={{}} className="list-page-link">
          <BsThreeDotsVertical className="list-page-header-settings" />
        </Link>
      </div>
    </>
  );
}
