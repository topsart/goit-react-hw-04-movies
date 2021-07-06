import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFoundView from './views/NotFoundView';
import MovieDetailsPage from './views/MovieDetailsPage';

const App = () => (
	<>
		<ul>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/movies">Movies</NavLink>
			</li>
		</ul>

		<Switch>
			<Route path="/" component={HomePage} exact />
			<Route path="/movies/:movieId" component={MovieDetailsPage} />
			<Route path="/movies" component={MoviesPage} />
			<Route component={NotFoundView} />
		</Switch>
	</>
);

export default App;
