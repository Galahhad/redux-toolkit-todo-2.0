import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";
import { BsBookmarkFill } from "react-icons/bs";

const Switch = () => {
  return (
    <div className="switch_wrap">
      <NavLink to="/">
        <RiHome2Fill className="icon" />
      </NavLink>
      <NavLink to="/favorites">
        <BsBookmarkFill className="icon" />
      </NavLink>
    </div>
  );
};

export default Switch;
