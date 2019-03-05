import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SimpleFormInput from './SimpleFormInput';
import { validate } from './validate';
import './SimpleForm.css';


class SimpleForm extends Component {
    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit}
                className="simpleForm"
            >
                <Field
                    name="userName"
                    type="text"
                    component={SimpleFormInput}
                    label="User Name"
                    className="simpleForm__input"
                />
                <Field
                    name="password"
                    type="password"
                    component={SimpleFormInput}
                    className="simpleForm__input"
                />
                <Field
                    name="remember"
                    type="checkbox"
                    component={SimpleFormInput}
                    label="Remember Me"
                    className="simpleForm__input--inline"
                />
                <button 
                    type="submit"
                    className="simpleForm__btn"
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'simple',
    validate
})(SimpleForm);