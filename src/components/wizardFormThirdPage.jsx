import React ,{Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import  Dropzone from 'react-dropzone'
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

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
// class DocUpload extends Component {
//     render() {
//         const { input, dataAllowedFileExtensions } = this.props
//         const onInputChange = (e) => {
//             e.preventDefault();
//             const files = [...e.target.files];
//             input.onChange(files);

//         };
//         return (
            
//                 <Dropfile onDrop={() => console.log('test')}>

//                     {<div>
//                         test
//                             </div>}

//                 </Dropfile>
//         )
//     }
// }

const renderError = ({ meta: { touched, error } }) => touched && error ?
    <span>{error}</span> : false

const WizardFormThirdPage = (props) => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>Document</label>
                <div>
                    <Field name="file" component='input' type="hidden" />
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    
                   
                </div>
            </div>

        </form>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(WizardFormThirdPage)