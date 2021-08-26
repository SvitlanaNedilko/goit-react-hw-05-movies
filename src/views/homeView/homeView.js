import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getTrandingFilms } from '../../services/filmsapi/FilmsApi'
import FilmsList from '../../components/FilmsList/FilmsList'
import './homeView.scss'

export default function HomeView() {
  const [films, setFilms] = useState([])
  const location = useLocation()

  useEffect(() => {
    getTrandingFilms().then((response) => setFilms(response.results))
  }, [])
  return (
    <div>
      <h2 className="Title">Trending today</h2>
      <FilmsList films={films} location={location} />
    </div>
  )
}
