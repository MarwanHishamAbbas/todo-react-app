import React from "react";
import TodoList from "../components/tasks/TodoList";

const CompletedTasks = ({ todos }) => {
  const completedTodos = todos.filter((item) => item.completed === true);
  return <TodoList todos={completedTodos} />;
};

export default CompletedTasks;
