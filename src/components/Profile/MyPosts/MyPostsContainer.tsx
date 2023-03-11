import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { RootReducerType } from '../../../redux/redux-store';
import { StoreContext } from '../../../StoreContext';
import MyPosts from './MyPosts';

export const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer >
      {
        (store) => {
          const state: RootReducerType = store.getState()

          const addPost = () => {
            store.dispatch(addPostActionCreator());
          }

          const onPostChange = (text: string) => {
            store.dispatch(updateNewPostTextActionCreator(text))
          }

          return (
            <MyPosts
              updateNewPostText={onPostChange}
              addPost={addPost}
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  );
};
