import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { } from '../actions';

const FIELDS = ['name', 'description'];
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
const UpdateBucketlistForm = (props) => {
  const { handleSubmit } = props;
  const { onSubmit } = props;
  const { entity } = props;

  return (
    <div className="container">
      <h3> {`Update ${entity}`}</h3>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>

        <Field
          label={`${entity} Name`}
          name="name"
          type="input"
          component={renderField}
        />
        <Field
          label={`${entity} Description`}
          name="description"
          type="text"
          component={renderField}
        />
        <button type="submit" className="btn btn-success">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    </div>
  );
};

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
export default reduxForm({
  validate,
  form: 'UpdateBucketlistForm'
})(UpdateBucketlistForm);
