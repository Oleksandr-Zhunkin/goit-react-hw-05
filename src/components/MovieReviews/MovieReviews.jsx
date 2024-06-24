import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../api/movie_api";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(movieId);

        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul className="flex flex-col gap-5 mt-5 bg-blue-200 text-blue-950 rounded-2xl p-3">
      {reviews.map((review) => (
        <li key={review.id} className="flex items-start gap-10">
          <h4 className=" text-xl font-bold min-w-36">
            Author: {review.author}
          </h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <h3 className=" text-xl font-bold min-w-36 text-center mt-5">
      There are no reviews for this movie
    </h3>
  );
};
export default MovieReviews;
