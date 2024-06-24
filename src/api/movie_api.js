import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWJkZGNjMWJjY2NjZWM2ZGI4ZWRhNmM0YzdjMGUwNiIsIm5iZiI6MTcxOTA4MDk4MC4zNDY3NjQsInN1YiI6IjY2NzcxNDRlNTJlOGQ1MDk5MTVlNmY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xyqrlSbyJL-wN-remOx4ez7Evot6Xp8bVTHtVIXQgWg",
  },
};

export const getTrendMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-UA",
    options
  );

  return response.data.results;
};

export const getFilteredMovies = async (query, page) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWJkZGNjMWJjY2NjZWM2ZGI4ZWRhNmM0YzdjMGUwNiIsIm5iZiI6MTcxOTA4MDk4MC4zNDY3NjQsInN1YiI6IjY2NzcxNDRlNTJlOGQ1MDk5MTVlNmY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xyqrlSbyJL-wN-remOx4ez7Evot6Xp8bVTHtVIXQgWg",
    },
    params: {
      query: query,
      page: page,
    },
  };

  const response = await axios.get("/search/movie", options);

  return response.data.results;
};

export const getMovieDetail = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);

  return response.data;
};

export const getActors = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);

  return response.data.cast;
};

export const getReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);

  return response.data.results;
};

export const getVideo = async (id) => {
  const response = await axios.get(`/movie/${id}/videos`, options);
  console.log(response.data.results);
  return response.data.results;
};
getVideo(704673);
