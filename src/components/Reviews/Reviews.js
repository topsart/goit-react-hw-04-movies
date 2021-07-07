import React, { Component } from 'react';
import styles from './Reviews.module.css';
import { fetchReviews } from '../../services/movies-api';

class Reviews extends Component {
	state = {
		reviews: [],
		error: null,
	};

	async componentDidMount() {
		this.setState({ error: null });
		const { movieId } = this.props.match.params;

		fetchReviews(movieId)
			.then(reviews => {
				this.setState({ reviews });
			})
			.catch(error => this.setState({ error }));
	}

	render() {
		return (
			<div>
				<ul className={styles.ReviewsList}>
					{this.state.reviews.map(({ id, author, content }) => (
						<li className={styles.ReviewsItem} key={id}>
							<h3 className={styles.ReviewsTitle}>Author: {author}</h3>
							<p className={styles.ReviewsInfo}>{content}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Reviews;
