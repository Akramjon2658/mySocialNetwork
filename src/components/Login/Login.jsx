import React from "react";
import {  reduxForm } from "redux-form";
import { Input, createField } from "../common/FormControl/FormControl";
import {required} from "../../utils/validators/validators"
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom";
import style from "../common/FormControl/FormControl.module.css"

const LoginForm = ({handleSubmit, error, ...props}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, "email", [required], "email", "yourname@example.com")}
      {createField(Input, "password", [required], "password", "Password")}
      {createField(Input, "rememberMe", [], "checkbox", null, "rememberMe")}
      {
        error && <div className={style.summaryError}>
          {error} 
        </div>
      }
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  if(props.isAuth) return <Redirect to='profile' />
  let onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
  isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login);
