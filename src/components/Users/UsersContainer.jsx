import React from "react";
import { follow, unfollow, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSelector } from "./users-reselect";

class UsersContainer extends React.Component {
  componentDidMount() { 
    this.props.getUsers(this.props.currentPage, this.props.pageSize)      
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)     
  }
  render() { 
    return <Users totalUsersCount = { this.props.totalUsersCount}
                  pageSize = { this.props.pageSize}
                  currentPage = { this.props.currentPage }
                  isFetching = { this.props.isFetching }
                  onPageChanged = {this.onPageChanged}
                  users = {this.props.users} 
                  follow = { this.props.follow } 
                  unfollow = { this.props.unfollow }
                  toggleFollowingProgress = {this.props.toggleFollowingProgress}
                  followingInProgress = {this.props.followingInProgress} />
  }
}
let mapStateToProps = state => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
}; 
/*let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    }
  };
};*/
export default connect(mapStateToProps, 
  {
    follow,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers
  }
  )(UsersContainer);
