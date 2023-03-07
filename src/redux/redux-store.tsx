import { combineReducers, createStore, EmptyObject, Store } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { DispatchActionType, messagesPageType, profilePageType, StoreType } from "./store";

// export type ReduxStoreType = Store<StoreType & {
//     profileReducer: profilePageType;
//     dialogsReducer: messagesPageType;
// }, DispatchActionType>

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
})

export const store = createStore(reducers)


export type RootReducerType = ReturnType<typeof reducers>