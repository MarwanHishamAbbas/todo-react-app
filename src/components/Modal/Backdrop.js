import React from "react";

const Backdrop = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="absolute z-10 top-0 left-0 h-full w-full bg-backdrop flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default Backdrop;
