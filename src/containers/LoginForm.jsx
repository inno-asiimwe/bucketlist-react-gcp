import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { loginUser, clearMessages } from '../actions';

const FIELDS = ['username', 'password'];
function renderField(field) {
  const { meta: { touched, error } } = field;
  const className = `form-group row ${touched && error ? 'has-danger' : ''}`;
  return (
    <div className={className}>
      <label>{field.label}</label>
      <input
        className="form-control"
        type={field.type}
        {...field.input}
      />
      <div className="form-control-feedback">
        {touched ? error : ''}
      </div>
    </div>
  );
}
export class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values) {
    this.props.loginUser(values);
  }
  notify_error = (msg) => {
    toast.error(msg);
  }
  notify_success = (msg) => {
    toast.success(msg)
  }

  render() {
    if (this.props.auth.success && this.props.auth.Authenticated) {
      this.notify_success(this.props.auth.success_msg)
      this.props.clearMessages()
    }
    if (this.props.auth.Authenticated ) {
      return <Redirect to="/" />;
    } 
    else if (this.props.auth.error) {
      this.notify_error(this.props.auth.error_msg)
      this.props.clearMessages();
    }
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <ToastContainer />
        <h3> Login </h3>
        <br />
        <form onSubmit={handleSubmit(this.onSubmit)}>

          <Field
            label="Username"
            name="username"
            typoe="input"
            component={renderField}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            component={renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // validating the inputs from 'values'
  _.forEach(FIELDS, (field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  });
  return errors;
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default reduxForm({
  validate,
  form: 'LoginForm'
})(connect(mapStateToProps, { loginUser, clearMessages })(LoginUser));
