import React from 'react';
import { connect } from 'react-redux';
import { StoreType } from '../../redux/redux-store';
import { DispatchActionType, followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer';
import axios from 'axios';
import { Users } from './Users';


export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (page: number) => void,
    setTotalUserCount: (count: number) => void
}


export class UsersAPIComponent extends React.Component<UsersPageType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    // onPageChanged(page: number): void {
    //   this.props.setCurrentPage(page)
    //   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
    //     .then((response) => this.props.setUsers(response.data.items))
    // }

    onPageChanged = (page: number): void => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => this.props.setUsers(response.data.items))
    }

    render() {

        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
        />
    }
}


const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: (action: DispatchActionType) => void) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUserCount: (count: number) => dispatch(setTotalUserCountAC(count)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)