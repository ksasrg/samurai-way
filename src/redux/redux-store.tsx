import { combineReducers, createStore, EmptyObject, Store } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

export type AddPostActionType = { type: 'ADD-POST' }
export type UpdateNewPostTextAction = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
export type UpdateNewMessageTextAction = { type: 'UPDATE-NEW-MESSAGE-BODY', newMessageText: string }
export type SendMessageActionType = { type: 'SEND-MESSAGE' }

export type DispatchActionType = AddPostActionType | UpdateNewPostTextAction
    | UpdateNewMessageTextAction | SendMessageActionType

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
})

export type RootReducerType = ReturnType<typeof reducers>

export const store = createStore(reducers)


