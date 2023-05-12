import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Detail from "./pages/detail/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
