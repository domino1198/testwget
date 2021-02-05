import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "../../Redux/UserReducer";

class ProfileContainer extends Component {

    componentDidMount () {
        this.props.getAuthUserData();
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user,
    }

};
export default connect(mapStateToProps, {getAuthUserData, logOut})(ProfileContainer);

