import React from "react";
import Post from "./post";
import s from "./post.module.css";
import { Field, reduxForm } from "redux-form";
import { required, maxLength } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControl/FormControl";

const MyPosts = React.memo((props) => {
  let addPost = (values) => {
    props.addPost(values.newPost);
  };

  let messageElements = [...props.posts].reverse().map((m) => (
    <Post post={m.post} />
  ));

  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <AddPostFormRedux onSubmit={addPost} />
      {messageElements}
    </div>
  );
}
);

let maxLength10 = maxLength(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPost"
          placeholder="Add a new post"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "profile" })(AddPostForm);

export default MyPosts;
