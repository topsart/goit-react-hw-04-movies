import axios from 'axios';
import React, { Component } from 'react';
import styles from './Reviews.module.css';

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
				<ul className={styles.ReviewsList}>
					{this.state.reviews.map(review => (
						<li className={styles.ReviewsItem} key={review.id}>
							<h3 className={styles.ReviewsTitle}>Author: {review.author}</h3>
							<p className={styles.ReviewsInfo}>{review.content}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Reviews;
