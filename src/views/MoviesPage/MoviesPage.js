import React, { Component } from 'react';
import Searchbar from '../../components/SearchBar/Searchbar';
import MovieList from '../../components/MovieList/MovieList';
import { searchMovies } from '../../services/movies-api';

class MoviesPage extends Component {
	state = {
		movies: [],
		error: null,
	};

	onChangeQuery = query => {
		this.setState({ error: null });

		searchMovies(query)
			.then(movies => {
				this.setState({ movies });
			})
			.catch(error => this.setState({ error }));
	};

	render() {
		return (
			<>
				<Searchbar onSubmit={this.onChangeQuery} />
				<MovieList movies={this.state.movies} />
			</>
		);
	}
}

export default MoviesPage;
