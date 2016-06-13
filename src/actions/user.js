import { browserHistory } from 'react-router';
import * as types from '../constants/actionTypes';
import base from '../constants/base';
import firebase from 'firebase';

export function checkLoginUser() {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      user
      ? dispatch(setLoginUser(user.providerData[0]))
      : console.log('User not logged in')
    })
  }
}

export function setLoginUser(user) {
  return (dispatch) => {
    dispatch({
      type: types.SET_LOGIN_USER,
      user
    });
  };
}

export function loginToGithub() {
  return (dispatch) => {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((data) => {
//      this.setState({
//        user: data.user
//      })
      console.log('Login successful. User: ', data.user.displayName)
    })
    .catch((error) => {
      console.log('Error logging in: ', error)
    });
  }
}

export function logoutFromGithub() {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(user => {
        dispatch(setLoginUser(user));
        console.log('Logout successful');
      });
  }
}
