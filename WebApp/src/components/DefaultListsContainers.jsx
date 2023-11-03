import "../styles/components_styles/defaultlistscontainers.css";
import { BiSolidLockAlt } from "react-icons/bi";

export default function DefaultListsContainers() {
  return (
    <>
      <div className="default-lists-container-wrapper">
        <div className="default-lists-container-row-1">
          <div className="to-watch-container">
            <div className="to-watch-container-content">
              <div className="to-watch-h3">
                <h3>To Watch</h3>
              </div>

              <div className="to-watch-status">
                <p>12</p>
                <BiSolidLockAlt />
              </div>
            </div>
          </div>

          <div className="seen-container">
            <div className="seen-container-content">
              <div className="seen-h3">
                <h3>Seen</h3>
              </div>

              <div className="seen-status">
                <p>2</p>
                <BiSolidLockAlt />
              </div>
            </div>
          </div>
        </div>

        <div className="default-lists-container-row-2">
          <div className="watching-container">
            <div className="watching-container-content">
              <div className="watching-h3">
                <h3>Watching</h3>
              </div>

              <div className="watching-status">
                <p>2</p>
                <BiSolidLockAlt />
              </div>
            </div>
          </div>
          <div className="favourites-container">
            <div className="favourites-container-content">
              <div className="favourites-h3">
                <h3>Favourites</h3>
              </div>

              <div className="favourites-status">
                <p>2</p>
                <BiSolidLockAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
