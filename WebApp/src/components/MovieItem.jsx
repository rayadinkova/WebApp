import "../styles/components_styles/movieitem.css";

export default function MovieItem({ movies }) {
  return (
    <div key={movies.id}>
      <img src={movies.img} alt={movies.title} className="movie-image" />
    </div>
  );
}
