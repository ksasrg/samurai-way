import React from 'react';
import { postsDataType } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsPropsType ={
  posts: postsDataType[]
}

const MyPosts = (props: MyPostsPropsType) => {

  const postsElements =
    props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;