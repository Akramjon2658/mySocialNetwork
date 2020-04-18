import React from "react";
import s from "../Dialogs/dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import {required, maxLength} from '../../utils/validators/validators'
import {Textarea} from '../common/FormControl/FormControl'

const Dialogs = (props) => {
  let sendMessage = (text) => {
    props.sendMessage(text);
  };
  let addNewMessage = (values) => {
    sendMessage(values.newMessage)
  }

  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));
  let messageElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messageElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
let maxLength50 = maxLength(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessage"
        placeholder="Enter a new message"
        validate={[required, maxLength50]}
      />
      <button> SEND </button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;
