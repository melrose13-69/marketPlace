import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import productsReducer from "./products-reducer";
import { reducer as formReducer } from 'redux-form';
import sortProductsReducer from './sortProducts-reducer';
import compareReducer from './compare-reducer';


const reducers = combineReducers({
    products: productsReducer,
    sort: sortProductsReducer,
    compare: compareReducer,

    form : formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware( thunkMiddleware ) ));


window.store = store;

export default store;