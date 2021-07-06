import axios from 'axios';
import React, { Component } from 'react';

class Reviews extends Component {
	state = {
		reviews: [],
	};

	async componentDidMount() {
		const { movieId } = this.props.match.params;
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0ec59de6c34a89161ac01d0312b43ce4`,
		);
		this.setState({ reviews: response.data.results });
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.reviews.map(review => (
						<li key={review.id}>
							<h3>Author: {review.author}</h3>
							<p>{review.content}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Reviews;
