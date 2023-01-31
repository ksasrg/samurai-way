import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div><img className={s.backimg} src="ocean.webp" alt="" /></div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};



export default Profile;