import { UserType, UsersType } from "./users-reducer"

// export type AuthState = typeof InitialState

export type AuthState = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const InitialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

export const authReducer = (state: AuthState = InitialState, action: UserAuthDispatchActionType): AuthState => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export type UserAuthDispatchActionType = SetAuthUserDataACType



export type SetAuthUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) =>
    ({ type: 'SET-USER-DATA', data: { userId, email, login } }) as const
