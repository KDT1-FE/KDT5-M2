// index.jsx 파일을 통해 router 관리
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../components/App";
import About from "../components/About/About";
import MovieMain from "./MovieMain";
import MovieRatings from "./MovieRatings";

export default createBrowserRouter([
  // path: '페이지 경로'
  // element: '페이지에서 사용할 컴포넌트'
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/movie/main",
    element: <MovieMain />,
    children: [
      {
        path: ":movieId",
        element: <MovieMain />,
      },
    ],
  },
  {
    path: "/movie/ratings",
    element: <MovieRatings />,
    children: [
      {
        path: ":movieId",
        element: <MovieRatings />,
      },
    ],
  },
]);
