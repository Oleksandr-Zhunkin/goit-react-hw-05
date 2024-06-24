import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getFilteredMovies } from "../../api/movie_api";

import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("query");

  useEffect(() => {
    const fetchFilteredMovie = async () => {
      try {
        setLoading(true);
        const movies = await getFilteredMovies(searchValue, page);

        setFilteredMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilteredMovie();
  }, [page, searchValue]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MovieList movies={filteredMovies} />
        </div>
      )}
    </>
  );
};
export default MoviesPage;
