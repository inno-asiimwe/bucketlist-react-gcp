import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../actions';

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
class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values) {
    this.props.loginUser(values);
  }
  render() {
    if (this.props.auth.Authenticated) {
      return <Redirect to="/" />;
    }
    const { handleSubmit } = this.props;
    return (
      <div className="container">
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
})(connect(mapStateToProps, { loginUser })(LoginUser));
