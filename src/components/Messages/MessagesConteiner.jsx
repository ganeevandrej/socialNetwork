import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { addMessageTanck } from '../../Redux/MessageReducer'
import { Redirect } from 'react-router-dom';
import redirectAuthConteiner from '../HOK/hok';
import { compose } from 'redux';
import { contactData, dialogData } from '../../Redux/MessageSelector';

const  MessagesContainer = (props) => {

        if(!props.authUser) {
            return <Redirect to={'/login'} />
        }
        return <Messages {...props} />
}

let mapStateToProps = (state) => {
    return {
        contactData: contactData(state),
        dialogData: dialogData(state),
    }
}

export default compose(
    connect(mapStateToProps, { addMessageTanck }),
    redirectAuthConteiner)(MessagesContainer);