import axios from 'axios';
import React, { useEffect } from 'react';
import { UserType } from '../../redux/users-reducer';

export type UsersPageType = {
    users: UserType[]
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
}

export const Users = (props: UsersPageType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            // props.setUsers([
            //     { id: 1, photoURL: 'avatar.webp', followed: true, fullName: 'Dmitry', status: 'online', location: { city: 'Minsk', country: 'Belarus' } },
            //     { id: 2, photoURL: 'avatar.webp', followed: false, fullName: 'Alexey', status: 'offline', location: { city: 'Moscow', country: 'Russia' } },
            //     { id: 3, photoURL: 'avatar.webp', followed: true, fullName: 'Sasha', status: 'home', location: { city: 'Kiev', country: 'Ukraine' } },
            // ])

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => props.setUsers(response.data.items))
        }
    }


    return (
        <div>
            <button onClick={getUsers} >get</button>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small ? u.photos.small : "avatar.webp"} style={{ width: '50px' }} />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(u.id)}>Follow</button>
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
};

