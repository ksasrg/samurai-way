export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    location: LocationType
}

export type UsersType = {
    users: UserType[]
}

export type FollowACType = { type: 'FOLLOW', userId: number }
export type UnfollowACType = { type: 'UNFOLLOW', userId: number }
export type SetUsersACType = { type: 'SET-USERS', users: UserType[] }

export type DispatchActionType = FollowACType | UnfollowACType | SetUsersACType

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

const InitialState: UsersType = {
    users: [
        // { id: 1, photoURL: 'avatar.webp', followed: true, fullName: 'Dmitry', status: 'online', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoURL: 'avatar.webp', followed: false, fullName: 'Alexey', status: 'offline', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 3, photoURL: 'avatar.webp', followed: true, fullName: 'Sasha', status: 'home', location: { city: 'Kiev', country: 'Ukraine' } },
    ],
}

export const usersReducer = (state: UsersType = InitialState, action: DispatchActionType): UsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.userId
                        ? { ...user, followed: true }
                        : user
                )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.userId
                        ? { ...user, followed: false }
                        : user
                )
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followAC = (userId: number): FollowACType =>
    ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number): UnfollowACType =>
    ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: UserType[]): SetUsersACType =>
    ({ type: SET_USERS, users })

