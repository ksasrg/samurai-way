import React from 'react';
import { Store } from 'redux';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { RootReducerType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsPropsType = {
  store: Store
}

export const DialogsContainer = (props: DialogsPropsType) => {

  const state: RootReducerType = props.store.getState()

  const textareaHandler = (newMessageText: string) => {
    props.store.dispatch(updateNewMessageActionCreator(newMessageText))
  }

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator())
  }

  return (
    <Dialogs
      dialogsData={state.messagesPage}
      sendMessage={sendMessage}
      updateNewMessage={textareaHandler}
    />
  );
};
