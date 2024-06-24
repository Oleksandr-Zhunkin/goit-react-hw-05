import { Suspense, useEffect, useRef, useState } from "react";
import { getMovieDetail } from "../../api/movie_api";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { baseListImgUrl } from "../../components/MovieList/MovieList";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state || "/movies");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const selectMovie = await getMovieDetail(movieId);

        setMovie(selectMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <GoBackBtn path={goBack.current} />
          <div className="flex gap-4 p-5">
            <img
              className=" rounded-2xl"
              src={`${baseListImgUrl}` + "w500/" + `${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className="flex flex-col gap-5">
              <h2 className=" text-3xl font-bold">{movie.title}</h2>
              <p className=" text-lg font-semibold">
                User_Score {(movie.vote_average / 10) * 100}%
              </p>
              <h3 className=" text-2xl font-bold">Overview</h3>
              <p className=" text-lg font-medium">{movie.overview}</p>
              <h3 className=" text-2xl font-bold">Genres</h3>
              <ul className="flex gap-5">
                {movie.genres?.map((genre) => (
                  <li
                    className=" text-lg font-medium bg-blue-200 p-2 rounded-xl"
                    key={genre.id}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col p-5 bg-blue-950 text-blue-200 rounded-2xl">
            <h3 className=" text-2xl font-bold text-center mb-5">
              Aditional information
            </h3>
            <div className="flex justify-around gap-20">
              <Link
                className=" text-lg p-2 px-8 bg-blue-200 text-blue-950 font-bold uppercase rounded-xl text-center"
                to="credits"
              >
                Cast
              </Link>

              <Link
                className=" text-lg p-2 px-8 bg-blue-200 text-blue-950 font-bold uppercase rounded-xl text-center"
                to="reviews"
              >
                Reviews
              </Link>
              <Link
                className=" text-lg p-2 px-8 bg-blue-200 text-blue-950 font-bold uppercase rounded-xl text-center"
                to="videos"
              >
                Trailers
              </Link>
            </div>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
