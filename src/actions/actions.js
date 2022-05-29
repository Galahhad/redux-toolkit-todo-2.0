const { createAction } = require("@reduxjs/toolkit");

export const addTodo = createAction("add_todo");
export const deleteTodo = createAction("delete_todo");
export const favoriteTodo = createAction("favorite_todo");