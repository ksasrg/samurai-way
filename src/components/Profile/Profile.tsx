import React from 'react';
import { profilePageType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
  profilePage: profilePageType
  addPost: () => void
  updateNewPostText: (newText: string) => void
}



const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};



export default Profile;