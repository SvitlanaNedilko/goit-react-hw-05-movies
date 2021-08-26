import { getInformationCast } from '../../services/filmsapi/FilmsApi'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './castView.scss'

export default function CastView() {
  const { filmId } = useParams()
  const [castInfo, setCastInfo] = useState([])

  useEffect(() => {
    getInformationCast(filmId).then((response) => {
      setCastInfo(response.cast)
    })
  }, [filmId])

  return (
    <ul className="CastList">
      {!!castInfo.length &&
        castInfo.map((cast) => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
              alt={cast.name}
            />
            <h2>{cast.name}</h2>
            <p>
              character: <span>{cast.character}</span>
            </p>
          </li>
        ))}
    </ul>
  )
}
