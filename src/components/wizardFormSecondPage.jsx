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




const renderError = ({ meta: { touched, error } }) => touched && error ?
    <span>{error}</span> : false

const WizardFormSecondPage = (props) => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <p className='section'>Section 2</p>
            <Field name="email" type="email" component={renderField} label="Email" />
            <div>
                <label>Sex</label>
                <div>
                    <label><Field name="sex" component="input" type="radio" value="male" /> Male</label>
                    <label><Field name="sex" component="input" type="radio" value="female" /> Female</label>
                    <Field name="sex" component={renderError} />
                </div>
            </div>
            <div className='form-buttons'>
                <button type="button" className="previous a-btn" onClick={previousPage}>Previous</button>
                <button type="submit" className="next a-btn">Next</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'wizard',  //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(WizardFormSecondPage)