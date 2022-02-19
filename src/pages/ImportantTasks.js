import React from "react";
import TodoList from "../components/tasks/TodoList";

const ImportantTasks = ({ todos }) => {
  const importantTodos = todos.filter((item) => item.important === true);
  return <TodoList todos={importantTodos} />;
};

export default ImportantTasks;
