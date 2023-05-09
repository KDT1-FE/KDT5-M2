import { Link } from 'react-router-dom';
import styles from '~/styles/NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.errorWrap}>
      <h1 className="omdb">404 Error page</h1>
      <Link to="/" className="omdb">
        click here
      </Link>
    </div>
  );
}
