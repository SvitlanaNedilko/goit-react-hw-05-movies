import { Link } from 'react-router-dom'
import './FilmList.scss'
import PropTypes from 'prop-types'
import { BASE_URL } from '../../App'

export default function FilmsList({ films, location }) {
  return (
    <ul className="FilmsList">
      {!!films.length &&
        films.map((film) => (
          <li key={film.id} className="FilmsList_Item">
            <Link
              to={{
                pathname: `${BASE_URL}/films/${film.id}`,
                state: { from: location },
              }}
            >
              {film.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

FilmsList.propTypes = {
  films: PropTypes.array,
}
