import React, { useState } from 'react'
import s from '../profile.module.css'
import logo from './IslamicBanking.jpg'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
  let [editMode, setEditMode] = useState(false)

  if(!profile) {
    return <Preloader />
  }
  let onPhotoSelected = (e) => {
    if(e.target.files.length) savePhoto(e.target.files)
  }
  let onSubmit = (formData) => {
    console.log(formData)
    //props.login(formData.email, formData.password, formData.rememberMe)
  }
  return (
    <div className={s.profile}>
      <div className={s.profImage} >
        { isOwner && <div className={s.uploadPhoto}>
            <input type="file" onChange={onPhotoSelected}/>
            </div>}
        <img src={profile.photos.large || logo} alt="" />
        <ProfileStatus status = {status} updateUserStatus = {updateUserStatus} />
      </div>
      <div className={s.restData}>
        { editMode 
            ? <ProfileDataForm profile={profile} onSubmit={onSubmit} />
            : <ProfileData profile={profile} isOwner={isOwner} editProfile = {setEditMode}/>
        }
      </div>
    </div> 
  )
}
const ProfileData = ({profile, isOwner, editProfile}) => {
  return <div>
    <div className="text-right">
      {isOwner && <button onClick={() => editProfile(true)} className="btn btn-success">Edit profile</button>}
    </div>
    <div>
      <b>Full name:</b> {profile.fullName}
    </div>
    <div>
      <b>About me:</b> {profile.aboutMe}
    </div>
    <div>
      <b>Looking for a job:</b> {profile.lookingForAJob? "yes" : "no"}
    </div>
    {profile.lookingForAJob && <div className={s.description}>
      <b>Description:</b> {profile.lookingForAJobDescription}
    </div>}
    <div>
      <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })
    }
    </div>
  </div>
}
const Contacts = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
}
export default ProfileInfo;