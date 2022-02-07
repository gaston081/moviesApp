// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../reducer/";


// const store = createStore(
//     rootReducer,
//     compose (applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// export default store;


import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/";


const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );

  export default store;