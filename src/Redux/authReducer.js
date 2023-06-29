import { stopSubmit } from "redux-form";
import { requestsApi } from "../api/requests";

const SETUSERDATA = 'SETUSERDATA';

let undefiendstore = {

    userid: null,
    login: null,
    email: null,
    isresultCode: false,
    isPreloader: false
}


const authReducer = (state = undefiendstore, action) => {
    switch (action.type) {
        case SETUSERDATA:
            debugger
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUserData = (userid, login, email, isresultCode) => {
    return { type: SETUSERDATA, payload: { userid, login, email, isresultCode} }
}

export const authUser = () => {
    return (dispatch) => {
        return requestsApi.getAuthUser()
            .then((data) => {
                
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    dispatch(setUserData(id, login, email, true));
                }
            });
    }
}

export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        requestsApi.login(email, password, rememberMe)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(authUser());
                }
                else {
                    let message = data.messages.length > 0 ? data.messages[0] : "error";
                    dispatch(stopSubmit('login', { _error: message }));
                }
            });
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        requestsApi.logout()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false));
                }
            });
    }
}

export default authReducer;