import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../utils/useLocalStorage";
import AddButton from "./AddButton";
import Note from "./Note";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage("user");

  const logout = () => {
    setUser(null);
    navigate("/login"); 
  }

  const getNotes = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/notes?user=${user.id}`
    );
    const notes = await res.json();
    setNotes(notes);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <div className="bg-gray-900 flex justify-center items-center p-3">
        <div className="flex-1"></div>
        <div>
          <AddButton />
        </div>
        <div className=" text-white mx-4">
          <button className="" onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="grid grid-cols 1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 auto-rows-fr">
        {notes.map((note) => {
          return (
            <Note
              id={note.id}
              date={note.date}
              title={note.title}
              content={note.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
