import React from 'react';
import { Store } from 'redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { RootReducerType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

type MyPostsPropsType = {
  store: Store
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

  const state: RootReducerType = props.store.getState()

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text: string) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
