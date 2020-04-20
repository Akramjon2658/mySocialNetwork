import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormControl/FormControl';
import s from '../profile.module.css'

const ProfileDataForm = ({handleSubmit}) => {
  return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    <div>
      <b>Full name:</b> {createField(Input, "fullName", [], "input", "Full name")}
    </div>
    <div>
      <b>About me:</b> {createField(Textarea, "aboutMe", [], "input", "About me")}
    </div>
    <div>
      <b>My professional skills:</b> {createField(Input, "lookingForAJob", [], "checkbox", "", 'looking')}
    </div>
    <div className={s.description}>
      <b>Description:</b> {createField(Input, "about skills", [], "input", "Profession skills")}
    </div>
  </form>;
};

const ProfileDataFormReduxForm = reduxForm('edit-profile')(ProfileDataForm)
export default ProfileDataFormReduxForm;

