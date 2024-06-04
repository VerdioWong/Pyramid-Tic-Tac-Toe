import React from "react";
import "../tailwind.css";

const RestartButton = ({ onRestart }) => {
  return (
    <button
      onClick={onRestart}
      className="font-montserrat cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:border-b-[6px] active:border-b-[2px] active:brightness-90 mt-6"
    >
      Restart
    </button>
  );
};

export default RestartButton;
