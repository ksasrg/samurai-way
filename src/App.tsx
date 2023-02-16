import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { stateType } from './redux/state';

type AppProps = {
  state: stateType
}

function App(props: AppProps) {
  return (
    <BrowserRouter >
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route component={() =>
            <Profile postsData={props.state.profilePage}
            />
          } path='/profile' />
          <Route component={() =>
            <Dialogs
              dialogsData={props.state.messagesPage}
            />} path='/dialogs' />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
