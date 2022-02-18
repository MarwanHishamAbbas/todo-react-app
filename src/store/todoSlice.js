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
        title: newTodo.title,
        description: newTodo.description,
      });
    },
    removeTodo() {},
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
