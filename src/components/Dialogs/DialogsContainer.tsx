import { connect } from 'react-redux';
import { DispatchActionType, sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { StoreType } from '../../redux/redux-store';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { ComponentType } from 'react';

const mapStateToProps = (state: StoreType) => {
  return {
    dialogsData: state.messagesPage,
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

export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)
