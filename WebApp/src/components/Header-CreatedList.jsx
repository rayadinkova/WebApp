import { BiSolidLeftArrow } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function HeaderCreatedList() {
  const [list, setList] = useState({});
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const url = `https://webapp-95eff-default-rtdb.firebaseio.com/lists/${params.listId}.json`;

  console.log(url);
  console.log(params.listId);

  useEffect(() => {
    async function getList() {
      const response = await fetch(url);
      const data = await response.json();
      setList(data);
      setTitle(list.title);
    }

    getList();
  }, [list?.title, url]);

  function handleClick() {
    navigate("/lists");
  }

  function handleEdit() {
    navigate(`/lists/${list?.id}`);
  }

  return (
    <>
      <div className="create-list-header-wrapper">
        <BiSolidLeftArrow
          className="create-list-header-arrow"
          onClick={handleClick}
        />

        <h1>{list?.title}</h1>

        <BiDotsVerticalRounded className="dots" onClick={handleEdit} />
      </div>
    </>
  );
}
