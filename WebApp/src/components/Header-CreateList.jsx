import { BiSolidLeftArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function HeaderCreateList() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/lists");
  }

  return (
    <>
      <div className="create-list-header-wrapper">
        <BiSolidLeftArrow
          className="create-list-header-arrow"
          onClick={handleClick}
        />

        <h1>Create a new list</h1>
      </div>
    </>
  );
}
