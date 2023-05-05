import { Link } from 'react-router-dom'
import '../styles/TheFooter.scss'

export default function TheFooter() {
  return (
    <footer>
      <Link
        to="/"
        style={{ textDecoration: 'none' }}>
        <p className="footer-logo">
          Mov<span>iecu</span> !
        </p>
      </Link>
      <Link
        to="/about"
        style={{ textDecoration: 'none' }}>
        <span className="a">@cu_convenience_store</span>
      </Link>
    </footer>
  )
}
