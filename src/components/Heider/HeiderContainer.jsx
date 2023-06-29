
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authUser, loginUser, logoutUser } from '../../Redux/authReducer';
import { isresultCode, login } from '../../Redux/authSelector';
import Heider from './Heider';

const HeiderContainer = (props) => {

    return <Heider {...props} />
}

let mapStateToProps = (state) => {
    return {
        login: login(state),
        isresultCode: isresultCode(state)
    }
        
}

let authUserData = withRouter(HeiderContainer);

export default connect(mapStateToProps, {authUser, logoutUser} )(authUserData);