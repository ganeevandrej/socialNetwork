import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Heider.module.css';

 function Heider(props) {
    return (
    <header className={s.Header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" />
        {props.isresultCode 
            ? <span>
                {props.login} - 
                <button onClick={props.logoutUser}>log out</button>
            </span>
            : <NavLink to='/login'>Login</NavLink>}
    </header>);
}

export default Heider;