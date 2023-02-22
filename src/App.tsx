import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { stateType } from './redux/state';

type AppPropsType = {
  state: stateType
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter >
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route component={() =>
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
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
