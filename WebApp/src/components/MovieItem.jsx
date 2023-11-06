import "../styles/components_styles/movieitem.css";

export default function MovieItem({ movies }) {
  return (
    <div key={movies.id} className="movie-item-container">
      <img src={movies.img} alt="" className="movie-image" />
    </div>
  );
}
