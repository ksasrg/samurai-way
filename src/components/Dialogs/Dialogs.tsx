import React from 'react';
import s from './Dialogs.module.css'

type DialogsPropsType = {

}

const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          ABC
        </div>
        <div className={s.dialog + ' ' + s.active}>
          BCD
        </div>
        <div className={s.dialog}>
          CDE
        </div>
        <div className={s.dialog}>
          DEF
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