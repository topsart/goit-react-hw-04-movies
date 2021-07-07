import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import routes from '../../routes';

const AppBar = () => (
	<nav className={styles.nav}>
		<NavLink
			exact
			to={routes.home}
			className={styles.link}
			activeClassName={styles.activeLink}
		>
			Home
		</NavLink>
		<NavLink
			to={routes.movies}
			className={styles.link}
			activeClassName={styles.activeLink}
		>
			Movies
		</NavLink>
	</nav>
);

export default AppBar;
