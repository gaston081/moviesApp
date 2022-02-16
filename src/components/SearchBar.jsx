
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../actions';
import Button from '@mui/material/Button';
import styles from '../components/SearchBar.module.css'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        background: 'rgb(170, 32, 32)',
        color: 'white',
        "&:hover": {
            backgroundColor: "rgba(11,60,69,1)"
        }
    }

});



export default function SearchBar({ movies }) {

    const classes = useStyles();
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
            <Button className={classes.root} variant='contained'
                onClick={handleClick} >Buscar</Button>
        </div>

    )
}