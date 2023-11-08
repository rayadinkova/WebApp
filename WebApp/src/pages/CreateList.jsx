import "../index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  return (
    <>
      <section className="list-wrapper">
        <form onSubmit={handleCreate}>
          <label>List name </label>
          <input
            type="text"
            placeholder="Give your list a name"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <label>List description </label>
          <input
            type="text"
            placeholder="Description - when are you going to watch something from this list, with who?"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <button>Create list</button>
        </form>
      </section>
    </>
  );
}
