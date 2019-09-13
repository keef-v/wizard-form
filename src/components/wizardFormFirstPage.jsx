import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import validate from './validate'
// import renderField from './renderField'

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.sex) {
        errors.sex = 'Required'
    }
    if (!values.favoriteColor) {
        errors.favoriteColor = 'Required'
    }
    return errors
}
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span className='error'>{error}</span>}
        </div>
    </div>
)


const WizardFormFirstPage = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <p className='section'>Section 1</p>
            <Field name="firstName" type="text" component={renderField} label="First Name" />
            <Field name="lastName" type="text" component={renderField} label="Last Name" />
            <div className='form-buttons'>
                <button type="submit" className="next a-btn">Next</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'wizard',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(WizardFormFirstPage)