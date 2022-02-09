
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../components/Favorites.module.css'
import { Card } from '../components/Card/Card'



export const Favorites = () => {

  const favs = useSelector(state => state.moviesFavourites)

  return (

    <div className={styles.body}>
      {favs?.length > 0 ?
        <div className={styles.container}>
          {favs.map(mov => <Card
            id={mov.imdbID}
            key={mov.imdbID}
            title={mov.Title}
            poster={mov.Poster}
            year={mov.Year}
          />)}
        </div>
        : <div className={styles.containerEmpty}>
          <h1 >No hay favoritos guardados</h1>
        </div>
      }
    </div>

  )


}