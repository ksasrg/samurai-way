import React from 'react';
import { profilePageType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
  postsData: profilePageType
  addPost: (message: string) => void
}



const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      posts={props.postsData.posts}
      addPost={props.addPost}
      />
    </div>
  );
};



export default Profile;