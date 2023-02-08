import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogsPropsType = {

}

const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to='/dialogs/1'>ABC</NavLink>
        </div>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/2'>BCD</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>CDE</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialogs/4'>DEF</NavLink>          
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>message 1</div>
        <div className={s.message}>message 2</div>
        <div className={s.message}>message 3</div>
      </div>
    </div>
  );
};

export default Dialogs;