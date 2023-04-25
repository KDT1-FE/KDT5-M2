import Button from './Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import hprofile from '../assets/hprofile.jpg';
import navItems from '../constants/navItems';

export default function Navbar(): JSX.Element {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-2 px-8">
      <div className="flex items-center gap-10">
        <Link
          to="/"
          className="text-xl font-bold font-Oswald hover:scale-105 transition"
        >
          <span className="text-amber-400">OMDbAPI</span>.COM
        </Link>

        <nav>
          <ul className="flex gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink to={`${item.href}`}>
                  {({ isActive }) => {
                    return <Button name={item.name} active={isActive} />;
                  }}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className="bg-slate-200 w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition cursor-pointer"
        onClick={() => {
          navigate('/about');
        }}
      >
        <img src={hprofile} alt="profile" className="rounded-full h-8 w-8" />
      </div>
    </header>
  );
}
