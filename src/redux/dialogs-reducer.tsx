import React from 'react';

export type MessageType = {
    id: number
    message: string
}

export type dialogsType = {
    id: number
    name: string
}

export type messagesPageType = {
    dialogs: dialogsType[]
    messages: MessageType[]
    newMessageText: string
}

export type UpdateNewMessageTextAction = { type: 'UPDATE-NEW-MESSAGE-BODY', newMessageText: string }
export type SendMessageActionType = { type: 'SEND-MESSAGE' }

export type DispatchActionType = UpdateNewMessageTextAction | SendMessageActionType


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
        { id: 1, message: 'Message1' },
        { id: 2, message: 'Message2' },
        { id: 3, message: 'Message3' },
        { id: 4, message: 'Message4' },
        { id: 5, message: 'Message5' },
        { id: 6, message: 'Message6' },
        { id: 7, message: 'Message7' },
    ],
    newMessageText: ''
}

export const dialogsReducer = (messagesState: messagesPageType = InitialState, action: DispatchActionType): messagesPageType => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return { ...messagesState, newMessageText: action.newMessageText }

        case SEND_MESSAGE:
            return {
                ...messagesState,
                newMessageText: '',
                messages: [
                    ...messagesState.messages,
                    {
                        id: 23,
                        message: messagesState.newMessageText
                    }
                ]
            }

        default:
            return messagesState

    }
}

export const updateNewMessageActionCreator = (newMessageText: string): UpdateNewMessageTextAction =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageText: newMessageText })

export const sendMessageActionCreator = (): SendMessageActionType =>
    ({ type: SEND_MESSAGE, })