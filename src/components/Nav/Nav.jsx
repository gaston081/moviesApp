import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import moviesLogo from '../../ImagesLogo/moviesLogo.png'


import SearchBar from '../SearchBar';
import { useSelector } from 'react-redux';

export default function NavBar() {

    const movies = useSelector(state => state.moviesLoaded)
    console.log(movies)


    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <img src={moviesLogo} alt="not found"></img>
            </div>
            {movies.length > 1  && 
            <div>
                <SearchBar movies={movies} />
            </div>}
            <nav className={styles.nav}>
                <ul className={styles.list} >
                    <li><NavLink exact to="/" className={styles.item}>Home</NavLink></li>
                    <li> <NavLink to="/favorites" className={styles.item} >Favoritas</NavLink></li>
                    <li><NavLink exact to="/" className={styles.item}>About</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}