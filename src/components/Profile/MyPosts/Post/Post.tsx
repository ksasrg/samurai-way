import React from 'react';
import s from './Post.module.css';


const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png" alt="" />
      Post 2
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;