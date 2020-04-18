import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() { 
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.authorizedUserId 
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId)
  }
  render() { 
    return <Profile {...this.props} profile = { this.props.profile } status = {this.props.status} updateUserStatus = {this.props.updateUserStatus} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.id
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)