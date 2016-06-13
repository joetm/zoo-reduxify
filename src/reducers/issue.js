import * as types from '../constants/actionTypes';

const initialState = {
  data: [],
  error: false,
  loading: false,
};

export function issues(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_ISSUES:
      return Object.assign({}, state, {
        data: [],
        error: false,
        loading: true,
      })
    case types.RECEIVE_ISSUES_SUCCESS:
      return Object.assign({}, state, {
        data: action.data || [],
        error: action.error,
        loading: false,
      })
    default:
      return state;
  }
}
