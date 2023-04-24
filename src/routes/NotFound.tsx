import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found.</p>
    </div>
  );
}
