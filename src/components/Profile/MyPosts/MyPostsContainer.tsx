import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, DispatchActionType, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { StoreType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

const mapStateToProps = (state: StoreType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch: (action: DispatchActionType) => void) => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)