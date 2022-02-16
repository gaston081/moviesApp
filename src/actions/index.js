
let apiKey = '6d022ee2'
//`http://www.omdbapi.com/?apikey=6d022ee2&i=${id}`

export function getMovieDetail(id) {
   return function(dispatch) {
       return fetch(`http://www.omdbapi.com/?apikey=6d022ee2&i=${id}`)
         .then(response => response.json())
         .then(json => {
           dispatch({ type: "GET_DETAILS", payload: json });
         });
     };
   }
 
 
export function getMovies(titulo) {
   return (dispatch) => {
     return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
       .then(response => response.json())
       .then(json => {console.log(json);
      
         dispatch({ type: "GET_MOVIES", movies: json });
       });
   };
 }
 
export function addMovieFavorite(payload){
   return { type: "ADD_MOVIE_FAVORITE", payload
}
} 

export function removeMovieFavorite(payload){
   return {
       type: "REMOVE_MOVIE_FAVORITE", payload
   }


}