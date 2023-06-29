import React from 'react';
import MyPost from './My Post/MyPost';
import My from './My/My';
import s from './Profile.module.css';

function Profile(props) {
    return (
        <div className={s.wrapper}>
            <My user={props.user} status={props.status} putUserStatusProfile={props.putUserStatusProfile} />
            <MyPost profilePage={props.profilePage} addPostTanck={props.addPostTanck} />
        </div>
    );
}

export default Profile;