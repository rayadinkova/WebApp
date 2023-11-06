import "../styles/components_styles/mylistslists.css";
import { Link } from "react-router-dom";

export default function MyListsLists() {
  return (
    <>
      <Link to="/listpage">
        <div className="display-lists-wrapper">
          <div className="display-lists-container"></div>
        </div>
      </Link>
    </>
  );
}
