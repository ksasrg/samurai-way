import { Dispatch } from "redux"
import { authAPI } from "../api/api"

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
                // isAuth: false //debug
            }

        default:
            return state
    }
}

export type UserAuthDispatchActionType = SetAuthUserDataACType

export type SetAuthUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) =>
    ({ type: 'SET-USER-DATA', data: { userId, email, login } }) as const

export const getAuthUserData = () =>
    (dispatch: Dispatch) => {
        authAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const { id, email, login } = data.data
                    dispatch(setAuthUserData(id, email, login))
                    console.log(id, email, login); // debug
                }
            })
    }