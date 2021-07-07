import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';
import { fetchMovieDetails } from '../../services/movies-api';
import defaultMovieImg from '../../assets/img/no-image-large.jpg';
import { BASE_IMAGE_URL } from '../../links';

class MovieDetailsPage extends Component {
	state = {
		title: '',
		vote_average: null,
		overview: '',
		genres: [],
		poster_path: '',
		error: null,
	};

	async componentDidMount() {
		this.setState({ error: null });
		const { movieId } = this.props.match.params;

		fetchMovieDetails(movieId)
			.then(movies => {
				this.setState({ ...movies });
			})
			.catch(error => this.setState({ error }));
	}

	render() {
		const { match } = this.props;
		const { poster_path, title, vote_average, overview, genres } = this.state;

		return (
			<div className={styles.MovieDetailsPage}>
				<div className={styles.MovieDetailsPageWrapper}>
					<img
						src={
							poster_path
								? `${BASE_IMAGE_URL}/w500/${poster_path}`
								: defaultMovieImg
						}
						alt=""
						className={styles.MovieDetailsPageWrapperImage}
					/>
					<div className={styles.MovieDetailsPageWrapperInfo}>
						<h1 className={styles.MovieDetailsPageWrapperInfoTitle}>{title}</h1>
						<h2 className={styles.MovieDetailsPageWrapperInfoPassTitle}>
							User Score
						</h2>
						<p className={styles.MovieDetailsPageWrapperInfoPassTitleInfo}>
							{vote_average}
						</p>
						<h2 className={styles.MovieDetailsPageWrapperInfoPassTitle}>
							Overview
						</h2>
						<p className={styles.MovieDetailsPageWrapperInfoPassTitleInfo}>
							{overview}
						</p>
						<h2 className={styles.MovieDetailsPageWrapperInfoPassTitle}>
							Genres
						</h2>
						<ul>
							{genres.map(({ id, name }) => (
								<li
									key={id}
									className={styles.MovieDetailsPageWrapperGenresInfo}
								>
									{name}
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
