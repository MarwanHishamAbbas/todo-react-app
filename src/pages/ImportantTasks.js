import React from "react";
import TodoList from "../components/tasks/TodoList";
import { useSelector } from "react-redux";

const ImportantTasks = () => {
  const todos = useSelector((state) => state.todo.todos);
  const importantTodos = todos.filter((item) => item.important === true);
  return <TodoList todos={importantTodos} />;
};

export default ImportantTasks;
