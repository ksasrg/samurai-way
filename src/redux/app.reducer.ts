
const initialState = {
    isInitialized: false
}

type AppState = typeof initialState

export const appReducer = (state = initialState, action: AppActionsType): AppState => {
    switch (action.type) {

        case 'SET-INITIALIZED':
            return { ...state, isInitialized: action.isInitialized }

        default:
            return state
    }
}

type AppActionsType = SetInitialisedActionType

export type SetInitialisedActionType = ReturnType<typeof setInitialisedAC>
export const setInitialisedAC = (isInitialized: boolean) => {
    return { type: 'SET-INITIALIZED', isInitialized } as const
}