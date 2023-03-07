import React from 'react';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';

export type dialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type postsDataType = {
    id: number
    message: string
    likesCount: number
}

export type profilePageType = {
    posts: postsDataType[]
    newPostText: string
}

export type messagesPageType = {
    dialogs: dialogsType[]
    messages: MessageType[]
    newMessageText: string
}

export type stateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}

export type AddPostActionType = { type: 'ADD-POST' }
export type UpdateNewPostTextAction = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
export type UpdateNewMessageTextAction = { type: 'UPDATE-NEW-MESSAGE-BODY', newMessageText: string }
export type SendMessageActionType = { type: 'SEND-MESSAGE' }

export type DispatchActionType = AddPostActionType | UpdateNewPostTextAction
    | UpdateNewMessageTextAction | SendMessageActionType

export type StoreType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    getState: () => stateType
    subcribe: (observer: (state: stateType) => void) => void
    dispatch: (action: DispatchActionType) => void

}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Post1', likesCount: 10 },
                { id: 2, message: 'Post2', likesCount: 9 },
                // { id: 3, message: 'Post3', likesCount: 12 },
                // { id: 4, message: 'Post4', likesCount: 13 },
                // { id: 5, message: 'Post5', likesCount: 14 },
                // { id: 6, message: 'Post6', likesCount: 15 },
                // { id: 7, message: 'Post7', likesCount: 106 },
            ],
            newPostText: 'new post',
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Name1' },
                { id: 2, name: 'Name2' },
                { id: 3, name: 'Name3' },
                { id: 4, name: 'Name4' },
                { id: 5, name: 'Name5' },
                { id: 6, name: 'Name6' },
                { id: 7, name: 'Name7' },
            ],
            messages: [
                { id: 1, message: 'Message1' },
                { id: 2, message: 'Message2' },
                { id: 3, message: 'Message3' },
                { id: 4, message: 'Message4' },
                { id: 5, message: 'Message5' },
                { id: 6, message: 'Message6' },
                { id: 7, message: 'Message7' },
            ],
            newMessageText: ''
        }
    },
    _callSubscriber(state: stateType) { },
    getState() {
        return this._state
    },
    subcribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: DispatchActionType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    },
}






