import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const redirectAuthConteiner = (Component) => {

    class redirectConteiner extends React.Component {

        render() {
            if(!this.props.authUser) {
                return <Redirect to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToProps)(redirectConteiner);
}

let  mapStateToProps = (state) => {
    return {
        authUser: state.auth.isresultCode}
}

export default redirectAuthConteiner;




