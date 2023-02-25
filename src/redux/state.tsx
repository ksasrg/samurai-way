import React from 'react';
// import { rerenderEntireTree } from '..';



export type dialogsType = {
    id: number
    name: string
}

export type messagesType = {
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
    messages: messagesType[]
}

export type stateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}

// const dialogs: dialogsType[] = [
//     { id: 1, name: 'Name1' },
//     { id: 2, name: 'Name2' },
//     { id: 3, name: 'Name3' },
//     { id: 4, name: 'Name4' },
//     { id: 5, name: 'Name5' },
//     { id: 6, name: 'Name6' },
//     { id: 7, name: 'Name7' },
// ]

// const messages: messagesType[] = [
//     { id: 1, message: 'Message1' },
//     { id: 2, message: 'Message2' },
//     { id: 3, message: 'Message3' },
//     { id: 4, message: 'Message4' },
//     { id: 5, message: 'Message5' },
//     { id: 6, message: 'Message6' },
//     { id: 7, message: 'Message7' },
// ]

// const posts: postsDataType[] = [
//     { id: 1, message: 'Post1', likesCount: 10 },
//     { id: 2, message: 'Post2', likesCount: 9 },
//     // { id: 3, message: 'Post3', likesCount: 12 },
//     // { id: 4, message: 'Post4', likesCount: 13 },
//     // { id: 5, message: 'Post5', likesCount: 14 },
//     // { id: 6, message: 'Post6', likesCount: 15 },
//     // { id: 7, message: 'Post7', likesCount: 106 },
// ]

// export const state: stateType = {
//     profilePage: {
//         posts: posts,
//         newPostText: 'new post'
//     },
//     messagesPage: {
//         dialogs: dialogs,
//         messages: messages,
//     }
// }

// let rerenderEntireTree = (state: stateType) => { }

// export const addPost = () => {
//     const newPost: postsDataType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0,
//     }

//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }

// export const subcribe = (observer: (state: stateType) => void) => {
//     rerenderEntireTree = observer
// }

export type StoreType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: (state: stateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subcribe: (observer: (state: stateType) => void) => void
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
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: stateType) { },
    addPost() {
        const newPost: postsDataType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subcribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },
}
