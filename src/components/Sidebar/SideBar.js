import React from "react";
import { FiMail, FiStar, FiCheck } from "react-icons/fi";
import SideBarItems from "./SideBarItems";
const SIDEBAR_DATA = [
  {
    icon: <FiMail />,
    title: "My Tasks",
    path: "/",
  },
  {
    icon: <FiStar />,
    title: "Important",
    path: "/important",
  },
  {
    icon: <FiCheck />,
    title: "Completed",
    path: "/completed",
  },
];

const SideBar = (props) => {
  return (
    <div className="p-10 w-1/4 border-r border-border">
      <button onClick={props.onOpenModal} className="btn">
        Add Task
      </button>
      {SIDEBAR_DATA.map((item) => {
        return (
          <SideBarItems icon={item.icon} title={item.title} path={item.path} />
        );
      })}
    </div>
  );
};

export default SideBar;

// bg-app border-r border-border flex flex-col
