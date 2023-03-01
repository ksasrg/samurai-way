import React from 'react';
import { AddPostActionType, DispatchActionType, postsDataType, profilePageType, stateType, UpdateNewPostTextAction } from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'



export const profileReducer = (profileState: profilePageType, action: DispatchActionType) => {

    switch (action.type) {

        case ADD_POST:
            const newPost: postsDataType = {
                id: 5,
                message: profileState.newPostText,
                likesCount: 0,
            }

            profileState.posts.push(newPost)
            profileState.newPostText = ''
            return profileState

        case UPDATE_NEW_POST_TEXT:
            action.newText !== null
                && (profileState.newPostText = action.newText)
            return profileState

        default:
            return profileState
    }

}

export const addPostActionCreator = (): AddPostActionType =>
    ({ type: ADD_POST, })

export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextAction =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: newText })