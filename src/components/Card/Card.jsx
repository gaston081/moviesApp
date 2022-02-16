
import { Star, StarBorder } from "@mui/icons-material"
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addMovieFavorite, removeMovieFavorite } from "../../actions"
import styles from '../Card/Card.module.css'


export const Card = ({ title, poster, year, id }) => {


  const favoritesRedux = useSelector(state => state.moviesFavourites)

  const dispatch = useDispatch()


  let fav;

  favoritesRedux === undefined
    ? fav = false
    : fav = favoritesRedux.some(c => c.imdbID === id)




function onclickFav(e, id, fav) {
  e.preventDefault();
  dispatch(addMovieFavorite(id))


}

function onClickRemove(e, id, fav) {
  e.preventDefault();
  dispatch(removeMovieFavorite(id))


}



return (
  <>
    <div className={styles.container}>
      <FormGroup row>
        <FormControlLabel
          checked={fav}
          className={styles.icono}
          control={<Checkbox icon={<StarBorder color='primary' />} checkedIcon={<Star color='warning' />} name="checkedH" />}
          label=""
          onClick={fav ? (e) => onClickRemove(e, id) : (e) => onclickFav(e, id)}

        />
      </FormGroup>
      <Link to={"/MovieDetails/" + id}>
        <img className={styles.poster} src={poster} alt='imagen no encontrada' />
      </Link>
      <p style={{ "padding": "10px" }}>{title}</p>
      <p>año: {year}</p>

    </div>

  </>

)

}