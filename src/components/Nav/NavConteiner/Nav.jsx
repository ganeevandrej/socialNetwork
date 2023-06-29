import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Item = (props) => {
    return (
        <div className={s.friend}>
            <a href="/profile" className={s.a}>
                <div className={s.acontent}>
                    <img src={props.url}></img>
                    <span>{props.name}</span>
                </div>
            </a>
        </div>
    );
}

const Navigation = (props) => {

    return (
        <div className={s.item}>
            <NavLink 
                to={props.to} 
                className={navData => navData.isActive ? s.active : s.item}>{props.link}</NavLink>
        </div>
    );

}

function Nav(props) {

    let friends = props.contactData.map((friend) => <Item name={friend.name} url={friend.url} />);
    let links = props.navigations.map( (links) => <Navigation to={links.to} link={links.link} />);


    return (
        <nav className={s.nav}>
            <div className={s.items}>
                {links}
            </div>
            <div className={s.sitebar}>
                <h3>Friends</h3>
                <div className={s.friends}>
                    {friends}
                </div>

            </div>
        </nav>);
}

export default Nav;