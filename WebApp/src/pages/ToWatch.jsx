import "../styles/pages_styles/towatch.css";
import HeaderToWatch from "../components/Header-ToWatch";
import ToWatchFilter from "../components/ToWatchFilter";
import ToWatchMovieContainers from "../components/ToWatchMovieContainers";

export default function ToWatch() {
  return (
    <div className="to-watch-page-wrapper">
      <HeaderToWatch />
      <ToWatchFilter />
      <ToWatchMovieContainers />
      <button className="hard-to-choose-btn">Hard to choose?</button>
    </div>
  );
}
