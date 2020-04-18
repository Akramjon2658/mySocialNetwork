import React from "react";
import s from '../dialog.module.css'

const Message = props => {
  // let path = "/dialogs/"
  return (
    <div className={s.message}>
      <div> {props.message}</div>
    </div>
  );
};

export default Message;