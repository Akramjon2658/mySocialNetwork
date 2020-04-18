import React from "react";
import Header from "./Header";
import {getAuthUser, logout} from '../../redux/auth-reducer'
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUser();
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
} 

export default connect(mapStateToProps, {getAuthUser, logout})(HeaderContainer);
