import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "../../api/movie_api";
import { baseListImgUrl } from "../MovieList/MovieList";

export const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchActors = async () => {
      try {
        const actors = await getActors(movieId);

        setActors(actors);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActors();
  }, [movieId]);

  return (
    <ul className="grid grid-cols-3 gap-5 mt-5 bg-blue-200 text-blue-950 rounded-2xl p-3">
      {actors.map((actor) => (
        <li key={actor.id} className="flex items-start justify-between gap-5">
          <img
            className="flex w-40 justify-center items-center rounded-xl"
            src={baseListImgUrl + "w500/" + `${actor.profile_path}`}
            alt={actor.name}
          />
          <div className="flex flex-col gap-5 items-between">
            <h3 className="text-2xl font-bold">{actor.name}</h3>
            <p className=" text-lg font-semibold ">
              Character: {actor.character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
