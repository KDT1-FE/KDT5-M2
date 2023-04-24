import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Container from './Container';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}
