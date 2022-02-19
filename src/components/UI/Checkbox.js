import React from "react";
import { FiCheck } from "react-icons/fi";
const Checkbox = ({ onToggle, completed }) => {
  return (
    <label className=" flex relative z-0 checkbox-label pointer">
      <input
        onClick={onToggle}
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="appearance-none outline-none h-6 w-6 border-2 rounded border-bodytext"
      />
      <FiCheck
        className={
          completed
            ? "opacity-100 bg-primary outline-none h-6 w-6 text-[#ffffff] absolute transition-all check-icon rounded border-none"
            : "h-6 w-6 text-[#ffffff] absolute opacity-0 transition-all check-icon rounded border-none"
        }
      />
    </label>
  );
};

export default Checkbox;

// opacity-100 bg-primary outline-none
