import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWJkZGNjMWJjY2NjZWM2ZGI4ZWRhNmM0YzdjMGUwNiIsIm5iZiI6MTcxOTA4MDk4MC4zNDY3NjQsInN1YiI6IjY2NzcxNDRlNTJlOGQ1MDk5MTVlNmY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xyqrlSbyJL-wN-remOx4ez7Evot6Xp8bVTHtVIXQgWg",
  },
};

export const getTrendMovie = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-UA",
    options
  );

  return response.data.results;
};

getTrendMovie();
