import { Dispatch } from "redux"
import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"
import { setInitialisedAC } from "./app.reducer"

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
            }

        default:
            return state
    }
}

export type UserAuthDispatchActionType = SetAuthUserDataACType

export type SetAuthUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) =>
    ({ type: 'SET-USER-DATA', data: { userId, email, login, isAuth } }) as const

export const getAuthUserData = () =>
    (dispatch: Dispatch) => {
        authAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const { id, email, login } = data.data
                    dispatch(setAuthUserData(id, email, login, true))

                    console.log(id, email, login); // debug
                }
            }).finally(() => {
                dispatch(setInitialisedAC(true))
            })
    }

export const loginTC = (email: string, password: string, rememberMe: boolean) =>
    (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {

                    dispatch(stopSubmit('login', { _error: data.data.messages }))
                }
            })
    }


export const logoutTC = () =>
    (dispatch: Dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setAuthUserData(0, '', '', false))
                }
            })
    }