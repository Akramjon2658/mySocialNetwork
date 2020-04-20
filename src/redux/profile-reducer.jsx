import {profileAPI} from '../api/api'

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

let initialState =  {
  posts: [
    { id: 1, post: "Hai" },
    { id: 3, post: "How are you" },
    { id: 3, post: "It's my post" }
  ],
  profile: null ,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let row = {
        id: 7,
        post: action.text
      };
      return {
        ...state,
        posts: [...state.posts, row]
      }
    }
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state, status: action.status
      }
    case SAVE_PHOTO:
      return {
        ...state, profile: { ...state.profile, photos: action.photos}
      }
    default: 
      return state;
  }
}

export const addPostCreator = (text) =>({ type: ADD_POST, text })
export const setUserProfile = (profile) =>({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) =>({ type: SET_USER_STATUS, status })
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId)
      dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
      if(response.data.resultCode === 0){
        dispatch(setUserStatus(status))
      }
}
export const savePhoto = (photos) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photos)
      if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
      }
}

export default profileReducer;