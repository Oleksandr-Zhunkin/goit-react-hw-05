import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendMovies } from "../../api/movie_api";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendMovie = async () => {
      try {
        setLoading(true);
        const movies = await getTrendMovies();

        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendMovie();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-3xl flex p-5 font-bold justify-center items-center">
            Trending movies
          </h1>
          <MovieList movies={movies} />
        </div>
      )}
    </>
  );
};
export default HomePage;
