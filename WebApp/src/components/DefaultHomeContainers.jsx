import "../styles/components_styles/defaulthomecontainers.css";
import { Link } from "react-router-dom";

export default function DefaultHomeContainers() {
  return (
    <>
      <div className="default-home-container-wrapper">
        <div className="default-home-container-row-1">
          <Link to="/towatch" className="to-watch-link-style">
            <div className="to-watch-container-content">
              <div className="to-watch-h3">
                <h3>To Watch</h3>
              </div>
            </div>
          </Link>

          <div className="seen-container">
            <div className="seen-container-content">
              <div className="seen-h3">
                <h3>Seen</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="default-home-container-row-2">
          <div className="watching-container">
            <div className="watching-container-content">
              <div className="watching-h3">
                <h3>Watching</h3>
              </div>
            </div>
          </div>

          <div className="first-movie-home-container">
            <div className="first-movie-home-container-content">
              <div className="first-movie-home-h3">
                <h3>Rainy days</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="default-home-container-row-3">
          <div className="second-movie-home-container">
            <div className="second-movie-home-container-content">
              <div className="second-movie-home-h3">
                <h3>Pancakes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
