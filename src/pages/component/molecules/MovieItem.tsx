export type MovieItemProps = {
  id: string;
  title: string;
  onMovieSelected?: Function;
  isSelected: boolean;
};

const MovieItem = ({
  id,
  title,
  onMovieSelected,
  isSelected,
}: MovieItemProps) => {
  return (
    <div
      onClick={() => onMovieSelected && onMovieSelected(id)}
      className={`p-4 cursor-pointer ${
        isSelected ? "bg-blue-100 border-2 border-blue-500" : "bg-white"
      }`}
    >
      {title}
    </div>
  );
};

export default MovieItem;
