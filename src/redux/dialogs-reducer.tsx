import React from 'react';
import { DispatchActionType, messagesPageType, MessageType, SendMessageActionType, stateType, UpdateNewMessageTextAction } from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (messagesState: messagesPageType, action: DispatchActionType) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            action.newMessageText !== null
                && (messagesState.newMessageText = action.newMessageText)
            return messagesState

        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: 23,
                message: messagesState.newMessageText
            }

            messagesState.messages.push(newMessage)
            messagesState.newMessageText = ''
            return messagesState

        default:
            return messagesState

    }
}

export const updateNewMessageActionCreator = (newMessageText: string): UpdateNewMessageTextAction =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageText: newMessageText })

export const sendMessageActionCreator = (): SendMessageActionType =>
    ({ type: SEND_MESSAGE, })