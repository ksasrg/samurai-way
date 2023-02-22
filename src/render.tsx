import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, stateType, updateNewPostText } from './redux/state';

export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}
