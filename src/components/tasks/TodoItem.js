import React, { useState } from "react";
import { FiTrash, FiStar } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

const TodoItem = ({ title, id, important }) => {
  const [isImportant, setIsImportant] = useState(important);
  const dispatch = useDispatch();

  const toggleImportantHandler = () => {
    setIsImportant(!isImportant);
    dispatch(
      todoActions.toggleImportant({
        id,
        isImportant,
      })
    );
  };

  const removeTodoHandler = () => {
    dispatch(todoActions.removeTodo(id));
  };
  return (
    <main className="relative z-1 flex items-center justify-between px-10 py-5">
      <div className="flex items-center after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-border after:bottom-0 after:left-0">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <h1 className="ml-3 text-lg">{title}</h1>
      </div>
      <div className="flex relative z-0 text-xl">
        <FiStar
          onClick={toggleImportantHandler}
          className={
            isImportant
              ? "pointer text-secondary fill-secondary"
              : "pointer hover:text-secondary transition-all"
          }
        />
        <FiTrash
          onClick={removeTodoHandler}
          className="pointer hover:text-primary transition-all ml-3"
        />
      </div>
    </main>
  );
};

export default TodoItem;
