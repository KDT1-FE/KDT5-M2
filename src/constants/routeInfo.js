import Main from "../pages/main";
import MovieInfo from "../pages/movieinfo";
import About from "../pages/about";

export const BASE_URL = "http://localhost:5173";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/movieinfo\/[\w]+$/, element: MovieInfo },
  { path: /^\/about$/, element: About },
];