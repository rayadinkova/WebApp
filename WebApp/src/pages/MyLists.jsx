import "../styles/pages_styles/mylists.css";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import HeaderMyLists from "../components/Header-MyLists";
import MyListsFilter from "../components/MyListsFilter";

export default function MyLists() {
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();

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

  function createList() {
    navigate("/createlist");
  }

  return (
    <>
      <HeaderMyLists />
      <MyListsFilter />
      <section className="list-wrapper">
        <section className="grid">
          {lists.map((list) => (
            <ListItem list={list} key={list.id} />
          ))}
        </section>
      </section>

      <IoIosAddCircle className="add-list-btn" onClick={createList} />
    </>
  );
}
