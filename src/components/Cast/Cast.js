import axios from 'axios';
import React, { Component } from 'react';
import styles from './Cast.module.css';

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
				<ul className={styles.CastGallery}>
					{this.state.actors.map(actor => (
						<li className={styles.CastGalleryItem} key={actor.id}>
							<img
								className={styles.CastGalleryItemImage}
								src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
								alt=""
							/>
							<p className={styles.CastGalleryItemActorName}>{actor.name}</p>
							<p className={styles.CastGalleryItemActorRole}>
								{actor.character}
							</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Cast;
