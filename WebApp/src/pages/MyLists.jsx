import "../styles/pages_styles/mylists.css";
import HeaderMyLists from "../components/Header-MyLists";
import DefaultLists from "../components/DefaultLists";
import YourLists from "../components/YourLists";
import { AiFillPlusCircle } from "react-icons/ai";

export default function MyLists() {
  return (
    <>
      <HeaderMyLists />
      <DefaultLists />
      <YourLists />
      <AiFillPlusCircle className="create-btn" />
    </>
  );
}
