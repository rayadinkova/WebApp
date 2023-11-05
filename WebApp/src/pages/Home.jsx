import "../styles/pages_styles/home.css";
import HeaderHome from "../components/Header-Home";
import DefaultHomeContainers from "../components/DefaultHomeContainers";
import HomeMoviesSection from "../components/Home-Movies-Section";
import FetchAPI from "../api/FetchAPI";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <FetchAPI />
      <DefaultHomeContainers />
      <HomeMoviesSection />
    </>
  );
}
