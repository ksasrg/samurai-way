import React from 'react';
import { connect } from 'react-redux';
import { DispatchActionType, sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { StoreType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

const mapStateToProps = (state: StoreType) => {
  return {
    dialogsData: state.messagesPage,
    isAuth: state.auth.isAuth
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
