import { connect } from 'react-redux';
import { DispatchActionType, sendMessageAC} from '../../redux/dialogs-reducer';
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
    sendMessage: (newMessageText: string) => {
      dispatch(sendMessageAC(newMessageText))
    },
  }
}

export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)
