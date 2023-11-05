import "../styles/components_styles/recommendedhome.css";
import MovieCarousel from "./MovieCarousel";
import React, { useState, useEffect } from "react";

export default function RecommendedHome() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "de6cc8c";
    const apiUrl = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie data", error);
      });
  }, []);

  return (
    <div>
      <MovieCarousel movies={movies} />
      recommended home here
    </div>
  );
}
