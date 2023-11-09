import { useNavigate } from "react-router-dom";
import "../index.css";

// Raya, Eva - storing data in props and passing it into a container, where the lists will be stored

export default function ListItem({ list }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/lists/${list.id}`);
  }

  return (
    <div key={list?.id} className="list-container" onClick={handleClick}>
      <h3>{list?.title}</h3>
    </div>
  );
}
