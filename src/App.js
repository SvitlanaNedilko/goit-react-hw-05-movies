import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import Container from './components/Container/Container'
import './App.scss'

export const BASE_URL = '/goit-react-hw-05-movies'

const HomeView = lazy(() =>
  import('./views/homeView/homeView' /* webpackChunkName: "HomeView" */)
)
const SearchMovies = lazy(() =>
  import(
    './views/cearchMovies/searchMovies'
    /* webpackChunkName: "SearchMovies" */
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
          <Route path={`${BASE_URL}/`} exact>
            <HomeView />
          </Route>
          <Route path={`${BASE_URL}/films`} exact>
            <SearchMovies />
          </Route>
          <Route path={`${BASE_URL}/films/:filmId`}>
            <MovieDetailsPage />
          </Route>
          <Redirect to={`${BASE_URL}/`} />
        </Switch>
      </Suspense>
    </Container>
  )
}
