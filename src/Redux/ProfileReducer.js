import { requestsApi } from "../api/requests";

const ADD_POST = 'ADD-POST';
const SETUSERPROFILE = 'SETUSERPROFILE';
const SETUSERSTATUS = 'SETUSERSTATUS';

let undefiendStore = {
    postData: [],
    newtext: "",
    user: null,
    status: ""
}

const ProfileReducer = (state = undefiendStore, action) => {

    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 5,
                message: action.text,
                count: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
                newtext: ""
            }
        case SETUSERPROFILE:
            return {
                ...state,
                user: action.user
            }
        case SETUSERSTATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = (text) => {
    return { type: ADD_POST, text };
}
export const setUserProfile = (user) => {
    return { type: SETUSERPROFILE, user };
}
export const setUserStatus = (status) => {
    return { type: SETUSERSTATUS, status };
}



export const getAuthUserProfile = (user) => {
    return (dispatch) => {
        requestsApi.getUsersProfile(user)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
    }
}

export const addPostTanck = (text) => {
    return (dispatch) => {
        dispatch(addPost(text));
    }
}

export const getUserStatusProfile = (user) => {
    return (dispatch) => {
        requestsApi.getStatusProfile(user)
            .then((data) => {
                dispatch(setUserStatus(data));
            });
    }
}
export const putUserStatusProfile = (status) => {
    return (dispatch) => {
        requestsApi.putStatusProfile(status)
            .then((response) => {
                if(response.resultCode === 0) {
                dispatch(setUserStatus(response.data));
                }
            });
    }
}

export default ProfileReducer;