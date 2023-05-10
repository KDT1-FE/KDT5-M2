import headerStyle from '~/TheHeader.module.scss'
import { NavLink } from 'react-router-dom'

export default function TheHeader() {
  return (
    <>
      <header>
        <div className={headerStyle.inner}>
          <NavLink
            className={headerStyle.title}
            to="/">
            <h1>🎬 OMDb API</h1>
          </NavLink>
          <NavLink
            className={headerStyle.about}
            to="/account">
            MY
          </NavLink>
        </div>
      </header>
    </>
  )
}
