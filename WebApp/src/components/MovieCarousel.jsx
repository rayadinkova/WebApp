import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MovieCarousel({ movies }) {
  return (
    <Carousel>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <img src={movie.poster_path} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </Carousel>
  );
}
