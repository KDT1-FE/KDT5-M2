import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import About from './routes/About';
import NotFound from './routes/NotFound';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
