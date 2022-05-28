import { Route, Routes } from "react-router-dom";
import "./App.css";
import Note from "./components/Note";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import AddButton from "./components/AddButton";
import EditNote from "./components/EditNote";
import Ex from "./components/Ex";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Protected from "./Protected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Protected />}>
        <Route index element={<Notes />} />
        <Route path="ex" element={<Ex />} />
        <Route path="new" element={<NewNote />} />
        <Route path=":id" element={<EditNote />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
