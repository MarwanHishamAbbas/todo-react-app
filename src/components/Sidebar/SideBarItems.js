import React from "react";
import { NavLink } from "react-router-dom";

const SideBarItems = ({ icon, title, path }) => {
  return (
    <ul className="flex xl:flex-col text-lg">
      <li>
        <NavLink
          to={path}
          className={(navData) =>
            navData.isActive
              ? "inline-flex mb-5 transition-all text-primary items-center"
              : "inline-flex mb-5 transition-all hover:text-primary items-center"
          }
        >
          <span className="mr-3">{icon}</span>
          <p>{title}</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBarItems;
