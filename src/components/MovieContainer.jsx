import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../components/MovieContainer.module.css'
import { Card } from '../components/Card/Card'



export const MovieContainer = () => {

    const movies = useSelector((state) => state.moviesLoaded)
  
    
    return (
        <div className={styles.movieContainer}>
            {movies.map(mov => 
                <Card
                id={mov.imdbID}
                key={mov.imdbID}
                title={mov.Title}
                poster={mov.Poster}
                year={mov.Year} />
                )}
        </div>

    )
}