import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import validate from './validate'
// import renderField from './renderField'




const WizardFormFirstPage = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <p className='section'>This form has three sections the last section has the file upload</p>

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
})(WizardFormFirstPage)