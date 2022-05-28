import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to={"/new"} className="flex items-center">
      <div className="mr-2 text-white" >
        <AiOutlinePlusCircle />
      </div>
      <div className="font-bold text-white">Add new note</div>
    </Link>
  );
};

export default AddButton;
