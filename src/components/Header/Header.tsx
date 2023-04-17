import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { HeaderPropsType } from './HeaderContainer';
import logo from './../../images/logo.webp'

const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src={logo}  alt="" />

      <div className={s.loginBlock}>
        {props.isAuth && props.login}
        <NavLink to={'/login'}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;

