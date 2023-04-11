import React from 'react';
import s from './ProfileInfo.module.css';
import back from './../../../images/seychelles.jpg'
import { profileType } from '../../../redux/profile-reducer';

type PropsType = {
  profile: profileType
}

const ProfileInfo = (props: PropsType) => {
  return (
    <div>
      <div>
        <img className={s.backimg} src={back} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.small} />
        <div>
          Name: {props.profile.fullName}
        </div>
        <div>
          About: {props.profile.aboutMe}
        </div>
        
      </div>
    </div>
  );
};

export default ProfileInfo;