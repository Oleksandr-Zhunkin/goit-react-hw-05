import { MovieList } from "../../components/MovieList/MovieList";

export const HomePage = ({ movies }) => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
