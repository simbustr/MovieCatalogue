import MovieItem, { MovieItemProps } from "./MovieItem";

type MovieListProps = {
  movieItemList: MovieItemProps[];
  onMovieSelected: Function;
  selectedMovieId: string | null;
};

const MovieList = ({ movieItemList, onMovieSelected , selectedMovieId}: MovieListProps) => {
  return (
    <div>
      {movieItemList.map((item, index) => {
        return (
          <div key={index}>
            <MovieItem
              title={item.title}
              id={item.id}
              onMovieSelected={onMovieSelected}
              isSelected={item.id === selectedMovieId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
