import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { RootReducerType } from '../../redux/redux-store';
import Dialogs from './Dialogs';



// export const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           const state: RootReducerType = store.getState()

//           const textareaHandler = (newMessageText: string) => {
//             store.dispatch(updateNewMessageActionCreator(newMessageText))
//           }

//           const sendMessage = () => {
//             store.dispatch(sendMessageActionCreator())
//           }

//           return (
//             <Dialogs
//               dialogsData={state.messagesPage}
//               sendMessage={sendMessage}
//               updateNewMessage={textareaHandler}
//             />
//           )
//         }
//       }
//     </StoreContext.Consumer>
//   )
// };

const mapStateToProps = (state: RootReducerType) => {
  return {
    dialogsData: state.messagesPage
  }
}

const mapDispatchToProps = (dispatch: any) => { //// ANY !!!!!! ***********
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
