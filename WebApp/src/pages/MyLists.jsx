import "../index.css";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import CreatedList from "./CreatedList";

export default function MyLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function getLists() {
      const url = "https://webapp-95eff-default-rtdb.firebaseio.com/lists.json";
      const response = await fetch(url);
      const data = await response.json();
      const listsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setLists(listsArray);
      console.log(data);
    }

    getLists();
  }, []);

  return (
    <>
      <section className="list-wrapper">
        <h1>My Lists</h1>

        <section className="grid">
          {lists.map((list) => (
            <ListItem list={list} key={list.id} />
          ))}
        </section>
      </section>
    </>
  );
}
