import { NavLink } from 'react-router-dom'
import { UserType } from '../../redux/users-reducer'
import style from './Users.module.css'
import avatar from './../../images/avatar.webp'
import axios from 'axios'

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (page: number) => void
}

export const Users = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p ? style.selected : ''}
                        onClick={() => props.onPageChanged(p)}
                    >{p} </span>
                )
                )}
            </div>

            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small ? u.photos.small : avatar} style={{ width: '50px' }} />
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '20b1af3b-5a7c-4983-a025-9f9dbeabc720'
                                                    }
                                                }
                                            )
                                                .then((response) => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                })

                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '20b1af3b-5a7c-4983-a025-9f9dbeabc720'
                                                    }
                                                }
                                            )
                                                .then((response) => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                })


                                        }}>Follow</button>
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