import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { Navigation } from "./components/Navigation/Navigation";
import { ContextProvider } from "./context/searchContext";
import { MovieCast } from "./components/MovieCast/MovieCast";
import { MovieReviews } from "./components/MovieReviews/MovieReviews";

function App() {
  return (
    <Section>
      <Container>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="credits" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ContextProvider>
      </Container>
    </Section>
  );
}

export default App;
