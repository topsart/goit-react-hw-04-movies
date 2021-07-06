import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
	state = {
		title: '',
		vote_average: null,
		overview: '',
		genres: [],
		poster_path: '',
	};

	async componentDidMount() {
		const { movieId } = this.props.match.params;
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=0ec59de6c34a89161ac01d0312b43ce4`,
		);

		this.setState({ ...response.data });
	}

	render() {
		const { match } = this.props;

		return (
			<div>
				<h1>This is MovieDetailsPage {this.props.match.params.movieId}</h1>
				<img
					src={`https://image.tmdb.org/t/p/w500/${this.state.poster_path}`}
					alt=""
				/>
				<div>
					<h1>{this.state.title}</h1>
					<h2>User Score</h2>
					<p>{this.state.vote_average}</p>
					<h2>Overview</h2>
					<p>{this.state.overview}</p>
					<h2>Genres</h2>
					<ul>
						{this.state.genres.map(genre => (
							<li key={genre.id}>{genre.name}</li>
						))}
					</ul>
				</div>
				<ul>
					<li>
						<Link to={`${match.url}/cast`}>Cast</Link>
					</li>
					<li>
						<Link to={`${match.url}/reviews`}>Reviews</Link>
					</li>
				</ul>

				<Route path={`${match.path}/cast`} component={Cast} />
				<Route path={`${match.path}/reviews`} component={Reviews} />
			</div>
		);
	}
}

export default MovieDetailsPage;
