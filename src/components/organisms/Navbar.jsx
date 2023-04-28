import { NavLink } from 'react-router-dom'

import './Navbar.scss'

export default function Navbar({ nav }) {
  return (
    <nav className="o-navBar">
      <ul>
        {nav.map((item) => (
          <li key={item.url}>
            <NavLink
              to={item.url}
              aria-label={item.title}
              className={({ isActive }) =>
                isActive ? 'a-iconText -active' : 'a-iconText'
              }
            >
              {item.content}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
