import React from "react";
import s from './Users.module.css';
import Preloader from "../../../../component/pleloader/preloader";
import { NavLink } from "react-router-dom";

const Users = React.memo((props) => {
    return (
        <div className={s.users}>
            <div className={s.usersitems}>
                {
                    props.users.map(u => <div key={u.id} className={s.useritem}>
                        <div className={s.photosbutton}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small == null ? "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" : u.photos.small} className={s.userphoto} />
                            </NavLink>
                            {u.followed === false
                            ? <button disabled={props.disebledProcces.some((id) => id === u.id)}
                                onClick={() => {
                                    props.followUser(u.id)
                                }}>Добавить</button>
                            : <button disabled={props.disebledProcces.some((id) => id === u.id)}
                                onClick={() => {
                                    props.notFollowUser(u.id)
                                }}>Удалить</button>}
                        </div>
                        <div className={s.discription}>
                            <p className={s.p}>{u.name}</p>
                            <p className={s.p}>{u.status}</p>
                            <p className={s.p}>{u.city}</p>
                            <p className={s.p}>{u.country}</p>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className={s.ikon}>
                {props.isPreloader ? <Preloader /> : <button onClick={props.onClick}>Показать больше</button>}
            </div>
        </div>
    );
})

export default Users;