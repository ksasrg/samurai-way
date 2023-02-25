import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { stateType, store } from './redux/state';
import './index.css'



export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subcribe(rerenderEntireTree)

