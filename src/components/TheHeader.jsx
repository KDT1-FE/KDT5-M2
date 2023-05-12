import { NavLink } from 'react-router-dom'
import styles from '~/styles/TheHeader.module.scss'
import styled from 'styled-components'
const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  font-size: 30px;
  width: 99vw;
`
const Header = styled.header`
  position: relative;
  z-index: 10;
`
const Items = styled.li``
export default function TheHeader() {
  return (
    <Header>
      <List>
        <Items>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
        </Items>
        <Items>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : '')}>
            About
          </NavLink>
        </Items>
      </List>
    </Header>
  )
}
