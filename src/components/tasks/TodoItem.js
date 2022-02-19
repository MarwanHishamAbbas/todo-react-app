import React, { useState } from "react";
import { FiTrash, FiStar } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";
import Checkbox from "../UI/Checkbox";

const TodoItem = ({ title, id, important, completed }) => {
  const [isImportant, setIsImportant] = useState(important);
  const [isCompleted, setIsCompleted] = useState(completed);
  const dispatch = useDispatch();

  const toggleImportantHandler = () => {
    // Change false => true in the component
    setIsImportant(!isImportant);
    // Change false => true in the slice
    dispatch(
      todoActions.toggleImportant({
        id,
        isImportant,
      })
    );
  };
  const toggleCompletedHandler = () => {
    // Change false => true in the component
    setIsCompleted(!isCompleted);
    // Change false => true in the slice
    dispatch(
      todoActions.toggleCompleted({
        id,
        isCompleted,
      })
    );
  };

  const removeTodoHandler = () => {
    dispatch(todoActions.removeTodo(id));
  };
  return (
    <main className="relative z-1 flex items-center justify-between px-10 py-5">
      <div className="flex items-center after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-border after:bottom-0 after:left-0">
        <Checkbox completed={isCompleted} onToggle={toggleCompletedHandler} />
        <label
          className={
            isCompleted
              ? "ml-3 text-lg line-through text-faded transition-all"
              : "ml-3 text-lg transition-all"
          }
        >
          {title}
        </label>
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
