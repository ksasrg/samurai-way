import React from 'react';
import { DispatchActionType } from '../../redux/redux-store';
import { profilePageType } from '../../redux/store_old';
// import { DispatchActionType, profilePageType } from '../../redux/store';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
  profilePage: profilePageType
  dispatch: (action: DispatchActionType) => void
}



const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};



export default Profile;