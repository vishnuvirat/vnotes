import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const NewNoteHeader = ({createNote,saved,deleteNote}) => {
  return (
    <div className="flex items-center p-2 bg-gray-900">
      <Link to={"/"} className="ml-2 mr-6 text-white">
        <IoIosArrowRoundBack className="h-8 w-8" />
      </Link>
      <div className="font-bold text-white">New Notes</div>
      <div className="flex-1"></div>
      <button onClick={createNote} className="font-bold mx-4 text-white">{saved ? "Saved" : "Save"}</button>
      <button onClick={deleteNote} className="font-bold text-white">Delete</button>
    </div>
  );
};

export default NewNoteHeader;
