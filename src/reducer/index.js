
const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetails: {}
};


function rootReducer(state = initialState, action) {



  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: [...action.movies?.Search]
    };
  }

  if (action.type === "GET_DETAILS") {
    return {
      ...state,
      movieDetails: action.payload
    };
  }

  if (action.type === "ADD_MOVIE_FAVORITE") {
    let newFav = state.moviesLoaded.find(mov => mov.imdbID === action.payload)
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.concat(newFav)
    }
  }
  if (action.type === "REMOVE_MOVIE_FAVORITE") {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.filter(movie => (movie.imdbID !== action.payload))
    }
  }

  return state;
}

export default rootReducer;