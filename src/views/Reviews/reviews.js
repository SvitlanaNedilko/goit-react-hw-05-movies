import { getFilmReview } from '../../services/filmsapi/FilmsApi'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EmptyPlaceholder from '../../components/EmptyPlaceholder/EmptyPLaceholder'
import './reviews.scss'

export default function FilmReview() {
  const { filmId } = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getFilmReview(filmId).then((response) => {
      setReviews(response.results)
    })
  }, [filmId])

  return (
    <ul className="ReviewList">
      {!!reviews.length ? (
        reviews.map((review) => (
          <li key={review.id}>
            <h2>
              Author:<span>{review.author}</span>
            </h2>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <EmptyPlaceholder />
      )}
    </ul>
  )
}
