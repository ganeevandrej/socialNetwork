import React from 'react';
import Preloader from '../../../component/pleloader/preloader';
import s from './My.module.css';
import StatusHook from './Status/Status';

function My(props) {
    if (!props.user){
        return <Preloader />
    }

    return (
        <div className={s.my}>
            <div className={s.imeg}>
                <img src="https://i.pinimg.com/736x/c6/e2/25/c6e2253365d1d3c604d4fef086ac94ba.jpg" />
            </div>
            <div className={s.logoblock}>
                <img className={s.logo} src={props.user.photos.large === null ? "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"  : props.user.photos.large} />
                <StatusHook status={props.status} putUserStatusProfile={props.putUserStatusProfile} />
            </div>
        </div>
    );
}

export default My;