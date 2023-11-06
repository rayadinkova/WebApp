import "../styles/pages_styles/mylists.css";
import HeaderMyLists from "../components/Header-MyLists";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import MyListsFilter from "../components/MyListsFilter";
import MyListsContainers from "../components/MyListsContainers";
import MyListsLists from "../components/MyListsLists";

export default function MyLists() {
  return (
    <>
      <HeaderMyLists />
      <MyListsFilter />
      <MyListsContainers />
      <MyListsLists />
      <Link to="/createlist">
        <AiFillPlusCircle className="create-btn" />
      </Link>
    </>
  );
}
