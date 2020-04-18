import React from "react";
import s from "./post.module.css";
import logo from "../ProfileInfo/IslamicBanking.jpg"

const Post = props => {
  return (
      <div className={s.posts}>
        <div className={s.item}>
          <img src={logo} alt="logo" />
          <a href="#s"> {props.post}</a>
        </div>
      </div>
  );
};

export default Post;
