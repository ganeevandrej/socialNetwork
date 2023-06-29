import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Contacts.module.css";

const Contact = (props) => {
    let path = "/Massages/" + props.id;

    return (
        <div className={s.contact}>
                <NavLink  to={path}>{props.name}</NavLink>
            </div>
    );
}

const Contacts = (props) => {
    let contactsElements = props.contactData.map( (contact) => <Contact name={contact.name} id={contact.id} />);

    return (
        <div className={s.contacts}>
            { contactsElements }
        </div>
    );
}

export default Contacts;