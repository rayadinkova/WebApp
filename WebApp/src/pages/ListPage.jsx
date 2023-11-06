import * as React from "react";
import HeaderListPage from "../components/Header-ListPage";
import "../styles/pages_styles/listpage.css";
import { useEffect, useState } from "react";
export default function ListPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const url =
        "https://webapp-95eff-default-rtdb.firebaseio.com/movies.json";
      const response = await fetch(url);
      const data = await response.json();
      const moviesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setMovies(moviesArray);

      console.log(data);
    }
    getMovies();
  }, []);

  const shadowMovies = movies.slice(0, 6);

  return (
    <>
      <HeaderListPage />
      <div className="movies-wrapper">
        {shadowMovies.map((movies) => (
          <MovieItem movies={movies} key={movies.id} />
        ))}
      </div>
    </>
  );
}
