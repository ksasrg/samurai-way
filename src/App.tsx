import { Route } from 'react-router-dom';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer';
import { StoreType } from './redux/redux-store';
import { compose } from 'redux';
import { Preloader } from './components/Preloader/Preloader';

type AppPropsType = {
  isInitialized: Boolean
  getAuthUserData: () => void
}

class App extends Component<AppPropsType> {
  componentDidMount(): void {
    this.props.getAuthUserData()
  }


  render() {
    if (!this.props.isInitialized) {
      return (
        <Preloader />
      )
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
          {/* <Route path='/' render={() => <Redirect to='/profile' />} />  */}
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state: StoreType) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

export default compose(
  // withRouter,
  connect(mapStateToProps, { getAuthUserData })(App)
) 
