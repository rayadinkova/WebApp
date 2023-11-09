import { BiSolidLeftArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BiSolidPencil } from "react-icons/bi";

//Raya - creating the page layout and functionality
export default function HeaderCreatedList({ list }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/lists");
  }

  function handleEdit() {
    console.log(list);
    navigate(`/updatelist/${list.id}`);
  }

  return (
    <>
      <div className="create-list-header-wrapper">
        <BiSolidLeftArrow
          className="create-list-header-arrow"
          onClick={handleClick}
        />

        <h1>{list.title}</h1>

        <BiSolidPencil className="dots" onClick={handleEdit} />
      </div>
    </>
  );
}
