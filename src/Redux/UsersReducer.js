import { requestsApi } from "../api/requests";

const FOLLOW = 'FOLLOW';
const NOTFOLLOW = 'NOT-FOLLOW';
const SETUSERS = 'SET-USERS';
const UPUSERS = 'UPUSERS';
// const PAGENUMBER = 'PAGE-NUMBER';
const PRELOADER = 'PRELOADER';
const DISEBLEDPROCCES = 'DISEBLEDPROCCES';

let undefiendstore = {

    users: [],
    isPreloader: false,
    disebledProcces: []
}


const UsersReducer = (state = undefiendstore, action) => {
    switch (action.type) {
        case NOTFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case SETUSERS:
            return {
                ...state,
                users: [...action.users]
            }
        case UPUSERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        // case PAGENUMBER: {
        //     return {
        //         ...state,
        //         pageNumberUsers: action.page + +1
        //     }
        // }
        case PRELOADER: {
            return {
                ...state,
                isPreloader: action.isPreloader
            }
        }
        case DISEBLEDPROCCES: {
            return {
                ...state,
                disebledProcces: action.isdisebledProcces
                    ? [...state.disebledProcces, action.id]
                    : [state.disebledProcces.filter(id => id != action.id)]
            }
        }
        default:
            return state;
    }
}

export const follow = (userid) => {
    return { type: FOLLOW, userid }
}
export const notFollow = (userid) => {
    return { type: NOTFOLLOW, userid }
}
export const setUsers = (users) => {
    return { type: SETUSERS, users }

}
export const upUsers = (users) => {
    return { type: UPUSERS, users }

}
// export const pageNumber = (page) => {
//     return { type: PAGENUMBER, page }
// }
export const setPreloader = (isPreloader) => {
    return { type: PRELOADER, isPreloader }
}
export const isDesebledProcces = (isdisebledProcces, id) => {
    return { type: DISEBLEDPROCCES, isdisebledProcces, id }
}


export const getUsers = (page) => {
    return (dispatch) => {
        dispatch(setPreloader(true));
        requestsApi.getUsers(page)
            .then((data) => {
                dispatch(setUsers(data.items));
                dispatch(setPreloader(false));
            });
    }
}
export const onclickGetUsers = (page) => {
    return (dispatch) => {
        dispatch(setPreloader(true));
        requestsApi.getUsers(page)
            .then((data) => {
                dispatch(upUsers(data.items));
                dispatch(setPreloader(false));
            });
    }
}
export const followUser = (userid) => {
    return (dispatch) => {
        dispatch(isDesebledProcces(true, userid));
        requestsApi.postFollow(userid)
            .then((data) => {
                if (data.resultCode == 0) {
                     dispatch(follow(userid)); }
                dispatch(isDesebledProcces(false, userid));
            })
    }
}
export const notFollowUser = (userid) => {
    return (dispatch) => {
        dispatch(isDesebledProcces(true, userid));
        requestsApi.postFollow(userid)
            .then((data) => {
                if (data.resultCode == 1) { dispatch(notFollow(userid)); }
                dispatch(isDesebledProcces(false, userid));
            })
    }
}

export default UsersReducer;