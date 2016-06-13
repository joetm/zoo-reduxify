import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';
import base from '../constants/base';
import firebase from 'firebase';


export function fetchIssues() {
  return dispatch => {
    dispatch({
      type: types.REQUEST_ISSUES,
    });
    return fetch('https://api.github.com/repos/zooniverse/wildcam-gorongosa-education/issues?labels=education-api')
      .then(response => response.json())
      .then(array => dispatch({
        type: types.RECEIVE_ISSUES_SUCCESS,
        data: array,
        error: false,
        loading: false,
      }))
      .catch(response => dispatch({
        type: types.RECEIVE_ISSUES_ERROR,
        data: [],
        error: response,
        loading: false,
      })
    );
  }
}


export function saveIssues(issues) {
  return dispatch => {
    dispatch({
      type: types.SAVE_ISSUES,
    });
    return (issues.data).map((issue) => {
      firebase.database().ref('issues/' + issue.number).set({
        title: issue.title,
        body: issue.body,
        url: issue.html_url,
        state: issue.state,
        votes: 0,
      })
    })
  }
}

