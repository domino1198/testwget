import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {SET_IS_AUTH, SET_USER_DATA, TOGGLE_IS_FETCHING} from "./types";



let initialState = {
    user: {},
    isAuth: false,
    isFetching: false,
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, user: action.user, isAuth: action.isAuth};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SET_IS_AUTH:
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    };
};

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setAuthUserData = (user, isAuth) => ({type: SET_USER_DATA, user, isAuth});
export const setAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});


export const getAuthUserData = () => async (dispatch) => {
    await authAPI.getUser()
        .then(response => {
            console.log("me")
            console.log(response)
            dispatch(setAuthUserData(response.data.result.user, true));
        });
        
};

export const login = (email, password) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    await authAPI.login(email, password)
        .then(response => {
            if (!response.data.error) {

                localStorage.setItem('auth_token', response.data.token);
                dispatch(getAuthUserData());
                dispatch(toggleIsFetching(false));
            } else {
                dispatch(toggleIsFetching(false));
                dispatch(stopSubmit("login", {_error: response.data.error.message}));
            }
        });
}


export const logOut = () => (dispatch) =>{
  localStorage.removeItem('auth_token');
  dispatch(setAuth(false));
};

export default userReducer;

