import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/redux-store';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import './components/Users/Users copy.tsx'

ReactDOM.render(
    <BrowserRouter >
        <Provider store={store}  >
            <App />
        </Provider >
    </BrowserRouter>,
    document.getElementById('root')
);