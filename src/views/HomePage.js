import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
				<ul>
					{this.state.movies.map(movie => (
						<li key={movie.id}>
							<Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
						</li>
					))}
				</ul>
			</>
		);
	}
}

export default HomePage;
