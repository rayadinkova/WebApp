import CreateListForm from "../components/CreateListForm";
import HeaderCreateList from "../components/Header-CreateList";
import "../styles/pages_styles/createlist.css";

export default function CreateList() {
  return (
    <>
      <HeaderCreateList />
      <CreateListForm />
      <button className="create-list-btn">Create list</button>
    </>
  );
}
