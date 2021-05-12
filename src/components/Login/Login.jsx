import React from "react";
import { Field, reduxForm } from "redux-form";
import { requaired } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControl";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={Input} validate={[requaired]} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={Input} validate={[requaired]}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginRedaxForm = reduxForm({
  form: "Login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginRedaxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
