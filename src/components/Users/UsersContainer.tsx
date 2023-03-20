import React from 'react';
import { connect } from 'react-redux';
import { StoreType } from '../../redux/redux-store';
import { DispatchActionType, followAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer';
import { Users } from './Users';

const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: DispatchActionType) => void) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)