import React from 'react';
import Contacts from './Contacts/Contacts';
import Dialogs from './Dialogs/Dialogs';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <Contacts contactData={props.contactData} />
            <Dialogs {...props} />
        </div>
    );
}

export default Messages;