import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { profileType } from '../../redux/profile-reducer';

type PropsType ={
  profile: profileType
}

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

