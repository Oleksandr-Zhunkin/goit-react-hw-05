import { Link } from "react-router-dom";

const baseListImgUrl = "https://image.tmdb.org/t/p/original/";

export const MovieList = ({ movies }) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <li
          key={movie.id}
          className=" bg-blue-200 flex justify-center items-center px-4 py-2 rounded-xl"
        >
          <Link to={`/movies/${movie.id}`} className="block">
            <div className="flex h-14 items-baseline justify-center text-xl">
              <p>{index + 1} - </p>
              <h4 className=" "> {movie.original_title}</h4>
            </div>
            <img
              src={`${baseListImgUrl}` + `${movie.poster_path}`}
              alt={movie.original_title}
              className=" flex w-48 rounded-xl"
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
