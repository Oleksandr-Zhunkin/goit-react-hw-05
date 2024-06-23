import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { useEffect, useState } from "react";
import { getTrendMovie } from "./api/movie_api";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovie = async () => {
      try {
        const movies = await getTrendMovie();

        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendMovie();
  });

  return (
    <Section>
      <Container>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage movies={movies} />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Section>
  );
}

export default App;
