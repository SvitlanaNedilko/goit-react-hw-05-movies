import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../../App'
import './Navigation.scss'

const Navigation = () => (
  <nav>
    <NavLink
      to={`${BASE_URL}/`}
      exact
      className="link"
      activeClassName="activlink"
    >
      Home
    </NavLink>
    <NavLink
      to={`${BASE_URL}/films`}
      className="link"
      activeClassName="activlink"
    >
      Films
    </NavLink>
  </nav>
)

export default Navigation
