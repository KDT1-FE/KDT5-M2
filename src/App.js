import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import MainPage from "./routes/MainPage";
import SearchPage from "./routes/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
