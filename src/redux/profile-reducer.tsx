

export type postsDataType = {
    id: number
    message: string
    likesCount: number
}

export type profilePageType = {
    posts: postsDataType[]
    newPostText: string
}

export type AddPostActionType = { type: 'ADD-POST' }
export type UpdateNewPostTextAction = { type: 'UPDATE-NEW-POST-TEXT', newText: string }

export type DispatchActionType = AddPostActionType | UpdateNewPostTextAction


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const InitialState = {
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
}

export const profileReducer = (profileState: profilePageType = InitialState, action: DispatchActionType): profilePageType => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...profileState,
                posts: [
                    ...profileState.posts,
                    {
                        id: 5,
                        message: profileState.newPostText,
                        likesCount: 0,
                    }
                ],
                newPostText: '',
            }

        case UPDATE_NEW_POST_TEXT:
            return { ...profileState, newPostText: action.newText }

        default:
            return profileState
    }
}

export const addPostActionCreator = (): AddPostActionType =>
    ({ type: ADD_POST, })

export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextAction =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: newText })