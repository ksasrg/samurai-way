import React from 'react';
import { postsDataType } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsPropsType = {
  posts: postsDataType[]
  addPost: (message: string) => void
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
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value);
      newPostElement.current.value = ''
    }


  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} ></textarea>
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