import "../styles/components_styles/listitem.css";

export default function ListItem({ lists }) {
  return <div key={lists.id} className="movie-item-container"></div>;
}
