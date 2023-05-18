import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { HeaderPropsType } from './HeaderContainer';
import logo from './../../images/logo.webp'

type PropsType = HeaderPropsType & {
  logoutTC: () => void
}

const Header = (props: PropsType) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="" />

      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} <button onClick={props.logoutTC}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }

      </div>
    </header>
  );
};

export default Header;

