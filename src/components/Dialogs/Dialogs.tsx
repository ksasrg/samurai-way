import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogsPropsType = {

}

type DialogItemPropsType = {
  name: string
  id: number
}

type MessagePropsType = {
  message: string
}

const DialogItem = (props: DialogItemPropsType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

type dialogsType = {
  id: number
  name: string
}

const dialogs: dialogsType[] = [
  { id: 1, name: 'Name1' },
  { id: 2, name: 'Name2' },
  { id: 3, name: 'Name3' },
  { id: 4, name: 'Name4' },
  { id: 5, name: 'Name5' },
  { id: 6, name: 'Name6' },
  { id: 7, name: 'Name7' },
]

type messagesType = {
  id: number
  message: string
}

const messages: messagesType[] = [
  { id: 1, message: 'Message1' },
  { id: 2, message: 'Message2' },
  { id: 3, message: 'Message3' },
  { id: 4, message: 'Message4' },
  { id: 5, message: 'Message5' },
  { id: 6, message: 'Message6' },
  { id: 7, message: 'Message7' },
]

const Message = (props: MessagePropsType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id} />)
const messagesElements = messages.map(el => <Message message={el.message} />)

const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;