import React, { useState, useEffect } from 'react'
import { getTrandingFilms } from '../../components/filmsapi/FilmsApi'
import FilmsList from '../../components/FilmsList/FilmsList'
import './homeView.scss'

export default function HomeView() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    getTrandingFilms().then((response) => setFilms(response.results))
  }, [])
  return (
    <div>
      <h2 className="Title">Trending today</h2>
      <FilmsList films={films} />
    </div>
  )
}
