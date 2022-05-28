import { Link } from "react-router-dom";

const Note = ({id,date,title,content}) => {
  return (
    <Link to={`${id}`} className=" rounded shadow p-4 ">
      <div className="text-xs text-gray-500">{date}</div>
      <div className="flex items-center">
        <div className="rounded-full bg-red-500 p-1 h-px w-px mr-2"></div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="text-sm break-words line-clamp-4">
        {content}
      </div>
    </Link>
  );
};

export default Note;
