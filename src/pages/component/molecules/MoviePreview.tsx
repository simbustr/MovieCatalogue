import React from 'react'
import MoviePoster from '../atoms/MoviePoster'
import MovieLabel from '../atoms/MovieLabel';


export type MoviePreviewProps = {
    movieTitle: string;
    posterUrl: string;
    releaseYear: string;
    
  };

const MoviePreview = ({movieTitle,posterUrl,releaseYear}:MoviePreviewProps) => {
  return (
    <div>
       <MoviePoster movieTitle={movieTitle} posterUrl={posterUrl}/>
       <MovieLabel title={movieTitle} year={releaseYear}/>
    </div>
  )
}

export default MoviePreview
