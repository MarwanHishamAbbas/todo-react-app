import React, { useState, Fragment } from "react";
import { FiTrash, FiStar, FiInfo } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";
import Checkbox from "../UI/Checkbox";
import Modal from "../Modal/Modal";
import { motion, AnimatePresence } from "framer-motion";

const TodoItem = ({ title, description, id, important, completed }) => {
  const [isImportant, setIsImportant] = useState(important);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [todoOpen, setTodoOpen] = useState(false);
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

  const openTodoHandler = () => {
    setTodoOpen(true);
  };

  const closeTodoHandler = () => {
    setTodoOpen(false);
  };

  const removeTodoHandler = () => {
    dispatch(todoActions.removeTodo(id));
  };
  return (
    <Fragment>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {todoOpen && (
          <Modal onCloseModal={closeTodoHandler}>
            <div className="w-2/5">
              <div className="mb-5 flex flex-col items-start">
                <h1 className="text-xl mr-3 text-faded">Title :</h1>
                <h3 className="text-lg">{title}</h3>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-xl mr-3 text-faded">Description :</h1>
                <h3 className="text-lg break-all">{description}</h3>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-1 flex items-center justify-between px-10 py-5"
      >
        <div className="flex items-center after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-border after:bottom-0 after:left-0">
          <Checkbox completed={isCompleted} onToggle={toggleCompletedHandler} />
          <p
            className={
              isCompleted
                ? "ml-3 break-all text-lg line-through text-faded transition-all"
                : "ml-3 break-all text-lg transition-all"
            }
          >
            {title}
          </p>
        </div>
        <div className="flex relative z-0 text-xl">
          <FiInfo
            onClick={openTodoHandler}
            className="pointer hover:text-border transition-all"
          />
          <FiStar
            onClick={toggleImportantHandler}
            className={
              isImportant
                ? "pointer mx-3 text-secondary fill-secondary"
                : "pointer mx-3 hover:text-secondary transition-all"
            }
          />
          <FiTrash
            onClick={removeTodoHandler}
            className="pointer hover:text-primary transition-all "
          />
        </div>
      </motion.main>
    </Fragment>
  );
};

export default TodoItem;
