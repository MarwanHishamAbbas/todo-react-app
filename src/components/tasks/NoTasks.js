import React from "react";
import { BiTask } from "react-icons/bi";
const NoTasks = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <BiTask className="text-[200px] text-faded" />
      <h1 className="text-xl mt-5">Tasks you add appear here</h1>
    </main>
  );
};

export default NoTasks;
