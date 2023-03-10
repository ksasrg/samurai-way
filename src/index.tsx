import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/redux-store';
import './index.css'

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(() => rerenderEntireTree())

