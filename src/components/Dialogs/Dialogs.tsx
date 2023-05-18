import React from 'react';
import { messagesPageType } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../FormControls/FormControls';
import { requiredField } from '../../utils/validators';

type DialogsPropsType = {
  dialogsData: messagesPageType
  sendMessage: (newMessageText: string) => void
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

  const onSubmit = (formData: any) => {
    props.sendMessage(formData.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={onSubmit} />

      </div>
    </div>
  );
};

const AddMessageForm = (props: any) => {
  return <form onSubmit={props.handleSubmit}>
    <Field component={Textarea} name='newMessageBody' validate={[requiredField]}/>
    <button >Send</button>
  </form>
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;