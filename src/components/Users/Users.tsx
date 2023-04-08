import axios from 'axios';
import React, { useEffect, MouseEvent } from 'react';
import { UserType } from '../../redux/users-reducer';
import style from './Users.module.css'

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


export class Users extends React.Component<UsersPageType> {

  componentDidMount(): void {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)
      })
  }

  onPageChanged(page: number): void {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then((response) => this.props.setUsers(response.data.items))
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map(p => (
            <span
              className={this.props.currentPage === p ? style.selected : ''}
              onClick={() => this.onPageChanged(p)}
            >{p} </span>
          )
          )}
        </div>

        {
          this.props.users.map(u => {
            return (
              <div key={u.id}>
                <span>
                  <div>
                    <img src={u.photos.small ? u.photos.small : "avatar.webp"} style={{ width: '50px' }} />
                  </div>
                  <div>
                    {u.followed
                      ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                      : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                    }

                  </div>
                </span>
                <span>
                  <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                  </span>
                  <span>
                    {/* <div>{u.location.country}</div>
                                        <div>{u.location.city}</div> */}
                  </span>
                </span>
              </div>
            )
          })
        }
      </div>
    );
  }
}