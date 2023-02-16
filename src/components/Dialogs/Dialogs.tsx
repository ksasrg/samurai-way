import React from 'react';
import { NavLink } from 'react-router-dom';
import { dialogsType, messagesPageType, messagesType } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

type DialogsPropsType = {
  dialogsData: messagesPageType
}


const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.dialogsData.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)
  const messagesElements = props.dialogsData.messages.map(el => <Message message={el.message} />)

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