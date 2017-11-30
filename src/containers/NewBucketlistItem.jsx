import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBucketlistItem } from '../actions';

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
class NewItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.addBucketlistItem(id, values, () => {
      this.props.history.push(`/bucketlists/${id}`);
    });
  }
  render() {
    const { handleSubmit } = this.props;
    const { id } = this.props.match.params;
    return (
      <div className="container">
        <h3> New Bucketlist Item</h3>
        <br />
        <form onSubmit={handleSubmit(this.onSubmit)}>

          <Field
            label="Item Name"
            name="name"
            type="input"
            component={renderField}
          />
          <Field
            label="Item Description"
            name="description"
            type="text"
            component={renderField}
          />
          <button type="submit" className="btn btn-success">Create</button>
          <Link to={`/bucketlists/${id}`} className="btn btn-danger">Cancel</Link>
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

export default reduxForm({
  validate,
  form: 'NewItemForm'
})(connect(null, { addBucketlistItem })(NewItem));
