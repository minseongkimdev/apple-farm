import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.css'

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link
            to={{
                pathname: `/movie-detail/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres,
                },
            }}
        >
            <div class="movie">
                <img src={poster} alt={title} title={title} />
                <h3 class="movei__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li className="genres__genre">
                            {genre}
                            {index}
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
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
