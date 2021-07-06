import axios from 'axios';
import React, { Component } from 'react';

class Cast extends Component {
	state = {
		actors: [],
	};

	async componentDidMount() {
		const { movieId } = this.props.match.params;
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0ec59de6c34a89161ac01d0312b43ce4`,
		);
		this.setState({ actors: response.data.cast });
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.actors.map(actor => (
						<li key={actor.id}>
							<img
								src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
								alt=""
							/>
							<p>{actor.name}</p>
							<p>{actor.character}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Cast;
