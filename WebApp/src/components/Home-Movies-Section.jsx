import "../styles/components_styles/homemoviessection.css";
import RecommendedHome from "./RecommendedHome";
import StatsHome from "./StatsHome";
import TrendingMoviesHome from "./TrendingMoviesHome";
import TrendingTvShowsHome from "./TrendingTvShowsHome";

export default function HomeMoviesSection() {
  return (
    <div className="home-movies-section-wrapper">
      <h1>Recommended for you</h1>
      <RecommendedHome />
      <h1>Trending Movies</h1>
      <TrendingMoviesHome />
      <h1>Trending TV shows</h1>
      <TrendingTvShowsHome />

      <StatsHome />
    </div>
  );
}
