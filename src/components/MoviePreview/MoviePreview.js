import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePreview.module.css';
import defaultMovieImg from '../../assets/img/no-image-large.jpg';
import { BASE_IMAGE_URL } from '../../links';

const MoviePreview = ({ poster_path, original_title }) => {
	return (
		<>
			<img
				src={
					poster_path
						? `${BASE_IMAGE_URL}/w500/${poster_path}`
						: defaultMovieImg
				}
				alt={original_title}
				className={styles.MovieGalleryItemImage}
			/>
			<p className={styles.MovieGalleryItemTitle}>{original_title}</p>
		</>
	);
};

MoviePreview.defaultProps = {
	poster_path: '',
};

MoviePreview.propTypes = {
	poster_path: PropTypes.string,
	original_title: PropTypes.string.isRequired,
};

export default MoviePreview;
