import { useEffect, useState } from "react";

const NoteCard = ({title, description, date, onDelete, onUpdate}) => {
  const [completed, setCompleted] = useState(false);
  const colors = ["#ffc0cb","#ffe4e1","#40e0d0","#aaf0d1","#e6e6fa","#b2ffff","#ffc1cc","#e3dac9","#afeaea","#ffbd55","#ffc142"];

  return (
    <div style={{ backgroundColor: colors[Math.floor(Math.random() * 11)] }} className={` rounded-lg shadow-md p-4 flex flex-col justify-between items-start`}>
      <div>
      <h2 className="text-xl text-slate-700 font-bold mb-2 break-all">{title}</h2>
      <p className=" text-slate-600 mb-4 text-md break-all">{description}</p>
      {/* <p className="text-sm text-slate-500 mb-2 text-end">Date: {date}</p> */}
      </div>
      <div className="flex gap-1 justify-end">
        <button
          onClick={onUpdate}
          className={`px-1 py-1 bg-green-500 text-white rounded-md`}>
          Update
        </button>

        <button
           onClick={onDelete}
          className="px-1 py-1 bg-red-500 text-white rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
