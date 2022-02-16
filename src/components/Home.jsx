
import React from "react"
import { useSelector } from "react-redux"
import styles from '../components/Home.module.css'
import { MovieContainer } from "./MovieContainer"
import SearchBar from "./SearchBar"


export default function Home() {

    const movies = useSelector(state => state.moviesLoaded)

    return (
        <div className={styles.home}>

            {!movies.length && <div className={styles.data}>
                <div>Bienvenido a MoviesApp!</div>
                <br />
                <p>Hola! Mi nombre es Gaston Ripamonti, soy Desarrollador Full Stack.
                    <br />
                    En esta aplicacion podes acceder a una base de datos con info detallada de miles de peliculas, tambien podes armar una lista de favoritos.
                    El proyecto fue desarrollado utilizando React, Redux, y los estilos fueron aplicados utilizando CSS y Material UI.
                    <br />
                    Probala! </p>
            </div>}
            {!movies.length && <div className={styles.SearchContainer}>
                <SearchBar />
            </div>}
            <MovieContainer />


        </div>
    )
}