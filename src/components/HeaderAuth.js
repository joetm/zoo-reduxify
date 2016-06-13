//A smart component that handles state for the LoginButton and LoggedInUser
//components. Stores state in Redux.

import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkLoginUser, setLoginUser, loginToGithub, logoutFromGithub } from '../actions/user';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class HeaderAuth extends Component {

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (!this.props.initialised) {
      this.props.dispatch(checkLoginUser());
    }
  }

  login() {
    return this.props.dispatch(loginToGithub());
  }

  logout() {
    this.props.dispatch(logoutFromGithub());
  }

  render() {
    return (this.props.user)
    ? <LogoutButton user={this.props.user.displayName} logout={this.logout} />
    : <LoginButton login={this.login} />;
  }
}

HeaderAuth.propTypes = {
  user: PropTypes.object,
  initialised: PropTypes.bool
};
HeaderAuth.defaultProps = {
  user: null,
  initialised: false
};
function mapStateToProps(state, ownProps) {  //Listens for changes in the Redux Store
  return {
    user: state.login.user,
    initialised: state.login.initialised
  };
}
export default connect(mapStateToProps)(HeaderAuth);  //Connects the Component to the Redux Store
