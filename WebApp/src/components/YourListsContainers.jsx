import "../styles/components_styles/yourlistscontainers.css";
import { BiSolidLockAlt } from "react-icons/bi";

export default function YourListsContainers() {
  return (
    <>
      <div className="your-lists-container-wrapper">
        <div className="your-lists-container-row-1">
          <div className="first-movie-container">
            <div className="first-movie-container-content">
              <div className="first-movie-h3">
                <h3>Rainy days</h3>
              </div>

              <div className="first-movie-status">
                <p>12</p>
                <BiSolidLockAlt />
              </div>
            </div>
          </div>

          <div className="second-movie-container">
            <div className="second-movie-container-content">
              <div className="second-movie-h3">
                <h3>Pancakes</h3>
              </div>

              <div className="second-movie-status">
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
