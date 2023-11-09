import "../styles/components_styles/mylistsfilter.css";
import { TbFilterFilled } from "react-icons/tb";

////Raya - creating the page layout and styling
export default function MyListsFilter() {
  return (
    <>
      <div className="filter-container">
        <div className="filter-options">
          <div className="all">All</div>

          <div className="general">General</div>

          <div className="custom">Custom</div>
        </div>

        <div className="filter">
          <TbFilterFilled className="filter-icon" />
        </div>
      </div>
    </>
  );
}
