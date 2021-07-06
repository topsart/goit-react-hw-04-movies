import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './HomePage.module.css';

class HomePage extends Component {
	state = {
		movies: [],
	};

	async componentDidMount() {
		const response = await axios.get(
			'https://api.themoviedb.org/3/trending/movie/day?api_key=0ec59de6c34a89161ac01d0312b43ce4',
		);
		this.setState({ movies: response.data.results });
	}

	render() {
		return (
			<>
				<h1 className={styles.MovieGalleryTitle}>Trends</h1>
				<ul className={styles.MovieGallery}>
					{this.state.movies.map(movie => (
						<li key={movie.id} className={styles.MovieGalleryItem}>
							<NavLink to={`movies/${movie.id}`}>
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
									alt={movie.original_title}
									className={styles.MovieGalleryItemImage}
								/>
							</NavLink>
							<p className={styles.MovieGalleryItemTitle}>
								{movie.original_title}
							</p>
						</li>
					))}
				</ul>
			</>
		);
	}
}

export default HomePage;
