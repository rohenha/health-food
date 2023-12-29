import { NavLink } from 'react-router-dom'
import { memo } from 'react'

import './Navbar.scss'

const Navbar = ({ nav }) => {
  return (
    <nav className="o-navBar">
      <ul>
        {nav.map((item) => (
          <li key={item.url}>
            <NavLink
              to={item.url}
              aria-label={item.title}
              className={({ isActive }) =>
                isActive ? 'o-navBar__link -active' : 'o-navBar__link'
              }
              end
            >
              {item.icon}
              <span>{item.content}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default memo(Navbar)
