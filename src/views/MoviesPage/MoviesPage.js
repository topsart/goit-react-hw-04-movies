import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Searchbar from '../../components/SearchBar/Searchbar';
import styles from '../HomePage/HomePage.module.css';

class MoviesPage extends Component {
	state = {
		movies: [],
	};

	// async componentDidMount() {
	// 	const response = await axios.get(
	// 		'https://api.themoviedb.org/3/search/movie?api_key=0ec59de6c34a89161ac01d0312b43ce4&query=batman',
	// 	);
	// 	this.setState({ movies: response.data.results });
	// }

	onChangeQuery = query => {
		// console.log(query);
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=0ec59de6c34a89161ac01d0312b43ce4&page=1&query=${query}`,
			)
			.then(response => this.setState({ movies: response.data.results }));
		// this.setState({
		// searchQuery: query,
		// currentPage: 1,
		// images: [],
		// error: null,
		// });
	};

	render() {
		return (
			<>
				<Searchbar onSubmit={this.onChangeQuery} />
				<ul className={styles.MovieGallery}>
					{this.state.movies.map(movie => (
						<li key={movie.id} className={styles.MovieGalleryItem}>
							<NavLink to={`${this.props.match.url}/${movie.id}`}>
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

export default MoviesPage;

// 0ec59de6c34a89161ac01d0312b43ce4

// https://api.themoviedb.org/3/movie/550?api_key=0ec59de6c34a89161ac01d0312b43ce4
