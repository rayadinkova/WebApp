import "../styles/pages_styles/mylists.css";
import HeaderMyLists from "../components/Header-MyLists";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import MyListsFilter from "../components/MyListsFilter";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

export default function MyLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function getLists() {
      const url = "https://fb-rest-race-default-rtdb.firebaseio.com/lists.json";
      const response = await fetch(url);
      const data = await response.json();
      const postsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      })); // from object to array
      setLists(postsArray);
    }

    getLists();
  }, []);

  return (
    <>
      <HeaderMyLists />
      <MyListsFilter />
      <section className="grid">
        {lists.map((list) => (
          <ListItem list={list} key={list.id} />
        ))}
      </section>

      <Link to="/createlist">
        <AiFillPlusCircle className="create-btn" />
      </Link>
    </>
  );
}
