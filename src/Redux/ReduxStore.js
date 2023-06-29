import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import SitebarReducer from "./SitebarReducer";
import UsersReducer from "./UsersReducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

let reducers = combineReducers(
    {
        profilePage: ProfileReducer,
        messagesPage: MessageReducer,
        sitebar: SitebarReducer,
        usersPage: UsersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunk));

export default store;