import { Dispatch } from "redux"
import { v1 } from "uuid"
import { profileAPI, usersAPI } from "../api/api"

export type postsDataType = {
    id: string
    message: string
    likesCount: number
}

// export type profilePageType = {
//     posts: postsDataType[]
//     newPostText: string
// }

export type profilePageType = typeof InitialState
export type profileType = typeof InitialState.profile

const InitialState = {
    posts: [
        { id: '1', message: 'Post1', likesCount: 10 },
        { id: '2', message: 'Post2', likesCount: 9 },
        // { id: 3, message: 'Post3', likesCount: 12 },
        // { id: 4, message: 'Post4', likesCount: 13 },
        // { id: 5, message: 'Post5', likesCount: 14 },
        // { id: 6, message: 'Post6', likesCount: 15 },
        // { id: 7, message: 'Post7', likesCount: 106 },
    ] as postsDataType[],
    newPostText: 'new post',
    profile: {
        userId: '',
        aboutMe: '',
        fullName: '',
        photos: {
            small: ''
        },

    },
    status: '',
}

export const profileReducer = (profileState: profilePageType = InitialState, action: DispatchActionType): profilePageType => {

    switch (action.type) {

        case 'ADD-POST':
            return {
                ...profileState,
                posts: [
                    ...profileState.posts,
                    {
                        id: v1(),
                        message: profileState.newPostText,
                        likesCount: 0,
                    }
                ],
                newPostText: '',
            }

        case 'UPDATE-NEW-POST-TEXT':
            return { ...profileState, newPostText: action.newText }

        case 'SET-USER-PROFILE':
            return { ...profileState, profile: action.profile }

        case "SET-STATUS":
            return {
                ...profileState,
                status: action.status
            }

        default:
            return profileState
    }
}

export type DispatchActionType = AddPostActionType
    | UpdateNewPostTextAction | SetUserProfileAction
    | setStatusAction


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () =>
    ({ type: 'ADD-POST', }) as const

export type UpdateNewPostTextAction = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (newText: string) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText }) as const

export type SetUserProfileAction = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: profileType) =>
    ({ type: 'SET-USER-PROFILE', profile }) as const

export type setStatusAction = ReturnType<typeof setStatus>
export const setStatus = (status: string) =>
    ({ type: 'SET-STATUS', status }) as const


export const getUserProfile = (userId: number) =>
    (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }

export const getStatus = (userId: number) =>
    (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(status => {
                dispatch(setStatus(status))
            })
    }

export const updateStatus = (status: string) =>
    (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }

            })
    }
