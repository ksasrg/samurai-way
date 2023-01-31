import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div><img width={'100%'} src="https://www.thoughtco.com/thmb/EXpjUAx2ZEgV64eKcsAsX7Ucl6w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages_482194715-56a1329e5f9b58b7d0bcf666.jpg" alt="" /></div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;