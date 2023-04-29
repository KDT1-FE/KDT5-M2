import { Outlet } from 'react-router-dom';
import Header from '~/components/Header';

export default function Home() {
  //console.log(value);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
