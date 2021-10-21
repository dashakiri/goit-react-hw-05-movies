import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import AppBar from './components/appBar/AppBar';

const HomeView = lazy(() => import('./views/homeView/HomeView'));

const MoviewSearchView = lazy(() =>
  import('./views/movieSearchView/MovieSearchView.jsx'),
);

const MovieView = lazy(() => import('./views/movieView/MovieView.jsx'));

export default function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movie" exact>
            <MoviewSearchView />
          </Route>

          <Route path="/movie/:movieId">
            <MovieView />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
