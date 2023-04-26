import { useCallback, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "src/components/common/Header";
import ErrorPage from "src/routes/ErrorPage";
import MainPage from "src/routes/MainPage";
import MoviePage from "src/routes/MoviePage";

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
        <Route path="/:movieId" element={<MoviePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;