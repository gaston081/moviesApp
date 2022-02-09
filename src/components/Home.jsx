
import React from "react"
import { useSelector } from "react-redux"
import styles from '../components/Home.module.css'
import { MovieContainer } from "./MovieContainer"
import SearchBar from "./SearchBar"


export default function Home() {

    const movies = useSelector(state=> state.moviesLoaded)

    return (
        <div className={styles.home}>
           {/*  < div className={styles.nav}>
                <Nav />
            </div> */}
             {!movies.length && <div className={styles.data}>
                <h1>Bienvenido a MoviesApp!</h1>
                <p>En esta aplicacion podes acceder a una base de datos con info detallada de miles de peliculas, tambien podes armar una lista de favoritos!
                    Probala! </p> 
                 </div>} 
           {!movies.length && <div className={styles.SearchContainer}>
              <SearchBar/>            
            </div>}
            <MovieContainer/>
           
            
        </div>
    )
}