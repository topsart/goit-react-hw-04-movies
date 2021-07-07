import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundView from './views/NotFoundView';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import routes from './routes';

const HomePage = lazy(() =>
	import('./views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
	import(
		'./views/MoviesPage/MoviesPage.js' /* webpackChunkName: "movies-page" */
	),
);
const MovieDetailsPage = lazy(() =>
	import(
		'./views/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movies-details-page" */
	),
);

const App = () => (
	<>
		<Container>
			<Navigation />

			<Suspense fallback={<h1>Загружаем...</h1>}>
				<Switch>
					<Route path={routes.home} component={HomePage} exact />
					<Route path={routes.movieDetails} component={MovieDetailsPage} />
					<Route path={routes.movies} component={MoviesPage} />
					<Route component={NotFoundView} />
				</Switch>
			</Suspense>
		</Container>
	</>
);

export default App;
