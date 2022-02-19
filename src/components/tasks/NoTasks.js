import React from "react";
import { FiFolderPlus } from "react-icons/fi";
const NoTasks = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <FiFolderPlus className="text-[200px] text-faded" />
      <h1 className="text-xl mt-5">Added Tasks Appear Here</h1>
    </main>
  );
};

export default NoTasks;
