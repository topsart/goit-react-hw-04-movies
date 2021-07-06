import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MoviesPage extends Component {
	state = {
		movies: [],
	};

	async componentDidMount() {
		const response = await axios.get(
			'https://api.themoviedb.org/3/search/movie?api_key=0ec59de6c34a89161ac01d0312b43ce4&query=batman',
		);
		this.setState({ movies: response.data.results });
	}

	render() {
		return (
			<>
				<ul>
					{this.state.movies.map(movie => (
						<li key={movie.id}>
							<Link to={`${this.props.match.url}/${movie.id}`}>
								{movie.original_title}
							</Link>
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
