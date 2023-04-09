import { UserType } from '../../redux/users-reducer'
import style from './Users.module.css'

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
}