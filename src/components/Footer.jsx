import { Link } from 'react-router-dom';
import styles from '~/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.wrap}`}>
      <div>
        <Link to="/" className="omdb">
          <span className="yellow">OMDbAPI</span>.COM
        </Link>
        <div className="copyright">2023 Fastcamp assignment</div>
      </div>
    </footer>
  );
}
