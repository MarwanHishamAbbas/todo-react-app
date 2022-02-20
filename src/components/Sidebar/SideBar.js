import React from "react";
import { FiMail, FiStar, FiCheck } from "react-icons/fi";
import SideBarItems from "./SideBarItems";
const SIDEBAR_DATA = [
  {
    id: "n1",
    icon: <FiMail />,
    title: "My Tasks",
    path: "/",
  },
  {
    id: "n2",
    icon: <FiStar />,
    title: "Important",
    path: "/important",
  },
  {
    id: "n3",
    icon: <FiCheck />,
    title: "Completed",
    path: "/completed",
  },
];

const SideBar = (props) => {
  return (
    <div className="relative p-10 w-1/4 lg:w-full border-r border-border">
      <button onClick={props.onOpenModal} className="btn">
        Add Task
      </button>
      <div className="lg:flex sm:block justify-between lg:after:content-[''] lg:after:absolute lg:after:w-full lg:after:h-[1px] lg:after:bg-border lg:after:bottom-0 lg:after:left-0">
        {SIDEBAR_DATA.map((item) => {
          return (
            <SideBarItems
              key={item.id}
              icon={item.icon}
              title={item.title}
              path={item.path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

// bg-app border-r border-border flex flex-col
