import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
