import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center about-hieght">
      <h1 className="text-4xl font-bold text-gray-700 mb-6">404 Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-4 py-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-600 transition-all duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
}
