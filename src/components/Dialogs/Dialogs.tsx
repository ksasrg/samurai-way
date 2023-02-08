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


const Message = (props: MessagePropsType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}


const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={'qwer'} id={1} />
        <DialogItem name={'asdf'} id={2} />
        <DialogItem name={'zxcv'} id={3} />
        <DialogItem name={'[poi'} id={4} />
        <DialogItem name={'lkjh'} id={5} />
        <DialogItem name={'mnbv'} id={6} />
      </div>
      <div className={s.messages}>
        <Message message={'message 1'} />
        <Message message={'message 2'} />
        <Message message={'message 3'} />
        <Message message={'message 4'} />
      </div>
    </div>
  );
};

export default Dialogs;