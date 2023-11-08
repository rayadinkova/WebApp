import { useNavigate } from "react-router-dom";
import "../index.css";

export default function ListItem({ list }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/createdlist");
  }

  return (
    <div key={list?.id} className="list-container" onClick={handleClick}>
      <h3>{list?.title}</h3>
    </div>
  );
}
