import React from 'react'

export type MoviePosterProps ={
    movieTitle: string;
  posterUrl: string;
}

const MoviePoster = ({movieTitle,posterUrl}:MoviePosterProps) => {
  return (
    <div>
        <img src={posterUrl} alt={movieTitle}/>
    </div>
  )
}

export default MoviePoster
