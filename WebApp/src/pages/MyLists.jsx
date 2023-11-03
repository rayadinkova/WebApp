import "../styles/pages_styles/mylists.css";
import HeaderMyLists from "../components/Header-MyLists";
import DefaultLists from "../components/DefaultLists";
import YourLists from "../components/YourLists";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MyLists() {
  return (
    <>
      <HeaderMyLists />
      <DefaultLists />
      <YourLists />

      <Link></Link>
      <AiFillPlusCircle className="create-btn" />
    </>
  );
}
