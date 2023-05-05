import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Checklists } from "../pages/Checklists";
import { SearchChecklists } from "../pages/SearchChecklists";
import { Charts } from "../pages/Charts";
import { SignIn } from "../pages/SignIn";
import { Suport } from "../pages/Suport";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:search" element={<SearchChecklists />} />
      <Route path="/checklists" element={<Checklists />} />
      <Route path="/checklists/:slug" element={<Checklists />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/suport" element={<Suport />} />
    </Routes>
  );
};

export default Router;
