import { Link, useLocation } from "react-router-dom";

export const baseListImgUrl = "https://image.tmdb.org/t/p/";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="grid grid-cols-4 gap-5 mt-5">
      {movies.map((movie, index) => (
        <li
          key={movie.id}
          className=" bg-blue-200 flex justify-center items-center px-4 py-2 rounded-xl"
        >
          <Link to={`/movies/${movie.id}`} state={location}>
            <h4 className="flex h-14 items-center justify-center text-xl text-center font-semibold">
              {index + 1} - {movie.original_title}
            </h4>
            <img
              src={`${baseListImgUrl}` + "original/" + `${movie.poster_path}`}
              alt={movie.original_title}
              className="flex min-w-full rounded-xl m-auto"
            />
            <p className=" text-center py-2 font-semibold">
              Raiting - {movie.vote_average}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
