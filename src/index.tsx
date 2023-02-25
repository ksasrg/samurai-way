import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, state, stateType, subcribe, updateNewPostText } from './redux/state';
import './index.css'



export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}


rerenderEntireTree()

subcribe(rerenderEntireTree)

