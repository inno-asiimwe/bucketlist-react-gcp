import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

class RegisterUser extends Component {
    renderField(field) {
        const{ meta: { touched, error }} = field;
        const className = `form-group row ${touched && error ? 'has-danger': ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="form-control-feedback">
                    {touched ? error: ''}
                </div>
            </div>
        );
    }
    onSubmit(values) {
        this.props.registerUser(values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container">
                <h3> Register </h3>
                <br></br>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="First Name"
                        name="firstname"
                        component={this.renderField}
                    />
                    <Field
                        label="Last Name"
                        name="lastname"
                        component={this.renderField}
                    />
                    <Field
                        label="Username"
                        name="username"
                        component={this.renderField}
                    />
                    <Field
                        label="Password"
                        name="password"
                        component={this.renderField}
                    />
                    <Field
                        label="Confirm Password"
                        name="cpassword"
                        component={this.renderField}
                    />
                    <Field
                        label="Email"
                        name="email"
                        component={this.renderField}
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
    //validating the inputs from 'values'
    if (!values.firstname) {
        errors.firstname = "Enter a firstname";
    }
    if (!values.lastname) {
        errors.lastname = "Enter a lastname";
    }
    if (!values.username) {
        errors.username = "Enter a username";
    }
    if (!values.password) {
        errors.password = " Enter a password";
    }
    if (!values.cpassword) {
        errors.cpassword = "Confirm password";
    }
    if (!values.email) {
        errors.email = "Enter email";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'RegisterForm'
})(
    connect(null, { registerUser })(RegisterUser)
);