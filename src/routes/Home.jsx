import { Outlet } from 'react-router-dom';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function Home() {
  //console.log(value);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
