import "../styles/pages_styles/updatelist.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidLeftArrow } from "react-icons/bi";

export default function UpdateList() {
  const [list, setList] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const url = `https://webapp-95eff-default-rtdb.firebaseio.com/lists/${params.listId}.json`;

  console.log(url);
  console.log(params.listId);

  useEffect(() => {
    async function getList() {
      const response = await fetch(url);
      const data = await response.json();
      setList(data);
      setTitle(list.title);
      setDescription(list.description);
    }

    getList();
  }, [list?.title, list?.description, url]);

  async function UpdateList(event) {
    event.preventDefault();
    const listToUpdate = {
      title: title,
      description: description,
    };

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(listToUpdate),
    });

    if (response.ok) {
      navigate("/lists");
    } else {
      console.log("Something's wrong");
    }
  }

  async function deleteList() {
    const wantToDelete = confirm("Are you sure you want to delete?");

    if (wantToDelete) {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/lists");
      } else {
        console.log("Something went wrong");
      }
    }
  }

  function goBack() {
    navigate("/lists");
  }
  return (
    <>
      <div className="update-list-header" onClick={goBack}>
        <BiSolidLeftArrow className="update-list-arrow" />

        <h1 className="update-list-header-h1">Edit list</h1>
      </div>
      <section className="update-list-wrapper">
        <form onSubmit={UpdateList}>
          <label className="update-label">Edit name</label>
          <input
            className="name"
            type="text"
            placeholder="Type a caption"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />

          <label className="update-label">Edit description</label>
          <input
            className="description"
            type="text"
            placeholder="Type a caption"
            value={description}
            required
            onChange={(event) => setDescription(event.target.value)}
          />

          <div className="save-btn-box">
            <button className="save-btn">Save</button>
          </div>
        </form>

        <div className="delete-btn-box">
          <button className="delete-btn" onClick={deleteList}>
            Delete
          </button>
        </div>
      </section>
    </>
  );
}
