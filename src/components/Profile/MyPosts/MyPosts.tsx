import React from 'react';
import { postsDataType } from '../../../redux/store_old';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsPropsType = {
  posts: postsDataType[]
  newPostText: string
  updateNewPostText: (text: string) => void
  addPost: ()=> void
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

  const onAddPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    if (newPostElement.current) {
      props.updateNewPostText(newPostElement.current.value)
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
        <button onClick={onAddPost} >Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;