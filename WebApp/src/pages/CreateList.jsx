import "../styles/pages_styles/createlist.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";

//Raya - creating the page and implementing the functionality

export default function CreateList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  async function handleCreate(event) {
    event.preventDefault();
    const newList = {
      title: title,
      description: description,
    };

    const url = "https://webapp-95eff-default-rtdb.firebaseio.com/lists.json";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newList),
    });

    if (response.ok) {
      navigate("/lists");
    } else {
      console.log("Something went wrong");
    }
  }

  function goBack() {
    navigate("/lists");
  }

  //Raya, Eva - passing props and functionality into the form and the input fields

  return (
    <>
      <div className="create-list-header">
        <BiSolidLeftArrow className="create-list-arrow" onClick={goBack} />

        <h1 className="create-list-header-h1">Create list</h1>
      </div>

      <section className="create-list-wrapper">
        <form onSubmit={handleCreate}>
          <label className="update-label">List name </label>
          <input
            className="name"
            type="text"
            placeholder="Give your list a name"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <label className="update-label">List description </label>
          <input
            className="description"
            type="text"
            placeholder="Description - when are you going to watch something from this list, with who?"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <div className="create-btn-box">
            <button className="create-btn">Create list</button>
          </div>
        </form>
      </section>
    </>
  );
}
