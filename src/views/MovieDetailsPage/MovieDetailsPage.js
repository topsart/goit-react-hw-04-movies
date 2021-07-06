import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';

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
			<div className={styles.MovieDetailsPage}>
				<div className={styles.MovieDetailsPageWrapper}>
					<img
						src={`https://image.tmdb.org/t/p/w500/${this.state.poster_path}`}
						alt=""
						className={styles.MovieDetailsPageWrapperImage}
					/>
					<div className={styles.MovieDetailsPageWrapperInfo}>
						<h1 className={styles.MovieDetailsPageWrapperInfoTitle}>
							{this.state.title}
						</h1>
						<h2 className={styles.MovieDetailsPageWrapperInfoPassTitle}>
							User Score
						</h2>
						<p className={styles.MovieDetailsPageWrapperInfoPassTitleInfo}>
							{this.state.vote_average}
						</p>
						<h2 className={styles.MovieDetailsPageWrapperInfoPassTitle}>
							Overview
						</h2>
						<p className={styles.MovieDetailsPageWrapperInfoPassTitleInfo}>
							{this.state.overview}
						</p>
						<h2 className={styles.MovieDetailsPageWrapperInfoPassTitle}>
							Genres
						</h2>
						<ul>
							{this.state.genres.map(genre => (
								<li
									key={genre.id}
									className={styles.MovieDetailsPageWrapperGenresInfo}
								>
									{genre.name}
								</li>
							))}
						</ul>
					</div>
				</div>
				<ul className={styles.MovieDetailsPageInfo}>
					<li className={styles.MovieDetailsPageInfoItem}>
						<NavLink
							className={styles.MovieDetailsPageInfoItemLink}
							to={`${match.url}/cast`}
						>
							Cast
						</NavLink>
					</li>
					<li className={styles.MovieDetailsPageInfoItem}>
						<NavLink
							className={styles.MovieDetailsPageInfoItemLink}
							to={`${match.url}/reviews`}
						>
							Reviews
						</NavLink>
					</li>
				</ul>

				<Route path={`${match.path}/cast`} component={Cast} />
				<Route path={`${match.path}/reviews`} component={Reviews} />
			</div>
		);
	}
}

export default MovieDetailsPage;
