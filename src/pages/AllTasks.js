import React from "react";
import TodoList from "../components/tasks/TodoList";
import { useSelector } from "react-redux";
const AllTasks = () => {
  const todos = useSelector((state) => state.todo.todos);
  return <TodoList todos={todos} />;
};

export default AllTasks;
