import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer} from "./reducer";
import {BasketReducer} from "./BasketReducer";
import {FavoriteReducer} from "./FavoriteReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorites: FavoriteReducer
}),composeWithDevTools(applyMiddleware(thunk)))