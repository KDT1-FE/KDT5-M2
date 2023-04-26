import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "src/components/common/Header";
import ErrorPage from "src/routes/ErrorPage";
import MainPage from "src/routes/MainPage";
import MovieDetailPage from "src/routes/MovieDetailPage";

function App() {
  // Render
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:movieId" element={<MovieDetailPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;