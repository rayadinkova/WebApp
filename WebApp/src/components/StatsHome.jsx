import "../styles/components_styles/statshome.css";
import { GoLock } from "react-icons/go";

export default function StatsHome() {
  return (
    <>
      <div className="stats-home-section-title">
        <div className="stats-home-title">
          <h1>Stats</h1>
        </div>

        <div className="pro">
          <p>PRO</p>
          <GoLock />
        </div>
      </div>

      <div className="stats-home-wrapper"></div>
    </>
  );
}
