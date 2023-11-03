import "../styles/components_styles/yourlists.css";
import YourListsContainers from "./YourListsContainers";
import MyListsFilter from "./MyListsFilter";

export default function YourLists() {
  return (
    <>
      <h1 className="your-lists-h1">Your lists:</h1>
      <MyListsFilter />
      <YourListsContainers />
    </>
  );
}
