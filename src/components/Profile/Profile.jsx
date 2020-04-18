import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "../Profile/profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile = { props.profile } status = {props.status} updateUserStatus = {props.updateUserStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

