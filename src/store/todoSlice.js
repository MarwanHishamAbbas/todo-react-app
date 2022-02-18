import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push({
        id: newTodo.id,
        title: newTodo.title,
        description: newTodo.description,
      });
    },
    removeTodo(state, action) {
      const todoId = action.payload;
      state.todos = state.todos.filter((item) => item.id !== todoId);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
