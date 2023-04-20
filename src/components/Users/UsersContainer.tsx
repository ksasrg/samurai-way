import React from 'react';
import { connect } from 'react-redux';
import { StoreType } from '../../redux/redux-store';
import {
    follow, getUsers, onPageChange,
    unfollow, UserType
} from '../../redux/users-reducer';
import { Users } from './Users';
import { Preloader } from '../Preloader/Preloader';

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: boolean
    followingInProgress: number[]
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
    onPageChange: (page: number, pageSize: number) => void
}

export class UsersAPIComponent extends React.Component<UsersPageType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChangeHandler = (page: number): void => {
        this.props.onPageChange(page, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                followThunkCreator={this.props.follow}
                unfollowThunkCreator={this.props.unfollow}
                onPageChanged={this.onPageChangeHandler}
                isFollowingInProgress={this.props.isFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    getUsers,
    onPageChange,
    follow,
    unfollow,
})(UsersAPIComponent)