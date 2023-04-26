import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type StoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store

