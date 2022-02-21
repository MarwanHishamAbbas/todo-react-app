import React from "react";
import NoTasks from "./NoTasks";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = ({ todos }) => {
  if (!todos || todos.length === 0) {
    return <NoTasks />;
  }
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full"
      >
        {todos.map((item) => (
          <TodoItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            important={item.important}
            completed={item.completed}
          />
        ))}
      </motion.main>
    </AnimatePresence>
  );
};

export default TodoList;
