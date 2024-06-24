import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendMovies } from "../../api/movie_api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovie = async () => {
      try {
        const movies = await getTrendMovies();

        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendMovie();
  });

  return (
    <div>
      <h1 className="text-3xl flex p-5 font-bold justify-center items-center">
        Trending movies
      </h1>
      <MovieList movies={movies} />
    </div>
  );
};
export default HomePage;
