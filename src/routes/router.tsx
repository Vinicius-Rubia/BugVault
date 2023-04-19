import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Checklists } from "../pages/Checklists";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checklists" element={<Checklists />} />
      <Route path="/checklists/:slug" element={<Checklists />} />
    </Routes>
  );
};

export default Router;
