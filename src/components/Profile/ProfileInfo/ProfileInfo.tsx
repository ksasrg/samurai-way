import React from 'react';
import s from './ProfileInfo.module.css';
import back from './../../../images/seychelles.jpg'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.backimg} src={back} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;