import "../styles/pages_styles/mylists.css";
import HeaderMyLists from "../components/Header-MyLists";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import MyListsFilter from "../components/MyListsFilter";
import MyListsLists from "../components/MyListsLists";

export default function MyLists() {
  return (
    <>
      <HeaderMyLists />
      <MyListsFilter />
      <MyListsLists />
      <Link to="/createlist">
        <AiFillPlusCircle className="create-btn" />
      </Link>
    </>
  );
}
