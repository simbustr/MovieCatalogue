import { useState } from "react";
import MovieList from "./MovieList";
import MoviePreview from "./MoviePreview";

type MovieData = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};

type MovieCatalogueProps = {
  movieListData: MovieData[];
};

const MovieCatalogue = ({ movieListData }: MovieCatalogueProps) => {
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  const selectedMovie = movieListData.find(
    (movie) => movie.id === selectedMovieId
  );
  const firstMovie = movieListData[0];

  const transformedMovieListData = movieListData.map(movie => ({
    ...movie,
     isSelected: movie.id === selectedMovieId
   }));

  return (
    <div className="flex gap-5">
      {selectedMovie && (
        <MoviePreview
          movieTitle={selectedMovie.title}
          posterUrl={selectedMovie.poster}
          releaseYear={selectedMovie.year}
        />
      )}
      {!selectedMovie && firstMovie && (
        <MoviePreview
          movieTitle={firstMovie.title}
          posterUrl={firstMovie.poster}
          releaseYear={firstMovie.year}
        />
      )}
      <MovieList
        movieItemList={transformedMovieListData}
        onMovieSelected={setSelectedMovieId}
        selectedMovieId={selectedMovieId}
      />
    </div>
  );
};

export default MovieCatalogue;
