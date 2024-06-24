import { useContext, useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import { getFilteredMovies } from "../../api/movie_api";
import { SearchContext } from "../../context/searchContext";
import { useSearchParams } from "react-router-dom";

export const MoviesPage = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setSearchParams(searchValue ? { query: searchValue } : {});
    const fetchFilteredMovie = async () => {
      try {
        const movies = await getFilteredMovies(query, page);

        setQuery(searchValue);
        setFilteredMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilteredMovie();
  }, [page, query, searchValue, setSearchParams]);

  return (
    <div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};
