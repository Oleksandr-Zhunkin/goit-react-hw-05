import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideo } from "../../api/movie_api";

export const baseVideoUrl = "https://www.youtube.com/embed/";
const MovieVideos = () => {
  const [videos, setVideos] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchVideos = async () => {
      try {
        const videos = await getVideo(movieId);

        setVideos(videos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [movieId]);
  return (
    <ul className="flex flex-col-reverse gap-5 mt-5">
      {videos.map((video) => (
        <li key={video.id}>
          <h3 className="text-2xl font-bold text-center mb-5">{video.name}</h3>
          <iframe
            width="100%"
            height="500"
            src={baseVideoUrl + video.key}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className=" rounded-2xl"
          ></iframe>
        </li>
      ))}
    </ul>
  );
};
export default MovieVideos;
