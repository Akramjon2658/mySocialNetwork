import {
  addPostCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostCreator(text));
    }
  }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)
export default MyPostsContainer;
