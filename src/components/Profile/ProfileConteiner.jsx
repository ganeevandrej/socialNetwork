import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { addPost, getAuthUserProfile, addPostTanck, getUserStatusProfile, putUserStatusProfile } from "../../Redux/ProfileReducer";
import { getStatus, profilePage, user } from "../../Redux/ProfileSelector";
import redirectAuthConteiner from "../HOK/hok";
import Profile from "./Profile";

class ProfileConteiner extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.userid;
        if (!userid) {
            userid = 22906;
        }
        this.props.getAuthUserProfile(userid);
        this.props.getUserStatusProfile(userid);
    }

    render() {
        return <Profile {...this.props} user={this.props.user} />
    }
}

let mapStateToProps = (state) => {

    return {
        profilePage: profilePage(state),
        user: user(state),
        status: getStatus(state)
    }
}

export default compose(
    connect(mapStateToProps, { addPost, getAuthUserProfile,
         getUserStatusProfile, putUserStatusProfile, addPostTanck }),
    withRouter,
    redirectAuthConteiner)(ProfileConteiner);