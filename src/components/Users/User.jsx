import React from "react";
import logo from "../Profile/ProfileInfo/IslamicBanking.jpg";
import s from "./users.module.css";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, follow, unfollow  }) => {
  return (
    <div className={s.user} key={user.id}>
      <span className={s.profile}>
        <NavLink to={`/profile/${user.id}`}>
          <img src={user.photos.small ? user.photos.small : logo} alt="logo" />
        </NavLink>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => unfollow(user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => follow(user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span className={s.messageBody}>
        <span>
          <div> {user.id} </div>
          <div> {user.name} </div>
        </span>
        <span>
          <div> {"user.location.country"} </div>
          <div> {"user.location.city"} </div>
        </span>
      </span>
    </div>
  );
};
export default User;
