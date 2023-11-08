import "../index.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderCreatedList from "../components/Header-CreatedList";

export default function CreatedList() {
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
      data.id = params.listId;
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

  return (
    <>
      <HeaderCreatedList list={list} />

      <p>{list.description}</p>
    </>
  );
}