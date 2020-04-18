import {authAPI} from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState =  {
  id: null,
  email: null,
  login: null,
  isAuth: false 
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state, 
        ...action.data
      }
    default: 
      return state;
  }
}
export const setAuthUserData = (id, email, login, isAuth) =>({ type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth} })

export const getAuthUser = () => async (dispatch) => {
    let data = await authAPI.getAuthUser()
        if(data.resultCode === 0) {
          let {email, id, login} = data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
  }
export const login = (email, password, rememberMe = false) => async (dispatch) => {
     let response = await authAPI.login(email, password, rememberMe)
        if(response.data.resultCode === 0) {
          dispatch(getAuthUser())
        } else {
          let errorMessage = response.data.messages.length > 0 ? response.data.messages : "Some error";
          dispatch(stopSubmit('login', {_error: errorMessage}))
        }
  }
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
        if(response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
}
export default authReducer;