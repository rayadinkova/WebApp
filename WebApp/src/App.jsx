import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import UpdateList from "./pages/UpdateList";
import CreateList from "./pages/CreateList";
import MyLists from "./pages/MyLists";
import CreatedList from "./pages/CreatedList";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/lists" element={<MyLists />} />
          <Route path="/createlist" element={<CreateList />} />
          <Route path="/lists/:listId" element={<UpdateList />} />
          <Route path="/createdlist" element={<CreatedList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
