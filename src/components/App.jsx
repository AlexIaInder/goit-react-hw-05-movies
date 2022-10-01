import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('../page/Layout/Layout'));
const Home = lazy(() => import('../page/Home/Home'));
const Movies = lazy(() => import('../page/Movies/Movies'));
const MovieDetails = lazy(() => import('../page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const NotFound = lazy(() => import('../page/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
