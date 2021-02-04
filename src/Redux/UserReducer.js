import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    user: {},
    isAuth: false,
    isFetching: false

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, user:action.user, isAuth: true}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
};

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setAuthUserData = ( user, isAuth) => ({type: SET_USER_DATA, user, isAuth});
export const  getAuthUserData = (token) => (dispatch) => {
    authAPI.me(token)
        .then(response => {
                dispatch(setAuthUserData(response.data.result.user, true));
        });
};

export const login = (email, password) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.login(email, password)
        .then(response => {
            if (response.data.token !== undefined) {
                dispatch(toggleIsFetching(false));
                dispatch(getAuthUserData(response.data.token));
            } else {
                dispatch(toggleIsFetching(false));
                dispatch(stopSubmit("login",{_error: response.data.error.message}));
            }
        });

}

/*export const logout = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.logout()
        .then(response => {
            console.log(response);
            dispatch(toggleIsFetching(false));
                dispatch(setAuthUserData({}, false));

        });
}*/
export default userReducer;