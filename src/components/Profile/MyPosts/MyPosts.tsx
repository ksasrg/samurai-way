import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type postsDataType = {
  id: number
  message: string
  likesCount: number
}

const posts: postsDataType[] = [
  { id: 1, message: 'Post1', likesCount: 10 },
  { id: 2, message: 'Post2', likesCount: 9 },
  { id: 3, message: 'Post3', likesCount: 12 },
  { id: 4, message: 'Post4', likesCount: 13 },
  { id: 5, message: 'Post5', likesCount: 14 },
  { id: 6, message: 'Post6', likesCount: 15 },
  { id: 7, message: 'Post7', likesCount: 106 },
]

const postsElements =
  posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)

const MyPosts = () => {
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