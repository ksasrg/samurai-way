import React, { ChangeEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { messagesPageType, sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { DispatchActionType } from '../../redux/redux-store';
// import { dialogsType, DispatchActionType, messagesPageType, MessageType } from '../../redux/store';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

type DialogsPropsType = {
  dialogsData: messagesPageType
  dispatch: (action: DispatchActionType) => void
}


const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.dialogsData.dialogs.map(el =>
    <DialogItem
      key={el.id}
      name={el.name}
      id={el.id}
    />
  )

  const messagesElements = props.dialogsData.messages.map(el =>
    <Message
      key={el.id}
      message={el.message}
    />
  )

  const newMessageTextElement = React.createRef<HTMLTextAreaElement>()

  const textareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (newMessageTextElement.current) {
      props.dispatch(updateNewMessageActionCreator(newMessageTextElement.current.value))
    }
    // props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
  }

  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            ref={newMessageTextElement}
            onChange={textareaHandler}
            value={props.dialogsData.newMessageText}
          ></textarea>
        </div>

        <button onClick={sendMessage} >Send</button>
      </div>
    </div>
  );
};

export default Dialogs;