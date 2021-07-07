import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './MovieList.module.css';
import MoviePreview from '../MoviePreview/MoviePreview';

const MovieList = ({ movies }) => {
	return (
		<ul className={styles.MovieGallery}>
			{movies.map(({ id, poster_path, original_title }) => (
				<li key={id} className={styles.MovieGalleryItem}>
					<NavLink to={`/movies/${id}`}>
						<MoviePreview
							poster_path={poster_path}
							original_title={original_title}
						/>
					</NavLink>
				</li>
			))}
		</ul>
	);
};

MovieList.propTypes = {
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			original_title: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default MovieList;
