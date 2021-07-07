import React, { Component } from 'react';
import styles from './Cast.module.css';
import { fetchCast } from '../../services/movies-api';
import defaultCastImg from '../../assets/img/defaultCastImg.jpg';
import { BASE_IMAGE_URL } from '../../links';

class Cast extends Component {
	state = {
		actors: [],
		error: null,
	};

	async componentDidMount() {
		this.setState({ error: null });
		const { movieId } = this.props.match.params;

		fetchCast(movieId)
			.then(actors => {
				this.setState({ actors });
			})
			.catch(error => this.setState({ error }));
	}

	render() {
		return (
			<div>
				<ul className={styles.CastGallery}>
					{this.state.actors.map(({ id, profile_path, name, character }) => (
						<li className={styles.CastGalleryItem} key={id}>
							<img
								className={styles.CastGalleryItemImage}
								src={
									profile_path
										? `${BASE_IMAGE_URL}/w500/${profile_path}`
										: defaultCastImg
								}
								alt=""
							/>
							<p className={styles.CastGalleryItemActorName}>{name}</p>
							<p className={styles.CastGalleryItemActorRole}>{character}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Cast;
