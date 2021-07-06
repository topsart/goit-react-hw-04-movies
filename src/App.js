import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import NotFoundView from './views/NotFoundView';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';

const App = () => (
	<>
		<Container>
			<Navigation />
			{/* <ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/movies">Movies</NavLink>
				</li>
			</ul> */}

			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/movies/:movieId" component={MovieDetailsPage} />
				<Route path="/movies" component={MoviesPage} />
				<Route component={NotFoundView} />
			</Switch>
		</Container>
	</>
);

export default App;
