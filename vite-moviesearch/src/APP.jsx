import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import MovieDetail from './routes/MovieDetail'
import About from './routes/About'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/About"
          element={<About />}
        />
        <Route
          path="/movies/:movieId?"
          element={<MovieDetail />}
        />
      </Routes>
    </BrowserRouter>
  )
}
