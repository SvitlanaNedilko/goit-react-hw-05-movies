import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import Container from './components/Container/Container'
import './App.scss'

const HomeView = lazy(() =>
  import('./views/homeView/homeView' /* webpackChunkName: "HomeView" */)
)
const SearchMovies = lazy(() =>
  import(
    './views/cearchMovies/searchMovies'
    /* webpackChunkName: "SearchMovies" */
  )
)
const NotFoundPage = lazy(() =>
  import(
    './views/notFoundPages/NotFoundPages' /* webpackChunkName: "NotFoundPage" */
  )
)
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  )
)

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h2>Загружаем...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/films" exact>
            <SearchMovies />
          </Route>
          <Route path="/films/:filmId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  )
}
