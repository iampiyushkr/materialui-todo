import { combineReducers, createStore, applyMiddleware, compose } from "redux";
///import { authreducer } from "../auth/reducer";
import { reducer } from "../todos/reducers";

// const rootReducer = combineReducers({  //redux liberary
//     auth: authreducer,
//     app: reducer
// })


const customMiddleware = store => next => action => {
    return typeof action === "function" ? action(store.dispatch, store.getState) : next(action)
}


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(customMiddleware),
);

export const store = createStore(
    reducer,
    enhancer)

