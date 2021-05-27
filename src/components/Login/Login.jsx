import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControl";
import { requaired } from "../../utils/validators/validators.js";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import stayle from "../common/FormsControls/FormsControl.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl}) => {
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

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("symbols from image","captcha", [requaired], Input, {} )}



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
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
