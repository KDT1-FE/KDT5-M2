import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Container>
        <main className="my-10">
          <Outlet />
        </main>
      </Container>
      <Footer />
    </div>
  );
}
