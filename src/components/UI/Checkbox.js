import React from "react";
import { FiCheck } from "react-icons/fi";
const Checkbox = () => {
  return (
    <label className=" flex relative checkbox-label pointer">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="appearance-none outline-none h-6 w-6 border-2 rounded border-bodytext"
      />
      <FiCheck className="h-6 w-6 text-[#ffffff] absolute opacity-0 transition-all check-icon rounded border-none" />
    </label>
  );
};

export default Checkbox;
