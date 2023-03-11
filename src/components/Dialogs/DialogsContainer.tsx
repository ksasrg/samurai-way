import React from 'react';
import { Store } from 'redux';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { RootReducerType } from '../../redux/redux-store';
import { StoreContext } from '../../StoreContext';
import Dialogs from './Dialogs';

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state: RootReducerType = store.getState()

          const textareaHandler = (newMessageText: string) => {
            store.dispatch(updateNewMessageActionCreator(newMessageText))
          }

          const sendMessage = () => {
            store.dispatch(sendMessageActionCreator())
          }

          return (
            <Dialogs
              dialogsData={state.messagesPage}
              sendMessage={sendMessage}
              updateNewMessage={textareaHandler}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
};
