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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const InitialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: UsersType = InitialState, action: DispatchActionType): UsersType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.userId
                        ? { ...user, followed: true }
                        : user
                )
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.userId
                        ? { ...user, followed: false }
                        : user
                )
            }

        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }

        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.page
            }

        case 'SET-TOTAL-USER-COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }

        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
}

export type DispatchActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUserCountACType
    | SetIsFetchingACType

export type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) =>
    ({ type: 'FOLLOW', userId }) as const

export type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) =>
    ({ type: 'UNFOLLOW', userId }) as const

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) =>
    ({ type: 'SET-USERS', users }) as const

export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (page: number) =>
    ({ type: 'SET-CURRENT-PAGE', page }) as const

export type SetTotalUserCountACType = ReturnType<typeof setTotalUserCountAC>
export const setTotalUserCountAC = (count: number) =>
    ({ type: 'SET-TOTAL-USER-COUNT', count }) as const

export type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export const setIsFetchingAC = (isFetching: boolean) =>
    ({ type: 'TOGGLE-IS-FETCHING', isFetching }) as const