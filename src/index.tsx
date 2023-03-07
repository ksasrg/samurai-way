import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {  RootReducerType, store } from './redux/redux-store';
import './index.css'
import { stateType } from './redux/store';



export const rerenderEntireTree = (state: RootReducerType) => {
    ReactDOM.render(
        <App
            state={store.getState()}
            // addPost={store.addPost.bind(store)}
            dispatch={store.dispatch.bind(store)}
            // addPost={store.dispatch.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))

