import { Link } from 'react-router-dom'
import './FilmList.scss'
import PropTypes from 'prop-types'

export default function FilmsList({ films }) {
  return (
    <ul className="FilmsList">
      {!!films.length &&
        films.map((film) => (
          <li key={film.id} className="FilmsList_Item">
            <Link to={`/films/${film.id}`}>{film.title}</Link>
          </li>
        ))}
    </ul>
  )
}

FilmsList.propTypes = {
  films: PropTypes.array,
}
