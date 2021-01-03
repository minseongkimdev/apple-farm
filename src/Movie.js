import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <h3 class="movei__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
            <ul className="genres">
                {genres.map(genre => (
                    <li className="genres__genre">{genre}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
