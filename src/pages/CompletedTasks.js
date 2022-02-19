import React from "react";
import TodoList from "../components/tasks/TodoList";
import { useSelector } from "react-redux";

const CompletedTasks = () => {
  const todos = useSelector((state) => state.todo.todos);
  const completedTodos = todos.filter((item) => item.completed === true);
  return <TodoList todos={completedTodos} />;
};

export default CompletedTasks;
