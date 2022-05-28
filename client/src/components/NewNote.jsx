import NewNoteHeader from "./NewNoteHeader";
import InfoCard from "./InfoCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../utils/useLocalStorage";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user");

  const createNote = async () => {
    console.log(user);
    const res = await fetch(`${import.meta.env.VITE_API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, userId: user?.id }),
    });
    const note = await res.json();
    const { id } = note;
    navigate(`/${id}`);
  };

  return (
    <div className="h-screen flex flex-col">
      <NewNoteHeader createNote={createNote} />
      <InfoCard
        title={title}
        content={content}
        setContent={setContent}
        setTitle={setTitle}
      />
    </div>
  );
};

export default NewNote;
