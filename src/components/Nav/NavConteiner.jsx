import React from 'react';
import { connect } from 'react-redux';
import Nav from './NavConteiner/Nav';

let mapStateToProps = (state) => {

    return {
        contactData: state.messagesPage.contactData,
        navigations: state.sitebar.navigations
    }
}

const NavConteiner = connect(mapStateToProps)(Nav);


export default NavConteiner;