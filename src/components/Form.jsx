import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/actions";

const Form = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const isText = todos.some(
    (item) => item.text.toLowerCase() === text.toLowerCase()
  );

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim().length !== 0 && !isText) {
      dispatch(
        addTodo({
          id: Math.random(),
          text: text,
          favorite: false,
        })
      );
    }
    setText("");
  };

  return (
    <form className="form" onSubmit={handleAdd}>
      <input
        placeholder="Введите текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`add_input ${isText ? "red_trash" : ""}`}
      />
      <button type="submit" disabled={isText || text.trim().length === 0}>
        ADD
      </button>
    </form>
  );
};

export default Form;
