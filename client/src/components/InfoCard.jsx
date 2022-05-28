import { useState } from "react";

const InfoCard = ({ title, content, setContent, setTitle }) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="rounded-md shadow-lg m-3 p-4">
        <div className="font-bold flex">
          <input
            type="text"
            placeholder="Enter the title"
            className="outline-none flex-1"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex p-4 flex-1">
        <textarea
          placeholder="Enter the text here"
          className="outline-none flex-1"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default InfoCard;
