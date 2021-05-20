import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControl";
import { requaired } from "../../utils/validators/validators.js";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import stayle from "../common/FormsControls/FormsControl.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [requaired], Input)}
      {createField("Password", "password", [requaired], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [requaired],
        Input,
        {
          type: "checkbox",
        },
        "remember me"
      )}
      {error && <div className={stayle.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
