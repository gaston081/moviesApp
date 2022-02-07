
import React, { useState } from "react"
import { useSelector } from "react-redux"
import styles from '../components/Home.module.css'
import Nav from '../components/Nav/Nav'
import { Card } from './Card/Card'
import { MovieContainer } from "./MovieContainer"
import SearchBar from "./SearchBar"


export default function Home() {

    const movies = useSelector(state=> state.moviesLoaded)

    return (
        <div className={styles.home}>
           {/*  < div className={styles.nav}>
                <Nav />
            </div> */}
           {!movies.length && <div className={styles.SearchContainer}>
              <SearchBar/>            
            </div>}
            <MovieContainer/>
           
        
        </div>
    )
}