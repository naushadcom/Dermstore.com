import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";
// const rootReducer = combineReducers({
//   productsofskinMedica:Reducer,
//   productsofbestsellers:Reducer,
//   productsofneocutis:Reducer,
//   productsoftrending:Reducer,
//   productsofarrival:Reducer,
//   productsofblog: Reducer,
// })

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(Reducer, enhancer);
export default store;