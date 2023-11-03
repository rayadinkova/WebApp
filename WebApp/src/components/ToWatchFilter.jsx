import "../styles/components_styles/towatchfilter.css";
import { TbFilterFilled } from "react-icons/tb";

export default function ToWatchFilter() {
  return (
    <>
      <div className="to-watch-filter-wrapper">
        <div className="to-watch-filter-row1">
          <div className="to-watch-filter-all">
            <p>All</p>
          </div>

          <div className="to-watch-filter-custom">
            <p>Custom</p>
          </div>

          <div className="to-watch-filter-shared">
            <p>Shared</p>
          </div>
        </div>

        <div className="to-watch-filter-row2">
          <TbFilterFilled className="to-watch-filter-icon" />
        </div>
      </div>
    </>
  );
}
