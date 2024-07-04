import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const MovieVideos = lazy(() => import("./components/MovieVideos/MovieVideos"));

function App() {
  return (
    <Section>
      <Container>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="credits" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
                <Route path="videos" element={<MovieVideos />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </Section>
  );
}

export default App;
