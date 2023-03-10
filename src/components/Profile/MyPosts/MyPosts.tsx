import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { DispatchActionType } from '../../../redux/redux-store';
import { postsDataType } from '../../../redux/store_old';
// import { DispatchActionType, postsDataType } from '../../../redux/store';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsPropsType = {
  posts: postsDataType[]
  newPostText: string
  dispatch: (action: DispatchActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

  const postsElements =
    props.posts.map(el =>
      <Post
        key={el.id}
        message={el.message}
        likesCount={el.likesCount}
      />)

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
    if (newPostElement.current) {
      props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <button onClick={addPost} >Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;