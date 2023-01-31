import React from 'react';
import s from './Post.module.css';

type PostType = {
  message: string
}


const Post = (props: PostType) => {
  return (
    <div className={s.item}>
      <img src="avatar.webp" alt="" />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;