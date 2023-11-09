import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import UpdateList from "./pages/UpdateList";
import CreateList from "./pages/CreateList";
import MyLists from "./pages/MyLists";
import CreatedList from "./pages/CreatedList";

function App() {
  return (
    <>
      <Navbar />

      {/* Raya - defining paths to the different pages */}
      <main>
        <Routes>
          <Route path="/lists" element={<MyLists />} />
          <Route path="/createlist" element={<CreateList />} />
          <Route path="/lists/:listId" element={<CreatedList />} />
          <Route path="/updatelist/:listId" element={<UpdateList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
