import React, { useState, useEffect, lazy, Suspense } from 'react'
import {
  useParams,
  useRouteMatch,
  NavLink,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom'
import { BASE_URL } from '../../App'
import { getInformationFilm } from '../../services/filmsapi/FilmsApi'
import './MovieDetailsPage.scss'

const CastView = lazy(() =>
  import('../castView/castView' /* webpackChunkName: "CastView" */)
)
const FilmReview = lazy(() =>
  import('../Reviews/reviews' /* webpackChunkName: "FilmReview" */)
)

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch()
  const [film, setFilm] = useState([])
  const { filmId } = useParams()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    getInformationFilm(filmId).then((response) => {
      setFilm(response)
    })
  }, [filmId])

  const onGoBack = () => {
    history.push(location?.state?.from ?? `${BASE_URL}/`)
  }

  return (
    <div>
      <button type="button" onClick={onGoBack} className="ButtonBack">
        Back
      </button>
      <div className="FilmInformContainer">
        <div className="ImageContainer">
          <img
            src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
            alt={film.title}
          />
        </div>
        <div className="DescribingContainer">
          <h1>{film.title}</h1>
          <p>{`User Score: ${film.vote_average}`} </p>
          <h2>Overview</h2>
          <div>
            <p>{film.overview}</p>
          </div>

          <h2> Genres</h2>
          <p>{film.genres?.map((genre) => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className="AdditionalContainer">
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<h2>Загружаем...</h2>}>
        <Route path={`${path}/reviews`}>
          <FilmReview />
        </Route>

        <Route path={`${path}/cast`}>
          <CastView />
        </Route>
      </Suspense>
    </div>
  )
}
