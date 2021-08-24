import { NavLink } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className="link" activeClassName="activlink">
      Home
    </NavLink>
    <NavLink to="/films" className="link" activeClassName="activlink">
      Films
    </NavLink>
  </nav>
)

export default Navigation
