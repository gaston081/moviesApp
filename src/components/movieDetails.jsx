import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '../actions';
import styles from '../components/MovieDetails.module.css';


const MovieDetails = () => {

      const { id } = useParams()
      const dispatch = useDispatch()
      const detail = useSelector(state => state.movieDetails)

      useEffect(() => { dispatch(getMovieDetail(id)) }, [dispatch, id])

      const [loading, setLoading] = useState(true);

      setTimeout(() => {
            setLoading(false)
      }, 400);

      return (
            <div className={styles.body}>


                  {loading ? <div className={styles.spinner}></div>
                        : <div className={styles.container}>
                              <img className={styles.image} src={detail.Poster} alt="img not found" />
                              <div className={styles.data}>
                                    <h1>{detail?.Title}</h1>

                                    <article>{detail?.Plot}</article>
                                    <p>Año: {detail?.Year}</p>
                                    <p>Genero: {detail?.Genre}</p>
                                    <p>Director: {detail?.Director}</p>
                                    <p>Actores: {detail?.Actors}</p>
                                    {/* <p>Rating: {detail.Ratings[0].Value}</p> */}
                              </div>
                        </div>
                  }
            </div>);
};
export default MovieDetails;
