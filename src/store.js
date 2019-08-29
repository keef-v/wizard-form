import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import { reducer as formReducer } from 'redux-form'


const initialState = {};

const middleware = [thunk];
const formReducers = {
    // ... your other reducers here ...
    form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(formReducers)

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
