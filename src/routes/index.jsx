// index.jsx 파일을 통해 router 관리

import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Movie from "./Movie";

export default createBrowserRouter([
  // path: '페이지 경로'
  // element: '페이지에서 사용할 컴포넌트'
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
]);
