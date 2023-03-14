import React from 'react';
import { connect } from 'react-redux';
import { DispatchActionType, sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { RootReducerType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

const mapStateToProps = (state: RootReducerType) => {
  return {
    dialogsData: state.messagesPage
  }
}

const mapDispatchToProps = (dispatch: (action: DispatchActionType) => void) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
    updateNewMessage: (newMessageText: string) => {
      dispatch(updateNewMessageActionCreator(newMessageText))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
