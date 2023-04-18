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
    isFollowingInProgress: boolean
    followingInProgress: number[]
}

const InitialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: false,
    followingInProgress: []
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

        case 'TOGGLE-FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
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
    | ToggleFollowingInProgressACType

export type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) =>
    ({ type: 'FOLLOW', userId }) as const

export type UnfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) =>
    ({ type: 'UNFOLLOW', userId }) as const

export type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) =>
    ({ type: 'SET-USERS', users }) as const

export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) =>
    ({ type: 'SET-CURRENT-PAGE', page }) as const

export type SetTotalUserCountACType = ReturnType<typeof setTotalUserCount>
export const setTotalUserCount = (count: number) =>
    ({ type: 'SET-TOTAL-USER-COUNT', count }) as const

export type SetIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) =>
    ({ type: 'TOGGLE-IS-FETCHING', isFetching }) as const

export type ToggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (isFollowingInProgress: boolean, userId: number) =>
    ({ type: 'TOGGLE-FOLLOWING_PROGRESS', isFollowingInProgress, userId }) as const