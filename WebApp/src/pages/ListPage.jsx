import * as React from "react";
import HeaderListPage from "../components/Header-ListPage";
import "../styles/pages_styles/listpage.css";
import { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";

export default function ListPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const url =
        "https://webapp-95eff-default-rtdb.firebaseio.com/posts/movies.json";
      const response = await fetch(url);
      const data = await response.json();
      const moviesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setMovies(moviesArray);
    }
    getMovies();
  }, []);

  return (
    <>
      <HeaderListPage />

      <section className="grid">
        {movies.map((movies) => (
          <MovieItem movies={movies} />
        ))}
      </section>
    </>
  );
}
