import React from 'react';
import { connect } from 'react-redux';
import { StoreType } from '../../redux/redux-store';
import {
    follow, setCurrentPage, setTotalUserCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching, unfollow, UserType
} from '../../redux/users-reducer';
import { Users } from './Users';
import { Preloader } from '../Preloader/Preloader';
import { usersAPI } from '../../api/api';



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
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (page: number) => void,
    setTotalUserCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void,
    toggleFollowingInProgress: (isFollowingInProgress: boolean, userId: number) => void
}

export class UsersAPIComponent extends React.Component<UsersPageType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (page: number): void => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleFollowingInProgress,
})(UsersAPIComponent)