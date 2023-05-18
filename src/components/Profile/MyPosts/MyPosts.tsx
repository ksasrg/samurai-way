import React from 'react';
import { postsDataType } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators';
import { Textarea } from '../../FormControls/FormControls';

type MyPostsPropsType = {
  posts: postsDataType[]
  addPost: (newPostText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

  const postsElements =
    props.posts.map(el =>
      <Post
        key={el.id}
        message={el.message}
        likesCount={el.likesCount}
      />)

  const onAddPost = (formData: any) => {
    props.addPost(formData.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: any) => {
  return <form onSubmit={props.handleSubmit} >
    <div>
      <Field component={Textarea} name='newPostText' validate={[requiredField, maxLength10]} />
    </div>
    <button>Add post</button>
  </form>
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;