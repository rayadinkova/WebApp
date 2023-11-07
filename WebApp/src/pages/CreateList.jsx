import HeaderCreateList from "../components/Header-CreateList";
import "../styles/pages_styles/createlist.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate("");

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
      navigate("/");
    } else {
      console.log("Something went wrong");
    }
  }

  return (
    <>
      <HeaderCreateList />
      <section className="create-list">
        <form onSubmit={handleCreate}>
          <label>
            <input
              type="text"
              placeholder="Give your list a name"
              value={title}
              required
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Description - when are you going to watch something from this list, with who?"
              value={description}
              required
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <button className="create-list-btn">Create list</button>
        </form>
      </section>
    </>
  );
}
