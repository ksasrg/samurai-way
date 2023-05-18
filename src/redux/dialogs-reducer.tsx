import { v1 } from 'uuid';

export type MessageType = {
    id: string
    message: string
}

export type dialogsType = {
    id: number
    name: string
}

export type DispatchActionType = SendMessageActionType

const InitialState = {
    dialogs: [
        { id: 1, name: 'Name1' },
        { id: 2, name: 'Name2' },
        { id: 3, name: 'Name3' },
        { id: 4, name: 'Name4' },
        { id: 5, name: 'Name5' },
        { id: 6, name: 'Name6' },
        { id: 7, name: 'Name7' },
    ],
    messages: [
        { id: v1(), message: 'Message1' },
        { id: v1(), message: 'Message2' },
        { id: v1(), message: 'Message3' },
        { id: v1(), message: 'Message4' },
        { id: v1(), message: 'Message5' },
        { id: v1(), message: 'Message6' },
        { id: v1(), message: 'Message7' },
    ],
}

export type messagesPageType = typeof InitialState

export const dialogsReducer = (messagesState: messagesPageType = InitialState, action: DispatchActionType): messagesPageType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            return {
                ...messagesState,
                messages: [
                    ...messagesState.messages,
                    {
                        id: v1(),
                        message: action.newMessageText
                    }
                ]
            }

        default:
            return messagesState

    }
}

export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = (newMessageText: string) =>
    ({ type: 'SEND-MESSAGE', newMessageText } as const) 