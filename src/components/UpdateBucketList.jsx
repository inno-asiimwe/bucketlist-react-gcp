/** Form used while editing bucketlists and bucketlist items */
import React from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const FIELDS = ['name', 'description'];
/**
 * function renders fields with the form
 * @param {object} field - field to be rendered
 */
function renderField(field) {
  const { meta: { touched, error } } = field;
  // dynamically set class for the field
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
/**
 * function laysout the form used to edit bucketlists and items
 * @param {object} props - props passed to the component
 */
const UpdateBucketlistForm = (props) => {
  const { handleSubmit } = props;
  const { onSubmit } = props;
  const { entity } = props;
  const { returnTo } = props;

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
        <Link to={returnTo} className="btn btn-danger">Cancel</Link>
      </form>
    </div>
  );
};

/**
 * Function validates form input.
 * @param {object} values - values entered in the form.
 * @returns {object} - errors for the fields in the form
 */
function validate(values) {
  const errors = {};
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
