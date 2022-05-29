import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "../pages/Todos";
import Favorites from "../pages/Favorites";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Main;
