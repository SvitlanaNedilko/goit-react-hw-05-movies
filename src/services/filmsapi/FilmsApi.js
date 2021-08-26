import PropTypes from 'prop-types'

const KEY = '88170d9b1d48a35ab3cdc8e6a3c5a816'

export function getTrandingFilms() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`произошла ошибка`))
  })
}

export function getInformationFilm(filmId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=${KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`произошла ошибка`))
  })
}

export function getInformationCast(filmId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`произошла ошибка`))
  })
}

export function getFilmReview(filmId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=${KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`произошла ошибка`))
  })
}

export function getSearchFilm(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`произошла ошибка`))
  })
}

getInformationFilm.propTypes = {
  filmId: PropTypes.string,
}

getInformationCast.propTypes = {
  filmId: PropTypes.string,
}

getFilmReview.propTypes = {
  filmId: PropTypes.string,
}

getSearchFilm.propTypes = {
  query: PropTypes.string,
}
