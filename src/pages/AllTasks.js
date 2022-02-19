import React from "react";
import TodoList from "../components/tasks/TodoList";
const AllTasks = ({ todos }) => {
  return <TodoList todos={todos} />;
};

export default AllTasks;
