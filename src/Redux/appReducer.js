import { authUser } from "./authReducer";

const INITIALIZATION = 'INITIALIZATION';

let undefiendstore = {

    initialization: false
}


const appReducer = (state = undefiendstore, action) => {
    switch (action.type) {
        case INITIALIZATION:
            debugger
            return {
                ...state,
                initialization: true
            }
        default:
            return state;
    }
}

export const initializationAction = () => {
    debugger
    return { type: INITIALIZATION }
}

export const initializationProgress = () => {

    return (dispatch) => {

        let promise = dispatch(authUser());
        // Promise.all([promise])
        promise.then(() => { dispatch(initializationAction()) })
    }
}

export default appReducer;