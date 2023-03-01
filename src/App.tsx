import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { DispatchActionType, stateType } from './redux/state';

type AppPropsType = {
  state: stateType
  dispatch: (action: DispatchActionType) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter >
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/profile'
            render={() =>
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            } />
          <Route
            path='/dialogs'
            render={() =>
              <Dialogs
                dialogsData={props.state.messagesPage}
                dispatch={props.dispatch}
              />} />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
