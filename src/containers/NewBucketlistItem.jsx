import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
export class NewItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.addBucketlistItem(id, values, () => {
      this.notify_success(id);
    }, () => {this.notify_error()});
  }
  notify_success = (id) => {
    toast.success("Item has been added to the bucketlist", {onClose: () => {this.props.history.push(`/bucketlists/${id}`)}, autoClose: 1000});
  }
  notify_error = () => {
    toast.error("Item not added ensure name is unique");
  }
  render() {
    if (!this.props.auth.Authenticated) {
      return <Redirect to="/login" />;
    }
    const { handleSubmit } = this.props;
    const { id } = this.props.match.params;
    return (
      <div className="container">
      <ToastContainer />
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

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default reduxForm({
  validate,
  form: 'NewItemForm'
})(connect(mapStateToProps, { addBucketlistItem })(NewItem));
