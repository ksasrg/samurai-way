import React from 'react';
import { messagesPageType } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

type DialogsPropsType = {
  dialogsData: messagesPageType
  updateNewMessage: (newMessageText: string) => void
  sendMessage: () => void
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

  const textareaHandler = () => {
    if (newMessageTextElement.current) {
      props.updateNewMessage(newMessageTextElement.current.value)
    }
  }

  const sendMessage = () => {
    props.sendMessage()
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