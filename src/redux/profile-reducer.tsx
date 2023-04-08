import { v1 } from "uuid"

export type postsDataType = {
    id: string
    message: string
    likesCount: number
}

export type profilePageType = {
    posts: postsDataType[]
    newPostText: string
}


const InitialState = {
    posts: [
        { id: '1', message: 'Post1', likesCount: 10 },
        { id: '2', message: 'Post2', likesCount: 9 },
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

        default:
            return profileState
    }
}

export type DispatchActionType = AddPostActionType | UpdateNewPostTextAction

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () =>
    ({ type: 'ADD-POST', }) as const

export type UpdateNewPostTextAction = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (newText: string) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText }) as const


