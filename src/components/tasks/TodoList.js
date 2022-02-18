import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <main className="w-full pt-10">
      {todos.map((item) => (
        <TodoItem title={item.title} description={item.description} />
      ))}
    </main>
  );
};

export default TodoList;
