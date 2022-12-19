import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Discover from "../pages/Discover";
import Join from "../pages/Join";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Discover" element={<Discover />} />
          <Route path="/Join" element={<Join />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
