import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, DispatchActionType } from '../../../redux/profile-reducer';
import { StoreType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

const mapStateToProps = (state: StoreType) => {
  return {
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = (dispatch: (action: DispatchActionType) => void) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)