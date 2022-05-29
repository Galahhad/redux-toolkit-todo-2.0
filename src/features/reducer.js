import { createReducer } from "@reduxjs/toolkit";
import { deleteTodo, favoriteTodo, addTodo } from "../actions/actions";

const initialState = {
  todos: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(deleteTodo, (state, action) => {
    state.todos.splice(action.payload, 1);
  });
  builder.addCase(favoriteTodo, (state, action) => {
    state.todos.map((item) => {
      if (item.id === action.payload) {
        return (item.favorite = !item.favorite);
      }
      return item;
    });
  });
  builder.addCase(addTodo, (state, action) => {
    state.todos.unshift(action.payload);
  });
});
