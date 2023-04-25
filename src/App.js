import { useCallback, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import ErrorPage from "./routes/ErrorPage";
import MainPage from "./routes/MainPage";
import MoviePage from "./routes/MoviePage";

function App() {
  // Hooks
  const [category, setCategory] = useState("검색");
  const onMenuSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  // Render
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header category={category} onMenuSelect={onMenuSelect} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;