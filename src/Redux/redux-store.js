import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./UserReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    auth: userReducer,
    form: formReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
