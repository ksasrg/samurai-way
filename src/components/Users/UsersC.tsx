import axios from 'axios';
import React, { useEffect } from 'react';
import { UserType } from '../../redux/users-reducer';

export type UsersPageType = {
  users: UserType[]
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUsers: (users: UserType[]) => void,
}


export class Users extends React.Component<UsersPageType> {

  componentDidMount(): void {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => this.props.setUsers(response.data.items))
  }

  render() {
    return (
      <div>
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