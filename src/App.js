import { Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Movie/:movieId" element={<Movie />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
