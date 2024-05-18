import MovieCatalogue from "./pages/component/molecules/MovieCatalogue";
import data from "./static/movie-data.json";

const App = () => {
  return <div className="p-5">
    <MovieCatalogue movieListData={data}/>
  </div>;
};

export default App;
