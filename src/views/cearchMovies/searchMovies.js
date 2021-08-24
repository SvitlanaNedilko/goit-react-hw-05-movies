import { useHistory, useLocation } from 'react-router-dom'
import { getSearchFilm } from '../../components/filmsapi/FilmsApi'
import React, { useState, useEffect } from 'react'
import FilmsList from '../../components/FilmsList/FilmsList'
import './searchMovies.scss'

export default function SearchMovies() {
  const history = useHistory()
  const location = useLocation()
  const [filmName, setFilmName] = useState('')
  const [filmsList, setFilmsList] = useState([])

  const handleNameChange = (event) => {
    setFilmName(event.currentTarget.value.toLowerCase())
  }

  useEffect(() => {
    const sortFilmName = new URLSearchParams(location.search).get('query')
    if (sortFilmName) {
      getSearchFilm(sortFilmName).then((response) => {
        setFilmsList(response.results)
      })
    }
  }, [location.search])

  const handelSubmit = (event) => {
    event.preventDefault()

    if (filmName.trim() === '') {
      alert('введите название')
      setFilmName('')
      return
    }
    history.push({ ...location, search: `query=${filmName}` })
  }

  return (
    <>
      <form onSubmit={handelSubmit} className="SearchForm">
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Search films"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      <div>
        <FilmsList films={filmsList} />
      </div>
    </>
  )
}
