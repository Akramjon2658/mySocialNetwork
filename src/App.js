import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import Nav from './components/Navbar/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import withSuspense from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <div className="preloader"><Preloader /></div>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/login" render={withSuspense(LoginPage)}/>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = () => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider> 
  </HashRouter>
} 
  export default SamuraiJSApp;