import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 border-t flex-col opacity-60">
      <Link to="/" className="text-xl font-Oswald">
        <span className="text-amber-400">OMDb.API</span>
        .COM
      </Link>
      <Link to="/about" className="underline-offset-2 underline">
        (c)2023 Howoo
      </Link>
    </footer>
  );
}
