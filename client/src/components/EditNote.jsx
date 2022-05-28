import NewNoteHeader from "./NewNoteHeader";
import InfoCard from "./InfoCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const getNote = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/notes/${id}`
    );
    const note = await res.json();
    setTitle(note.title);
    setContent(note.content);
  };

  useEffect(() => {
    getNote();
  }, [id]);

  const saveNote = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/notes/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      }
    );
    const note = await res.json();
    setNote(note);
    setSaved(true);
  };

  const deleteNote = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/notes/${id}`, {
      method: "DELETE",
    });
    navigate(`/`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSaved(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [note]);

  return (
    <div className="h-screen flex flex-col">
      <NewNoteHeader
        createNote={saveNote}
        saved={saved}
        deleteNote={deleteNote}
      />
      <InfoCard
        title={title}
        content={content}
        setContent={setContent}
        setTitle={setTitle}
      />
    </div>
  );
};

export default EditNote;
