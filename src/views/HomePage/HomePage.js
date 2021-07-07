import React, { Component } from 'react';
import styles from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrading } from '../../services/movies-api';

class HomePage extends Component {
	state = {
		movies: [],
		error: null,
	};

	async componentDidMount() {
		this.setState({ error: null });

		fetchTrading()
			.then(movies => {
				this.setState({ movies });
			})
			.catch(error => this.setState({ error }));
	}

	render() {
		return (
			<>
				<h1 className={styles.MovieGalleryTitle}>Trends</h1>
				<MovieList movies={this.state.movies} />
			</>
		);
	}
}

export default HomePage;
