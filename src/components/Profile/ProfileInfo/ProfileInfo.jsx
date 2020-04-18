import React from 'react'
// import s from '../profile.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div className=''>
      <img src={props.profile.photos.large} alt="" />
      <ProfileStatus status = {props.status} updateUserStatus = {props.updateUserStatus} />
    </div> 
  )
}

export default ProfileInfo;