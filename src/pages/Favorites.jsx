import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteTodo, favoriteTodo } from "../actions/actions";
const Favorites = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleFavorite = (id) => {
    dispatch(favoriteTodo(id));
  };

  const filtered = todos.filter((item) => item.favorite);

  return (
    <div className="todos">
      {filtered.map((item, index) => {
        return (
          <div key={index} className={`todo ${item.favorite ? 'shadow' : ''}`}>
            <p>{item.text}</p>
            <button onClick={() => handleFavorite(item.id)}>
              {item.favorite ? (
                <BsBookmarkFill className="logo" style={{ color: "yellow" }} />
              ) : (
                <BsBookmark className="logo" />
              )}
            </button>
            <button onClick={() => handleDelete(index)}>
              <FaRegTrashAlt className="logo red_trash" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
