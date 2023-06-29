
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { followUser, notFollowUser, getUsers, onclickGetUsers, upUsers, isDesebledProcces } from "../../../Redux/UsersReducer";
import { disebledProcces, isPreloader, pageNumberUsers, users } from "../../../Redux/UsersSelector";
import Users from "./Users/Users";

class UsersContainer extends React.Component {

    state = {
        pageNumberUsers: 0
    }

    pageCount = (count) => {
        this.setState({
            pageNumberUsers: count + +1
        })
    }

    componentDidMount() {
        this.props.getUsers(this.state.pageNumberUsers +1);
        this.pageCount(this.state.pageNumberUsers +1);
    }

    onClick = () => {
        this.props.onclickGetUsers(this.state.pageNumberUsers);
        this.pageCount(this.state.pageNumberUsers);
    }

    render() {
        return <Users users={this.props.users}
                      notFollowUser={this.props.notFollowUser}
                      followUser={this.props.followUser}
                      onClick={this.onClick}
                      isPreloader={this.props.isPreloader}
                      setPreloader={this.props.setPreloader}
                      disebledProcces={this.props.disebledProcces}
                      isDesebledProcces={this.props.isDesebledProcces}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: users(state),
        pageNumberUsers: pageNumberUsers(state),
        isPreloader: isPreloader(state),
        disebledProcces: disebledProcces(state)
    }
}




export default compose(connect(mapStateToProps, {upUsers, onclickGetUsers, followUser, 
                                  notFollowUser, getUsers, isDesebledProcces }),
                        )(UsersContainer);