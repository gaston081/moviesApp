
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../actions';
import styles from '../components/SearchBar.module.css'


export default function SearchBar({ movies }) {

    const dispatch = useDispatch()
    const [input, setInput] = useState("");
    const navigate = useNavigate();



    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        dispatch(getMovies(input))
        setInput("")
        navigate("/") 

    }
    
    return (

        <div className={movies?.length > 0 
        ? styles.grupo_nav 
        : styles.grupo}>
            <input className={styles.input} 
            placeholder='Buscar titulo'
            onChange={handleChange} 
            value={input}></input>
            <button className={styles.btn} onClick={handleClick}>BUSCAR</button>
        </div>

    )
}