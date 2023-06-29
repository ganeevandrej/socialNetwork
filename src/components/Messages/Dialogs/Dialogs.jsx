import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { Textarea } from '../../../component/pleloader/validateComponent/ComponentField';
import s from "./Dialogs.module.css";
import { maxlenght, required } from '../../../component/pleloader/validateComponent/validate';

const maxlenght50 = maxlenght(50);

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <img className={s.img} src={props.url} />
            <span>{props.message}</span>
        </div>
    );
}

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Напиши сообщение' name='message' component={Textarea} 
                validate={[required, maxlenght50]} />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    );
}

const MessageForm = reduxForm({form: 'message'})(addMessageForm);

const Dialogs = React.memo((props) => {
    let dialogsElements = props.dialogData.map(
        dialog => <Dialog message={dialog.message} url={dialog.url} />);

    let onSubmit = (formData) => {
        props.addMessageTanck(formData.message);
    }

    return (
        <div className={s.dialogs}>
            {dialogsElements}
            <div className={s.input}>
                <MessageForm onSubmit={onSubmit} />
            </div>
        </div>

    );
})

export default Dialogs;