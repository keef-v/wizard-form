import React ,{Component} from 'react'
import { Form,Field, reduxForm } from 'redux-form'
import  Dropzone from 'react-dropzone'
import DropZoneField from "../components/dropzoneField"

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

const imageIsRequired = value => (!value ? "Required" : undefined);

class WizardFormThirdPage extends Component {
   
constructor(props) {
    super(props);
    this.state = {
        progressTracker: 1,
        state : { imageFile: [] }
    };
    const { handleSubmit, previousPage } = props
} 
    handleFormSubmit = formProps => {
        const fd = new FormData();
        fd.append("imageFile", formProps.imageToUpload[0]);
        alert(JSON.stringify(formProps, null, 4));
        // append any additional Redux form fields
        // create an AJAX request here with the created formData
    };

    handleOnDrop = newImageFile =>  {console.log(newImageFile);  return this.setState({ imageFile: newImageFile });}

    //  handleOnDrop = newImageFile => console.log('test');

    resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());
render() {
    return (
        <form onSubmit={this.handleSubmit}>

            <div>
                <label>Document</label>
                <div>
      
                    
                    <Field
                        name="imageToUpload"
                        component={DropZoneField}
                        type="file"
                        imagefile={this.state.imageFile}
                        handleOnDrop={this.handleOnDrop}
                        validate={[imageIsRequired]}

                    />
                    <button  type="submit" />
                </div>
            </div>

        </form>
    )
  }
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(WizardFormThirdPage)